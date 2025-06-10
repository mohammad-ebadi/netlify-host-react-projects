import { useState } from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import style from "./Counter.module.css";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Header></Header>
      <div className={style.container}>
        <h1>Counter App</h1>
        <div className={style.btn}>
          <button onClick={() => setCounter(counter - 1)}>Decrease</button>
          <button onClick={() => setCounter(0)}>Reset</button>
          <button onClick={() => setCounter(counter + 1)}>Increase</button>
        </div>
        <p>{counter}</p>
      </div>
      <Footer></Footer>
    </>
  );
}
