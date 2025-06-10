import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import style from "./Projects.module.css";
import Footer from "../../components/footer/Footer";
export default function Projects() {
  return (
    <div className={style.background}>
      <Header></Header>
      <ol className={style.olLinks}>
        <li>
          <Link to="/projects/ScreenSize">Screen Size</Link>
        </li>
        <li>
          <Link to="/projects/Counter">Counter</Link>
        </li>
        <li>
          <Link to="/projects/ExcuseGenerator">Excuse Generator(API)</Link>
        </li>
        <li>
          <Link to="/projects/TodoList">To do List</Link>
        </li>
        <li>
          <Link to="/projects/Calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/projects/QuizApp">QuizApp</Link>
        </li>
      </ol>
      <Footer></Footer>
    </div>
  );
}
