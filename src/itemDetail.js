import React,{useState,useEffect} from 'react';
import './App.css';


const  Item=({match})=>{
  useEffect(()=>{
      fetchItem();
      console.log(match.params.id);
  },[]);
    
  const [item,setItem] = useState({});
  const fetchItem = async() =>{
      const fetchItem = await fetch(
          `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
          );
      const item = await fetchItem.json();
      setItem(item.data);
       
     
      
  }
  
  return (
    <div>
        <h1>{item.name}</h1>
        {Object.keys(item).length!=0?<img src={item.item.images.icon}/>:<h1>No image</h1>}
    </div>
  );
}

export default Item;
