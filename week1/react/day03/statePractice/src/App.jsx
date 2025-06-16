import { useState } from "react";

function App(){

  const [state, setState] = useState(0);

  const handleClick = ()=>{
    console.log('button was clicked');
    setState(state+1);
    
  };

  return (
    <div>
      hello
      <button onClick={handleClick}>Add animal</button>
      <h1>the count is {state}</h1>
    </div>
  )
}

export default App