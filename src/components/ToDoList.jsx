import React from 'react';

const ToDoList = (props) => {

    /*const deleteItems = () => {};*/
    const handleCheckBox = () => {
        <ol style={{textColor:'red'}}></ol>
        console.log("Clicked Checkbox");
    }
    
    return (
        <>
            <div className="todo_style">
                <button className="delete_button" onClick={() => {
                    props.onSelect(props.id);
                }}>x</button>
                
                <li>{props.text}</li>
                <input style={{backgroundColor:'green'}} type="checkBox" onClick={handleCheckBox}></input>
            </div>
        </>
    );
};

export default ToDoList;