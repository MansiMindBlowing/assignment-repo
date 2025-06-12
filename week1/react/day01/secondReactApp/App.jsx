import React from 'react';

function App() {
  const name = "Mansi";
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="App" style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Hello, I'm {name}!</h1>
      <p>Today’s date is: {currentDate}</p>
      <ul>
        <li>I am learning React</li>
        <li>This is my first app</li>
        <li>It’s going great!</li>
      </ul>
    </div>
  );
}

export default App;
