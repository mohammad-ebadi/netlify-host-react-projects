import { Navigate, Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Home from "./pages/home/Home";
import ScreenSize from "./components/projectsList/screenSize/ScreenSize";
import Counter from "./components/projectsList/counter/Counter";
import ExcuseGenerator from "./components/projectsList/excuseGenerator/ExcuseGenerator";
import TodoList from "./components/projectsList/todoList/TodoList";
import Calculator from "./components/projectsList/calculator/Calculator";
import QuizApp from "./components/projectsList/quizApp/QuizApp";
import { useState } from "react";
import SignIn from "./pages/authentication/signIn/SignIn";
import SignUp from "./pages/authentication/signUp/SignUp";

export default function App() {
  const [isSignedIn , setIsSignedIn] = useState(false)

 const handleLogin = ()=>{
    setIsSignedIn(true)
  }
  return (
    <div>
      <Routes>
        <Route path="/signIn" element={ isSignedIn?(<Navigate to="/"></Navigate>):(<SignIn onSignIn={handleLogin}></SignIn>)}></Route>
        <Route path="/signUp" element={ isSignedIn?(<Navigate to="/"></Navigate>):(<SignUp></SignUp>)}></Route>

        <Route path="/" element={ isSignedIn ?(<Home></Home>) :(<Navigate to="/signIn"></Navigate>)}></Route>
        <Route path="/about" element={ isSignedIn ?(<About></About>) :(<Navigate to="/signIn"></Navigate>)}></Route>
        <Route path="/projects" element={ isSignedIn ?(<Projects></Projects>) :(<Navigate to="/signIn"></Navigate>)}></Route>
        <Route path="/projects/ScreenSize" element={ isSignedIn ?(<ScreenSize></ScreenSize>) :(<Navigate to="/signIn"></Navigate>)}></Route>
        <Route path="/projects/Counter" element={ isSignedIn ?(<Counter></Counter>) :(<Navigate to="/signIn"></Navigate>)}></Route>
        <Route path="/projects/ExcuseGenerator" element={ isSignedIn ?(<ExcuseGenerator></ExcuseGenerator>) :(<Navigate to="/signIn"></Navigate>)}></Route>
        <Route path="/projects/TodoList" element={ isSignedIn ?(<TodoList></TodoList>) :(<Navigate to="/signIn"></Navigate>)}></Route>
        <Route path="/projects/Calculator" element={ isSignedIn ?(<Calculator></Calculator>) :(<Navigate to="/signIn"></Navigate>)}></Route>
        <Route path="/projects/QuizApp" element={ isSignedIn ?(<QuizApp></QuizApp>) :(<Navigate to="/signIn"></Navigate>)}></Route>

      </Routes>
    </div>
  );
}
