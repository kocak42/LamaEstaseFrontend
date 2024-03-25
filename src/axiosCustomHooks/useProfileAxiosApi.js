import { useEffect, useState } from "react"

import axios from "axios"
import { axiosLamaEstaseApi } from "./axiosApi"


export default function useProfileAxiosApi(){
  const [data, SetData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState()

  const getApiData = async () => {
   try{
    
    const response=await axiosLamaEstaseApi(`Agents/getall`)
    const responseData=await response?.data
    console.log("response:::",responseData)
    SetData(responseData)
    setIsLoading(false)

   }catch(err){
    setIsError(true)
    setError("Veri Alinamadi")
    console.error(err)
   }
  }

  useEffect(() => {
     getApiData()
  }, [])

  return[data,isLoading,isError,error]
}