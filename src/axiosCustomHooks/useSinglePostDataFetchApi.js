import { useEffect, useState } from "react"
import {  axiosLamaEstaseApi } from "./axiosApi"


export default function useSinglePostDataFetchApi(postId){
  const [data, SetData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [error, setError] = useState()

  const getApiData = async () => {
    try {
       const response = await axiosLamaEstaseApi(`/Structures/getbyId?id=${postId}`)
       const responseData = response?.data
       SetData(responseData)
       setIsLoading(false)
    } catch (err) {
       setIsError(true)
       setError("Veri alinamadi")
       console.error(err)
    }
 }

  useEffect(() => {
     getApiData()
  }, [postId])

  return[data,isLoading,isError,error]
}