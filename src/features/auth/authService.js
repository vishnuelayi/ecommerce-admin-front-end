import axios from "axios";
import { base_url } from "../../utils/base_url";

const login = async(userData) => {
    try{
        const response = await axios.post(`${base_url}user/admin-login`, userData);
        if(response.data){
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
    }
    catch(error){
        console.log(error);
    }
    
}

const authService = {login};

export default authService;