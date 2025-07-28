//https://viacep.com.br/ws/CEP/json
//npm install axios
import axios from "axios";

export const API = axios.create({
    baseURL: 'https://viacep.com.br/ws/'
});