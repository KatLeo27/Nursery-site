import {Link} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div>
      <div className="bg"></div>

      <div className="container">
        <div className="left">
          <h2 style={{color: "white", fontSize: "45px"}}>Welcome To Paradise Nursery</h2>
          <p>Where Green Meets Serenity</p>
          <Link to="/products">
            <button>Get started</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default App;
