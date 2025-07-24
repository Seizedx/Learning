// https://sujeitoprogramador.com/r-api/?api=filmes
import axios from "axios";

const API = axios.create({
    baseURL: 'https://sujeitoprogramador.com/'
})

export default API