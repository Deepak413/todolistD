import React from 'react';

const ToDoLists = (props) => {

    return (
        <>
            <div className='todo_style'>
                <div 
                    className='fa-solid' 
                    onClick={() => {
                        props.onSelect(props.id);
                    }}
                > x </div>
                <li> {props.text} </li>
            </div>
            
        </>
    );
}

export default ToDoLists;