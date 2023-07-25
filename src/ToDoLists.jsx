import React from 'react';
import { RxCross2, AiOutlinePlus } from "react-icons/rx";

const ToDoLists = (props) => {

    return (
        <>
            <div className='todo_style'>
                <div 
                    className='fa-solid' 
                    onClick={() => {
                        props.onSelect(props.id);
                    }}
                > <RxCross2 /> </div>
                <li> {props.text} </li>
            </div>
            
        </>
    );
}



export default ToDoLists;