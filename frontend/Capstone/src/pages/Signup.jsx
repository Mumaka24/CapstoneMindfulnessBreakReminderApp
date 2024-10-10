// // src/pages/Signup.jsx
// import React, { useState } from 'react';
// import axios from 'axios';

// const Signup = () => {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSignup = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3000/api/users/register', { username, email, password });
//       setMessage('Account created successfully. Please login.');
//     } catch (err) {
//       setMessage('Error occurred during signup.');
//     }
//   };

//   return (
//     <div className="page">
//       <h1>Signup</h1>
//       <form onSubmit={handleSignup}>
//         <label>
//           Username:
//           <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
//         </label>
//         <label>
//           Email:
//           <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//         </label>
//         <label>
//           Password:
//           <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
//         </label>
//         <button type="submit">Signup</button>
//       </form>
//       {message && <p>{message}</p>}
//     </div>
//   );
// };

// export default Signup;
