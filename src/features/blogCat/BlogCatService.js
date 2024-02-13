import axios from "axios";
import { base_url } from "../../utils/base_url";

const getBlogCategories = async () => {
  try {
    // Retrieve the user object from local storage
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.token) {
      // Handle the case where there's no user object or no token property
      console.error("No user object or token found");
      // You might want to redirect the user to the login page or handle this case differently
      return null;
    }

    const { token } = user;

    const response = await axios.get(`${base_url}blogcategory/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data) {
      console.log("Blog Categories:", response.data);
      // If necessary, store data in Redux store or handle it accordingly
      // dispatch(setUsers(response.data));
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error.message);
    throw error;
  }
};

const addBlogCategory = async (data) => {
  try {
    // Retrieve the user object from local storage
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.token) {
      // Handle the case where there's no user object or no token property
      console.error("No user object or token found");
      // You might want to redirect the user to the login page or handle this case differently
      return null;
    }

    const { token } = user;

    const response = await axios.post(`${base_url}blogcategory/`,data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.data) {
      console.log("Blog Categories:", response.data);
      // If necessary, store data in Redux store or handle it accordingly
      // dispatch(setUsers(response.data));
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error.message);
    throw error;
  }
};

const BlogCategoryService = { getBlogCategories, addBlogCategory };

export default BlogCategoryService;
