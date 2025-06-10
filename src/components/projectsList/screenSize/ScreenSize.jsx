import { useEffect, useState } from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
// main style
import style from "./ScreenSize.module.css";
export default function ScreenSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);
  const checkSize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };
  useEffect(() => {
    window.addEventListener("resize", checkSize);
  }, [width, height]);

  return (
    <>
      <Header></Header>
      <div className={style.container}>
        <h1>Resize your window</h1>
        <hr />
        <h2>Window width</h2>
        <h2>{width} px</h2>
        <hr />
        <h2>Window height</h2>
        <h2>{height} px</h2>
      </div>
      <Footer></Footer>
    </>
  );
}
