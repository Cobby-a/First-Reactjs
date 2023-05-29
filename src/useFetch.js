import {useState, useEffect} from 'react';

const useFetch = (url) =>{
    const[data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

    useEffect (()=>{
        setTimeout(()=>{fetch(url)
            .then(response =>{
                if(!response.ok){
                    throw Error("couldn't load your resources due to some error, try again")
                }
                return response.json();
            })
            .then(data =>{
                setData(data)
                setIsPending(false)
                setError(null);
            })
            .catch(err =>{
                setData(null)
                setIsPending(false);
                setError(err.message);
            });
    },1000);
    },[])
    return{
        data, isPending, error
    }
}

export default useFetch;