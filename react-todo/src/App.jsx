import { useState } from "react";
import Header from "./assets/components/Header";
import TodoComputed from "./assets/components/TodoComputed";
import TodoCreate from "./assets/components/TodoCreate";
import TodoFilter from "./assets/components/TodoFilter";
import TodoList from "./assets/components/TodoList";

const initialStateTodos =[
  { id:1, title: "Completed online JavaScript Curse",completed: true},
  { id:2, title: "Go to the gym",completed: false},
  { id:3, title: "10 minutos meditation",completed: false},
  { id:4, title: "Pick up grocerias",completed: false},
  { id:5, title: "Completed  todo app on FrontEnd Mentor",completed: false},

]

const App = () =>{

  const [todos, setTodos] =  useState(initialStateTodos);
  const createTodo = (title) =>{
    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    }

    setTodos([...todos, newTodo]);
  }


  return(
    <div className="min-h-screen bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">

      <Header />

      <main className="container mx-auto  mt-8 px-4">
        <TodoCreate createTodo ={createTodo}/>
             
        <TodoList todos={todos} />

        <TodoComputed />

        <TodoFilter />
        
      </main>

      <footer className="text-center mt-8">Drag and drop to reorder list</footer>

    </div>
  );
};

export default App;