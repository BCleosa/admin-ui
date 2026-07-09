import React from "react";
import Card from "../Elements/Card";
import Icon from "../Elements/Icon";
import CircularProgress from "@mui/material/CircularProgress";

function pickIconAndBrand(logo = "", name = "") {
  const key = `${logo} ${name}`.toLowerCase();
  if (key.includes("figma")) return { icon: <Icon.Figma size={18} />, brand: "Figma" };
  if (key.includes("adobe")) return { icon: <Icon.Adobe size={18} />, brand: "Adobe" };
  return { icon: <Icon.Bill size={18} />, brand: null };
}

function CardUpcomingBill(props) {
  const { data = [], loading = false } = props;

  return (
    <>
      <Card
        title="Upcoming Bill"
        link="/bill"
        desc={
          loading ? (
            <div className="flex flex-col justify-center items-center h-full text-primary">
              <CircularProgress color="inherit" size={50} enableTrackSlot />
              Loading Data
            </div>
          ) : data.length === 0 ? (
            <div className="flex justify-center items-center h-full text-gray-03">
              Tidak ada tagihan mendatang
            </div>
          ) : (
            <div className="flex flex-col justify-around h-full">
              {data.map((item) => {
                const { icon, brand } = pickIconAndBrand(item.logo, item.name);

                return (
                  <div
                    key={item.id}
                    className="flex justify-between pt-3 pb-3"
                  >
                    <div className="flex">
                      {/* kotak bulan + tanggal, langsung dari API */}
                      <div className="bg-special-bg p-4 rounded-lg flex flex-col items-center justify-center text-center min-w-16">
                        <span className="text-xs">{item.month}</span>
                        <span className="text-2xl font-bold">{item.date}</span>
                      </div>

                      <div className="ms-10">
                        {/* baris icon + nama brand kecil */}
                        <div className="flex items-center gap-1 text-sm text-gray-500 mb-0.5">
                          {icon}
                          {brand && <span>{brand}</span>}
                        </div>

                        {/* nama plan, bold */}
                        <span className="font-bold">{item.name}</span>
                        <br />

                        {/* tanggal charge terakhir, langsung dari API */}
                        <span className="text-xs text-gray-400">
                          Last Charge - {item.lastCharge}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="py-2 px-4 border border-gray-05 rounded-lg font-bold">
                        ${item.amount ?? 0}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          )
        }
      />
    </>
  );
}

export default CardUpcomingBill;