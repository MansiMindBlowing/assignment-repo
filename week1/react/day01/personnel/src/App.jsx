function App() {
  const name = "Your Name";
  const background = "I am a student learning React. I love building web apps!";
  const hobbies = ["Coding", "Reading", "Drawing", "Cycling", "Music"];
  const today = new Date();

  return (
    <div style={{ maxWidth: 400, margin: "30px auto", padding: 20, border: "1px solid #ccc", borderRadius: 8 }}>
      <h1>Welcome!</h1>
      <h2>{name}</h2>

      <div>
        <p>{background}</p>
        <p>
          <b>Today's Date:</b> {today.toLocaleDateString()}
        </p>
      </div>

      <div>
        <h3>My Hobbies</h3>
        <ul>
          {hobbies.map((hobby, i) => <li key={i}>{hobby}</li>)}
        </ul>
      </div>

      <div style={{ color: "teal", margin: "20px 0" }}>
        <p>
          "Keep learning and growing every day!"
        </p>
      </div>

      <div>
        <a href="#profile">Profile</a> | <a href="#hobbies">Hobbies</a>
      </div>
    </div>
  );
}

export default App;
