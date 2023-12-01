// import React from 'react'
// import user from '../Assets/user.png';
// import email from '../Assets/email.png';
// import pass from '../Assets/pass.png';
// import './Login.css'
// import { useState } from 'react';
// const Login = () => {
//   const [action,setAction]= useState("Login");
//   return (
//     <div className='container'>
//       <div className='header'>
//       <div className='text'>{action}</div>
//       <div className='underline'></div>
//       </div>
//       <div className='inputs'>
//       {action ==="Login"?<div></div>:<div className='input'>
//       <img src={user} alt=""/>
//       <input type="text" placeholder='Name'/>
//       </div>}
         
// <div className='input'>
//   <img src={email} alt=""/>
//   <input type="email" placeholder='Email Id'/>
// </div>
// <div className='input'>
//   <img src={pass} alt=""/>
//   <input type="password" placeholder='Password'/>
// </div>
//       </div>
//       {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password?<span>Click here!</span></div>}
      
//       <div className='submit-container'>
//        <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Login")}} >Sign Up</div> 
//        <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Login</div>
//       </div>
//     </div>
//   )
// }
// export default Login


// // Login.js
// // import React, { useState } from 'react';
// // import firebase from 'firebase/compat/app'; // Note the use of 'compat' to maintain compatibility
// // import 'firebase/compat/auth';
// // import firebaseConfig from '../backend/firebaseConfig'; // Update the path based on your file structure
// // import user from '../Assets/user.png';
// // import email from '../Assets/email.png';
// // import pass from '../Assets/pass.png';
// // import './Login.css';

// // firebase.initializeApp(firebaseConfig);

// // const Login = () => {
// //   const [action, setAction] = useState("Login");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleAuthentication = async () => {
// //     try {
// //       if (action === "Login") {
// //         // Sign in
// //         await firebase.auth().signInWithEmailAndPassword(email, password);
// //       } else {
// //         // Sign up
// //         await firebase.auth().createUserWithEmailAndPassword(email, password);
// //       }
// //       // Authentication successful, you can redirect or perform other actions here
// //     } catch (error) {
// //       console.error("Authentication error:", error.message);
// //     }
// //   };

// //   return (
//     // <div className='container'>
//     //   <div className='header'>
//     //     <div className='text'>{action}</div>
//     //     <div className='underline'></div>
//     //   </div>
//     //   <div className='inputs'>
//     //     {action === "Login" ? <div></div> : <div className='input'>
//     //       <img src={user} alt="" />
//     //       <input type="text" placeholder='Name' />
//     //     </div>}

//     //     <div className='input'>
//     //       <img src={email} alt="" />
//     //       <input
//     //         type="email"
//     //         placeholder='Email Id'
//     //         value={email}
//     //         onChange={(e) => setEmail(e.target.value)}
//     //       />
//     //     </div>
//     //     <div className='input'>
//     //       <img src={pass} alt="" />
//     //       <input
//     //         type="password"
//     //         placeholder='Password'
//     //         value={password}
//     //         onChange={(e) => setPassword(e.target.value)}
//     //       />
//     //     </div>
//     //   </div>
//     //   {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password?<span>Click here!</span></div>}

//     //   <div className='submit-container'>
//     //     <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }} >Sign Up</div>
//     //     <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up") }}>Login</div>
//     //   </div>
//     // </div>
// //   );
// // };

// // export default Login;

// // Login.js
// // firebase.js
// // Login.js
// // import React, { useState } from 'react';
// // import { initializeApp } from 'firebase/app';
// // import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';
// // import firebaseConfig from '../backend/firebaseConfig';
// // import user from '../Assets/user.png';
// // import email from '../Assets/email.png';
// // import pass from '../Assets/pass.png';
// // import './Login.css';

// // const firebaseApp = initializeApp(firebaseConfig);
// // const auth = getAuth(firebaseApp);

// // const Login = () => {
// //   const [action, setAction] = useState("Login");
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");

// //   const handleAuthentication = async () => {
// //     try {
// //       if (action === "Login") {
// //         // Sign in
// //         await signInWithEmailAndPassword(auth, email, password);
// //       } else {
// //         // Sign up
// //         await createUserWithEmailAndPassword(auth, email, password);
// //       }
// //       // Authentication successful, you can redirect or perform other actions here
// //     } catch (error) {
// //       console.error("Authentication error:", error.message);
// //     }
// //   };

// //   return (
// //     <div className='container'>
// //       <div className='header'>
// //         <div className='text'>{action}</div>
// //         <div className='underline'></div>
// //       </div>
// //       <div className='inputs'>
// //         {action === "Login" ? <div></div> : <div className='input'>
// //           <img src={user} alt="" />
// //           <input
// //             type="text"
// //             placeholder='Name'
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //           />
// //         </div>}

// //         <div className='input'>
// //           <img src={email} alt="" />
// //           <input
// //             type="email"
// //             placeholder='Email Id'
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //         </div>
// //         <div className='input'>
// //           <img src={pass} alt="" />
// //           <input
// //             type="password"
// //             placeholder='Password'
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //         </div>
// //       </div>
// //       {action === "Sign Up" ? <div></div> : <div className="forgot-password">Lost Password?<span>Click here!</span></div>}

// //       <div className='submit-container'>
// //         <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Login"); handleAuthentication(); }}>Sign Up</div>
// //         <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Sign Up"); handleAuthentication(); }}>Login</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;




// // import React from 'react';
// // import user from '../Assets/user.png';
// // import email from '../Assets/email.png';
// // import pass from '../Assets/pass.png';
// // import './Login.css';
// // import { useState } from 'react';

// // const Login = () => {
// //   const [action, setAction] = useState('Login');

// //   return (
// //     <div className='container'>
// //       <div className='header'>
// //         <div className='text'>{action}</div>
// //         <div className='underline'></div>
// //       </div>
// //       <div className='inputs'>
// //         {action === 'Login' ? null : (
// //           <div className='input'>
// //             <img src={user} alt='' />
// //             <input type='text' placeholder='Name' />
// //           </div>
// //         )}

// //         <div className='input'>
// //           <img src={email} alt='' />
// //           <input type='email' placeholder='Email Id' />
// //         </div>
// //         <div className='input'>
// //           <img src={pass} alt='' />
// //           <input type='password' placeholder='Password' />
// //         </div>
// //       </div>
// //       {action === 'Sign Up' ? (
// //         <div className='forgot-password'>
// //           Lost Password?<span>Click here!</span>
// //         </div>
// //       ) : null}

// //       <div className='submit-container'>
// //         <div
// //           className={action === 'Login' ? 'submit gray' : 'submit'}
// //           onClick={() => {
// //             setAction('Login');
// //           }}
// //         >
// //           Sign Up
// //         </div>
// //         <div
// //           className={action === 'Sign Up' ? 'submit gray' : 'submit'}
// //           onClick={() => {
// //             setAction('Sign Up');
// //           }}
// //         >
// //           Login
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
// // import React from 'react';
// // import user from '../Assets/user.png';
// // import email from '../Assets/email.png';
// // import pass from '../Assets/pass.png';
// // import './Login.css';

// // const Login = () => {
// //   return (
// //     <div className='container'>
// //       <div className='header'>
// //         <div className='text'>Login</div>
// //         <div className='underline'></div>
// //       </div>
// //       <div className='inputs'>
// //         <div className='input'>
// //           <img src={user} alt='' />
// //           <input type='text' placeholder='Name' />
// //         </div>
// //         <div className='input'>
// //           <img src={email} alt='' />
// //           <input type='email' placeholder='Email Id' />
// //         </div>
// //         <div className='input'>
// //           <img src={pass} alt='' />
// //           <input type='password' placeholder='Password' />
// //         </div>
// //       </div>
// //       <div className='forgot-password'>
// //         Lost Password?<span>Click here!</span>
// //       </div>
// //       <div className='submit-container'>
// //         <div className='submit gray'>Sign Up</div>
// //         <div className='submit'>Login</div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Login;
