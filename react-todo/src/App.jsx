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

  const removeTodo = (id) =>{
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  const updateTodo = (id) =>{
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  }

  const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const [filter, setFilter] = useState("all");

  const changeFilter = (filter) => setFilter(filter);

  const filteredTodos = () => {
    switch (filter) {
        case "all":
            return todos;
        case "active":
            return todos.filter((todo) => !todo.completed);
        case "completed":
            return todos.filter((todo) => todo.completed);
        default:
            return todos;
    } };

  return(
    <div className="min-h-screen bg-gray-300 dark:bg-gray-900 bg-[url('./assets/images/bg-mobile-light.jpg')]  bg-contain bg-no-repeat
    dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] ">

      <Header />

      <main className="container mx-auto  mt-8 px-4">
        <TodoCreate createTodo ={createTodo}/>
             
        <TodoList 
          todos={filteredTodos()}  
          removeTodo={removeTodo} 
          updateTodo={updateTodo}/>

        <TodoComputed 
          computedItemsLeft={computedItemsLeft}
          clearCompleted={clearCompleted}
        />

        <TodoFilter changeFilter={changeFilter} filter={filter} />
        
      </main>

      <footer className="text-center mt-8 dark:text-gray-400">Drag and drop to reorder list</footer>

    </div>
  );
};

export default App;