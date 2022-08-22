import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Link to="login">Login</Link>
      <Link to="register">Register</Link>
    </div>
  );
}

export default App;
