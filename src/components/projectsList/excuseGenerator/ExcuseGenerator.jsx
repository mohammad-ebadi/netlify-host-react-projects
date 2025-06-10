import axios, { Axios } from "axios";
import { useState } from "react";
import Header from "../../header/Header";
import Footer from "../../footer/Footer";
import style from "./ExcuseGenerator.module.css";
export default function ExcuseGenerator() {
  // https://excuser-three.vercel.app/v1/excuse/party
  const [generateExcuse, setGenerateExcuse] = useState("");

  function fetchExcuse(excuse) {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`)
      .then((result) => {
        console.log(result.data[0].category, ":", result.data[0].excuse);
        setGenerateExcuse(result.data[0]);
      });
  }
  return (
    <>
      <Header></Header>
      <div className={style.container}>
        <h1>Excuse Generator(API)</h1>
        <div className={style.btn}>
          <button onClick={() => fetchExcuse("party")}>Party</button>
          <button onClick={() => fetchExcuse("family")}>Family</button>
          <button onClick={() => fetchExcuse("office")}>Office</button>
        </div>

        <h5>
          {" "}
          {generateExcuse.category} : {generateExcuse.excuse}
        </h5>
      </div>
      <Footer></Footer>
    </>
  );
}
