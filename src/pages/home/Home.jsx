import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import stlye from "./Home.module.css";

export default function Home() {
  return (
    <div className={stlye.background}>
      <Header></Header>
      <h1 className={stlye.h1}>Home Page</h1>

      <Footer></Footer>
    </div>
  );
}
