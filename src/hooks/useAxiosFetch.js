import { useState, useEffect } from "react";
import axios from 'axios'

const useAxiosFetch = (baseUrl) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [fetchError, setFetchError] = useState(null)

    useEffect(() => {
        let isMounted = true
        const source = axios.CancelToken.source()


        const fetchData = async(url) => {
           setIsLoading(true) 
           try {
            const response = await axios.get(url, {cancelToken : source.token})
            if (isMounted){
                setData(response.data)
                setFetchError(false)
            }
           }catch(err){
            if (isMounted){
                setFetchError(err.message)
                setData([])
            }
           }finally{
             (isMounted && setIsLoading(false))
           }
        }
        fetchData(baseUrl)

        const cleanUp = () => {
            isMounted = false
            source.cancel()
        }

        return cleanUp
    },[baseUrl])


    return {data, isLoading, fetchError}


}


export default useAxiosFetch;