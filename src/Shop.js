import React,{useState,useEffect} from 'react';
import './App.css';
import {Link} from 'react-router-dom';

const  Shop=()=>{
  const [items,setItems] = useState([]);

  useEffect(()=>{
    fetchItems();
  },[])
    
  
  
  const fetchItems = async()=>{
    const data= await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
      );
    const item =await data.json();
    setItems(item.data);
  };
  

  return (
    <div style={{display:'flex',justifyContent:"space-between",flexWrap:'wrap'}}>
      
      {items.map((d,index)=>(
         <div key={index}>
         <img width="200px" height="200px"src={d.item.images.background}/>
         <p>{d.item.name}</p>
         </div>
      ))}

       
        
    </div>  

  );
}

export default Shop;
