import { useState } from 'react';
import './App.css';
import ItemComponent from './ItemComponent';

const App=()=>{
const [inputItem,setItem]=useState("Buy Me")
const [itemList,setItemList]=useState([])
const itemAction=(event)=>{
  setItem(event.target.value)
}

const listOfItem =()=>{
  console.log("hello"+itemList)
  setItemList((oldItems)=>{
    return [...oldItems,inputItem]
  });
};

const deleteItem=(id)=>{
  console.log("Delete "+id)
  setItemList((oldItems)=>{
   return oldItems.filter((arrElement,index) =>{
      return id!==index;
    });
});
}

  return(
<>
<div className="main-body-box">
  <div className="inner-box">
    <div className="app-title-label">
      To-Do List
    </div>
    <div className="input-box">
      <input type="text" placeholder="Enter the todo" name="todo" onChange={itemAction}/> <button onClick={listOfItem} className="btn"><i className="fa fa-plus"></i></button>
    </div>
    <br></br>
    <di>
      <ol>
      {
        itemList.map((item,index)=>
        {
          return <> <ItemComponent id={index} key={index} listItem={item} onSelect={deleteItem} /></>
        })
      }
        
      </ol>
    </di>
  </div>
</div>
</>
  )
}

export default App;