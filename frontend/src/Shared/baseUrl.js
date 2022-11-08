import axios from "axios";

export const baseUrl = 'http://localhost:8080';
//setting Axios default URL
axios.defaults.baseURL = baseUrl;