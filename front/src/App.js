import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Posts from './components/Posts/Posts';
import Injection from './components/Injection/Injection';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="header">
          <nav>
            <ul>
              {/* <li>
                <Link to="/">Home</Link>
              </li> */}
              <li>
                <Link to="/register">Register</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/posts">Posts</Link>
              </li>
              <li>
                <Link to="/injection">Injection</Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* will render the links refs */}
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/injection" element={<Injection />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
