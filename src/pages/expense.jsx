import { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayouts";
import ExpenseCategoryCard from "../components/Elements/ExpenseCategoryCard";
import Icon from "../components/Elements/Icon";
import { expensesService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";
import CircularProgress from "@mui/material/CircularProgress";

function pickIcon(category = "") {
  const key = category.toLowerCase();
  if (key.includes("hous")) return <Icon.House />;
  if (key.includes("food")) return <Icon.Food />;
  if (key.includes("transport")) return <Icon.Transport />;
  if (key.includes("entertain")) return <Icon.Gamepad />;
  if (key.includes("shop")) return <Icon.Shopping />;
  return <Icon.Other />;
}

function ExpensePage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchExpenses = async () => {
    try {
      setLoading(true);
      const data = await expensesService();
      setCategories(Array.isArray(data) ? data : []);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data expenses",
        severity: "error",
      });
      if (err.status === 401) {
        logout();
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <MainLayout>
      <div className="text-2xl text-gray-02 mb-4">Expenses Comparison</div>

      {loading ? (
        <div className="flex flex-col justify-center items-center h-96 text-primary">
          <CircularProgress color="inherit" size={50} enableTrackSlot />
          Loading Data
        </div>
      ) : categories.length === 0 ? (
        <div className="flex justify-center items-center h-96 text-gray-03">
          Tidak ada data pengeluaran
        </div>
      ) : (
        <div className="grid sm:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <ExpenseCategoryCard
              key={cat.category}
              icon={pickIcon(cat.category)}
              category={cat.category}
              amount={cat.amount}
              percentage={cat.percentage}
              trend={cat.trend}
              items={cat.detail}
            />
          ))}
        </div>
      )}

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </MainLayout>
  );
}

export default ExpensePage;