import React from "react";
import './App.css'
const ItemComponent=(prop)=>{
  return(
    <>
    <li style={{marginBottom:'15px'}}><i class="deleteIcon fa fa-trash" aria-hidden="true" onClick={()=>{
            prop.onSelect(prop.id)
          }} ></i> {prop.listItem}</li>
      
    </>
  )
}

export default ItemComponent
