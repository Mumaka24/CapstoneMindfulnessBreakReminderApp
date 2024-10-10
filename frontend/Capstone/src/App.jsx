import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home';
import Sessions from './pages/Session';
import Reminders from './components/Reminders';
import Notifications from './pages/Notifications';

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar */}
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/sessions">Sessions</Link>
          <Link to="/reminders">Reminders</Link>
          <Link to="/notifications">Notifications</Link>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/reminders" element={<Reminders />} />
          <Route path="/notifications" element={<Notifications />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
