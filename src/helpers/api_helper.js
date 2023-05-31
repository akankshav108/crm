import axios from "axios";

const API_URL = "https://782c9a55-e564-482d-af66-1bfd7e7569d1.mock.pstmn.io"

const API = axios.create({
    baseURL: API_URL,
    headers:{
        'Content-Type': 'application/json',
        Accept: 'application/json', 
    },
})

export default API;