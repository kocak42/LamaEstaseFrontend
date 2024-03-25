import { useEffect, useState } from "react"
import {  axiosLamaEstaseApi } from "./axiosApi"


export default function useLamaEstaseFetchApi(){
  const [data, SetData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState()

  const getApiData = async () => {
   try{
    const response=await axiosLamaEstaseApi('/structures/getall')
    const responseData=await response?.data
    console.log("response:::",responseData)
    SetData(responseData)
    setIsLoading(false)
console.log(data)
   }catch(err){
    setIsError(true)
    setError("Veri Alinamadi")
    throw new Error(err)
   }
  
  }

  useEffect(() => {
     getApiData()
  }, [])

  return[data,isLoading,isError,error]
}