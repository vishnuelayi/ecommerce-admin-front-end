import axios from "axios";
import { base_url } from "../../utils/base_url";

const login = async (userData) => {
  try {
    const response = await axios.post(`${base_url}user/admin-login`, userData);
    if (response.data) {
      localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

const getOrders = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.token) {
    // Handle the case where there's no user object or no token property
    console.error("No user object or token found");
    // You might want to redirect the user to the login page or handle this case differently
    return null;
  }

  const { token } = user;

  const response = await axios.get(`${base_url}user/get-orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (response.data) {
    // console.log("Orders:", response.data);
    // If necessary, store data in Redux store or handle it accordingly
  }

  return response.data;
};

const authService = { login, getOrders };

export default authService;
