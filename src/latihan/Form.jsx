import { useState, useEffect } from "react";
import axios from "axios";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [goals, setGoals] = useState({});

  const fetchGoals = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await axios.get(
        "https://jwt-auth-eight-neon.vercel.app/goals",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response.data);
      setGoals(response.data.data[0]);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        {
          email,
          password,
        }
      );

      console.log(response.data);

      localStorage.setItem(
        "token",
        response.data.refreshToken
      );

      fetchGoals();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit}>
        Email :
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border"
        />

        <br />

        Password :
        <input
          type="text"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border"
        />

        <br />
        <br />

        <input
          type="submit"
          value="send"
          className="bg-gray-200 p-2"
        />
      </form>

      <hr className="py-4" />
      Present Amount : {goals.present_amount}
      <br />
      Target Amount : {goals.target_amount}
    </div>
  );
};

export default Form;