//npm install axios

import axios from "axios";

const APIName = axios.create({
    baseURL: 'https://sujeitoprogramador.com/' // URL base, sem o adicional
});

    //chama quando componente é aberto
    useEffect(()=>{
        async function loadAPI() {
            const response = await API.get('r-api/?api=filmes');   // restante do URL
            setAPI(response.data);
        }
        loadAPI();
    },[]);

export default APIName