import './App.css';
import {  SignedIn,
  SignedOut,
  RedirectToSignIn,
  SignIn,
  SignUp,
  UserButton,ClerkProvider } from "@clerk/clerk-react";

import { BrowserRouter,Routes,Route, useNavigate } from 'react-router-dom';
import Home from './Components/Pages/Home';
import Courses from './Components/Pages/Courses';
import Contact from './Components/Pages/Contact';
import NoPage from './Components/Pages/NoPage';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Blog from './Components/Pages/Blog';

// import SignIn from './Components/Auth/SignIn';
// import SignUp from './Components/Auth/SignUp';

if (!process.env.REACT_APP_CLERK_PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}
const clerkPubKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;
function ClerkProviderWithRoutes() {
 
  return (
      <Routes>
      <Route index element={<Home/>}/>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="*" element={<NoPage/>}/>

        <Route
          path="/sign-in/*"
          element={<SignIn routing="path" path="/sign-in" />}
        />
        <Route
          path="/sign-up/*"
          element={<SignUp routing="path" path="/sign-up" />}
        />
        
        <Route  exact path="/courses" element={<Courses/>}/>
        <Route exact path="/scholarship" element={<Contact/>}/>
        <Route exact path="/blog" element={<Blog/>}/>
    
          
      </Routes>
  );
}


 function App() {

  return (<>
     
    
     <ClerkProvider
      publishableKey={clerkPubKey}
          >
      <BrowserRouter>

     <Navbar/>

     <ClerkProviderWithRoutes />

    <Footer/>
    </BrowserRouter>

    </ClerkProvider>

    </>  
  );
}

export default App