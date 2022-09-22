import React from "react";
import {RiChatNewLine} from "react-icons/ri"
import "./TodoListInput.css"

const TodoListInput = () =>{

    return(<section className="TodoListInpuContainer">
        <form className="fromContainer">
            <input  className="inputContainer" placeholder="할 일 Todo!"/>
        </form>
        <button className="buttonContainer"><RiChatNewLine/></button>
     </section>)
}

export default TodoListInput