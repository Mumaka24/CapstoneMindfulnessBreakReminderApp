// import React, { useState } from 'react';
// import axios from 'axios';

// const Login = ({ setAuth }) => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:3000/api/users/login', { email, password });
//       localStorage.setItem('token', response.data.token);
//       setAuth(true);
//     } catch (err) {
//       setError('Invalid credentials');
//     }
//   };

//   return (
//     <div className="page">
//       <h1>Login</h1>
//       <form onSubmit={handleLogin}>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </label>
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </label>
//         <button type="submit">Login</button>
//       </form>
//       {error && <p>{error}</p>}
//     </div>
//   );
// };

// export default Login;
