import axios from "axios";
import { base_url } from "../../utils/base_url";

const uploadImage = async (data) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user || !user.token) {
      console.error("No user object or token found");
      return null;
    }

    const { token } = user;

    const response = await axios.post(`${base_url}upload/`, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response) {
      console.log("Uploads:", response);
      // If necessary, store data in Redux store or handle it accordingly
      // dispatch(setUsers(response.data));
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error.message);
    throw error;
  }
};

const UploadService = { uploadImage };

export default UploadService;
