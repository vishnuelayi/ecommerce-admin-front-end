import axios from "axios";
import { base_url } from "../../utils/base_url";
import { Token } from "../../utils/tokenConfig";

const token = Token();

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
  const response = await axios.get(`${base_url}user/get-all-orders`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
};

const getSingleOrder = async (id) => {
  try {
    const response = await axios.get(`${base_url}user/order/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

const getMonthlyIncome = async () => {
  try {
    const response = await axios.get(`${base_url}user/monthlyIncome`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error.message);
    throw error;
  }
};

const getYearlyIncome = async () => {
  try {
    const response = await axios.get(`${base_url}user/yearlyWiseOrderCount`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error.message);
    throw error;
  }
};

const updateOrderStatus = async (data) => {
  try {
    const response = await axios.put(`${base_url}user/oders/status`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
const authService = {
  login,
  getOrders,
  getMonthlyIncome,
  getYearlyIncome,
  updateOrderStatus,
  getSingleOrder,
};

export default authService;
