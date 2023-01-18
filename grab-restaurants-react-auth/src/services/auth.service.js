import axios from "axios";
import authHeader from "./auth-header";
const API_URL = "http://localhost:5000/apis/auth/";

const register = async (username, email, password) =>{
    return await axios.post(API_URL+"signup",{
        username,
        email,
        password,
    })
}

const login = async (username,password) =>{
    const response = await axios.post(API_URL+"signin",{
        username,
        password
    });
    if(response.data.accessToken){
        localStorage.setItem("user", JSON.stringify(response.data));
    }
    return response.data;
}

const logOut = () =>{
        localStorage.removeItem("user")
    
    return response.data;
}

const getCurrentUser = () =>{
    return JSON.parse(localStorage.getItem("user"));
}

const AuthService = {
    register,
    login,
    logOut,
    getCurrentUser
};
export default AuthService;