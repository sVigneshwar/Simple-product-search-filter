import React, { useEffect, useState } from 'react'

export default function useFetchData(query) {
    const [queryData, setQueryData] = useState({})
    useEffect(() => {
        fetchData()
    }, [query])

    const fetchData = async () => {
        if(query === ""){
            return;
        }
        try{
            
            const res = await fetch(`https://dummyjson.com/products/search?q=${query}`)
            if(!res.ok){
                console.log("response:"+res);    
                return;
            }
            const data = await res.json()
            console.log(data);
            setQueryData(data)
        }catch(err){
            console.log(err);
        }
    }
    return {queryData};
}
