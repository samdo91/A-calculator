import React from "react";
import "./todoLIst.css"
import TodoListHeader from "./TodolistHeader";
import TodoListInput from "./TodoListInput";
import TodoListTool from "./TodoListTool";



const TodoList = () =>{

    return(<main className="mainContainer"> 
      <TodoListHeader/>
      <TodoListInput/>
      <TodoListTool/>
      
        </main>)
}

export default TodoList