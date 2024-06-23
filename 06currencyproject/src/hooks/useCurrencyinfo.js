import { useEffect,useState } from "react";


function useCurrencyInfo(currency){

    const [Data,setData] = useState({})
    // calling the api
    const key = "337234a3fb1b455f89487e6b"
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    const api = `https://v6.exchangerate-api.com/v6/${key}/latest/${currency}`

    useEffect(()=>{

        fetch(proxyUrl+api)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
       
    },[currency])

    console.log(Data)

    return Data
}

export default useCurrencyInfo;