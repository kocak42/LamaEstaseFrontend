import axios from "axios"


const VITE_LAMAESTASE_API_URL = import.meta.env.VITE_LAMAESTASE_API_URL
export const axiosLamaEstaseApi=axios.create({
  baseURL:VITE_LAMAESTASE_API_URL,
  headers:{
    
  }
})