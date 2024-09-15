import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';

const Random = () => {
    const [gif,setGif]=useState("");
    const [curr,setCurr]=useState('false');
    const url = `https://api.giphy.com/v1/gifs/random?api_key=LIo9mcgPwkqP0PKMosaxCic5Ccrl4CJo`;
    async function fetchData() {
      setCurr(true)
       const {data} = await axios.get(url);
        const imgs=data.data.images.downsized_large.url;
        setGif(imgs);
        setCurr(false)
    }
    useEffect(()=>{
        fetchData();
    },[])
    function clickHandler(){
        fetchData();
    }
  return (
    <div className=' w-2/5 min-h-[450px]  bg-green-600 flex flex-col items-center gap-y-5'>
    <h1 className=' text-xl underline uppercase font-semibold mt-4'>A Random Gif</h1>
    {curr?(<Spinner/>):<><img src={gif} width="450px" alt=''></img>
      <button onClick={clickHandler} className=' w-10/12 bg-white bg-opacity-60 p-2 mb-4'>
        Generate
      </button></>}
    </div>
  )
}

export default Random
