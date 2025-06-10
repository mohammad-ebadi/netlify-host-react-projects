import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import style from "./About.module.css";

export default function About() {
  return (
    <div className={style.background}>
      <Header></Header>
      <div className={style.h1}>
        <h1>About Us Page</h1>
      </div>
      <Footer></Footer>
    </div>
  );
}
