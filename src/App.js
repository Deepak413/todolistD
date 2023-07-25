import React, { useState } from 'react';
import './App.css';
import ToDoLists from './ToDoLists';

import { AiOutlinePlus } from "react-icons/ai";

const App = () => {

  const [inputList, setInputList] = useState("");   //declaring a variable to store the input value

  const [Items, setItems] = useState([]);      //declaring an array to store all the inputs


  const itemEvent = (event) => {
    setInputList(event.target.value);
  }

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];    //concating new value to old array
    })
    setInputList("");        //clearing input value after adding to array or button clicking bcz in input tag value is declared as inputList
  }

  const deleteItems = (id) => {
    setItems((oldItems) => {
      return oldItems.filter((arrElem, index) => {
        return index !== id;          //checking the current element in the array
      })
    })
  }

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <br />
          <h1>To-Do List</h1>
          <br />
          <div className='add_item_box'>
            <input type='text' placeholder='Add an Item' value={inputList} onChange={itemEvent} />
            <button className='add_item_btn' onClick={listOfItems}> <AiOutlinePlus /> </button>
          </div>


          <ol>
            {Items.map((itemval, index) => {
              return <ToDoLists id={index} key={index} text={itemval} onSelect={deleteItems} /> //sending these 4 properties to ToDoLists component
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
