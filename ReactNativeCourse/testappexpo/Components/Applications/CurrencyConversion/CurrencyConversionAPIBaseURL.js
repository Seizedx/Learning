import axios from "axios";

//https://economia.awesomeapi.com.br/json/all

//Rota para buscar BTC > BRL : all/BTC-BRL

export const API = axios.create({
    baseURL: 'https://economia.awesomeapi.com.br/json/'
});