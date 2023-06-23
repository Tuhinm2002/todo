import React  from "react";
import '../styles/App.css';
import {BiEdit} from 'react-icons/bi';
import {AiFillDelete} from 'react-icons/ai';
import Draggable from "react-draggable";

function TodoItems({text,UpdateMode,DeleteMode}) {
    return(
        <>
        <Draggable>
        <div className="container" >
            <div className="textItem">{text}</div>
            <div className="icons">
            <BiEdit className="icon" onClick={UpdateMode} size={20}/>
            <AiFillDelete className="icon" onClick={DeleteMode} size={20}/>
            </div>
        </div>
        </Draggable>
        </>
    )
}

export default TodoItems;