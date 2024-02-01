const MyButton = () => {
    return <button>i'am a button</button>;
  };
  
  const UserMessage = () => {
    return <h2>Bienvenido usuario</h2>;
  };
  
  const App = () => {
    const title = "Mi primero proyecto con React.js";
    const user = true;

    const fruts = ["🍐", "🍌", "🍎", "🍐", "🍌", "🍎"];

    return (
      <div className="container">
        <h1 className="text-primary">{title}</h1>
        
        <MyButton text= 'boton 1'/>
        <MyButton text= 'boton 2'/>
        <MyButton text= 'boton 3'/>

        {user ? <UserMessage /> : "Offline"}
        <ul>
            {
                fruts.map((frut, index) => {
                return <li key={index}>{frut}</li>;
                })
            }
        </ul>
      </div>
    );
  };
  
  export default App;