import axios from "axios";

const API_URL = "https://user-test.in/api"

const API = axios.create({
    baseURL: API_URL,
})

export default API;