import { Route, Routes } from "react-router-dom";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Home from "./pages/home/Home";
import ScreenSize from "./components/projectsList/screenSize/ScreenSize";
import Counter from "./components/projectsList/counter/Counter";
import ExcuseGenerator from "./components/projectsList/excuseGenerator/ExcuseGenerator";
import TodoList from "./components/projectsList/todoList/TodoList";
import Calculator from "./components/projectsList/calculator/Calculator";
import QuizApp from "./components/projectsList/quizApp/QuizApp";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/projects" element={<Projects></Projects>}></Route>
        <Route path="/projects/ScreenSize" element={<ScreenSize></ScreenSize>}></Route>
        <Route path="/projects/Counter" element={<Counter></Counter>}></Route>
        <Route path="/projects/ExcuseGenerator" element={<ExcuseGenerator></ExcuseGenerator>}></Route>
        <Route path="/projects/TodoList" element={<TodoList></TodoList>}></Route>
        <Route path="/projects/Calculator" element={<Calculator></Calculator>}></Route>
        <Route path="/projects/QuizApp" element={<QuizApp></QuizApp>}></Route>

      </Routes>
    </div>
  );
}
