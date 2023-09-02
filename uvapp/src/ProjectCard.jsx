import React from 'react';
import ImageCard from './ImageCard';
import  { useState,useEffect } from 'react';





const ncard = (val) =>{
  return < ImageCard key={val.id} title={val.title} price={val.price} imgsrc={val.image} desc={val.description} />
}



const ProjectCard = () => {
  const [Data, SetData] = useState([]);

  useEffect(()=>{
    const fetchdata = async ()=>{
    try{

      const response = await fetch ("https://fakestoreapi.com/products");
      const data = await response.json();
      SetData(data);


    }
    catch(error) {
      console.log("Error Occured",error)
    };
   
    }
    fetchdata();
  },[]);




  return (
    <div  className='row'>
    <h2><i>Indoor</i></h2>
      {Data.map((val,index)=>(
        <div key ={val.id} className='col-md-3'>
          {ncard(val)}
        </div>
      ))}
    </div>
  )
}

export default ProjectCard
