import axios from "axios";
import apiConfig from "./apiConfig";
import { getToken } from "../auth/Token";

const { api } = apiConfig;

const returnResponse = (response) => {
    if (!response.success) {
        if (response?.data?.message) {
            alert(`Error: ${response.data.message}`);
        }
        else{
            alert("Error inesperado");
        }
    }
    return response;
};

export const loginServices = async (email, password) => {
    let response = {
        success: true,
        data: {},
    };
    try {
        const data = { email, password};
        const dataResponse = await axios.post(`${api}/usuarios/login`, data);
        response.data = dataResponse.data;
    } catch (error) {
        response.success = false;
        response.data = error?.response?.data;

    }

    return returnResponse(response);
};

export const isAuthService = async () => {
    const token = getToken();
    let response = {
        success: true,
        data: {},
    };
    if (token) {
        try {
            const dataResponse = await axios.get(`${api}/usuarios/auth`, {
                headers: {
                    authorization: token,
    
                },
            });
            response.data = dataResponse.data;
        } catch (error) {
            response.success = false;
            response.data = error?.response?.data;
        }
    }else{
        response.success = false;
        response.data.message = "No ha iniciado";
    }
    return response;
};

export const registroService = async (nombre,apellidos,email, password,edad) => {
    let response = {
      success: true,
      data: {},
    };
    try {
      const data = { nombre,apellidos,email, password,edad};
      const dataResponse = await axios.post(`${api}/usuarios/sign-up`, data);
      response.data = dataResponse.data;
    } catch (error) {
      response.success = false;
      response.data = error?.response?.data;
    }
    return returnResponse(response);
  };