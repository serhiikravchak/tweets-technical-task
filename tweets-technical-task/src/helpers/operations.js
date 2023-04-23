import axios from "axios";

axios.defaults.baseURL = "https://644569ebb80f57f581b99477.mockapi.io/";


export async function fetchUsers() {
    return await axios.get(`users`);
  }
