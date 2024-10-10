import  { useState } from "react";
import './Home.css';

const Home = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    // Here you would typically send a request to your backend to authenticate
    // Simulating successful login
    if (email && password) {
      setIsLoggedIn(true);
      console.log("Logged in as:", email);
      // Reset fields after login
      setEmail('');
      setPassword('');
    } else {
      alert("Please enter email and password.");
    }
  };

  return (
    <div className="home">
      <h1>Welcome to the Mindfulness Break Reminder App</h1>

      {/* Login Section */}
      <section className="login-section">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <label>
            Email:
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)} 
              placeholder="Enter your email" 
            />
          </label>
          <label>
            Password:
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
              placeholder="Enter your password" 
            />
          </label>
          <button type="submit">Login</button>
        </form>
        {isLoggedIn && <p>You are logged in!</p>}
      </section>

      {/* About Us Section */}
      <section className="about-section">
        <h2>About Us</h2>
        <p>
          The Mindfulness Break Reminder App is designed to help you stay focused and take regular
          breaks to maintain your productivity and well-being. Set reminders for breaks, hydration,
          and exercises to keep your mind and body healthy throughout the day.
        </p>
      </section>
    </div>
  );
};

export default Home;
