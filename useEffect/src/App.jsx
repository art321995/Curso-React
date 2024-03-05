import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [users, setUsers] = useState([]);

  useEffect(() =>{
      async function fetchData(){
          const res = await fetch("https://jsonplaceholder.typicode.com/users");
          const data = await res.json();

          setUsers(data);
      }
      fetchData();
  }, []);


  return<>
    <h1>UseEffect</h1>
    <button onClick={() => setCounter(counter + 1)}>Counter: {counter}</button>
    <ul>
      {
        users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))
      }
    </ul>
  </>
};
export default App;