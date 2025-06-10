import { useState } from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import style from "./Calculator.module.css";

export default function Calculator() {
  const [display, setDisplay] = useState("0");
  const [equation, setEquation] = useState("");

  function handleNumber(number) {
    if (display === "0") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  }

  function handleOperator(operator) {
    setEquation(display + operator);
    setDisplay("0");
  }

  function handleEqual() {
    try {
      const resulte = eval(equation + display);
      setDisplay(resulte.toString());
      setEquation("");
    } catch (error) {
      setDisplay(error);
    }
  }
  function handleClear() {
    setDisplay("0");
    setEquation("");
  }
  // AI helped
  function handleSpecialOperation(operation) {
    try {
      let result;
      switch (operation) {
        case "sqrt":
          result = Math.sqrt(parseFloat(display));
          break;
        case "square":
          result = Math.pow(parseFloat(display), 2);
          break;
        case "log":
          result = Math.log10(parseFloat(display));
          break;
        case "sin":
          result = Math.sin((parseFloat(display) * Math.PI) / 180);
          break;
        case "cos":
          result = Math.cos((parseFloat(display) * Math.PI) / 180);
          break;
        default:
          result = display;
      }
      setDisplay(result.toString());
    } catch (error) {
      setDisplay(error);
    }
  }

  return (
    <>
      <Header></Header>
      <div className={style.container}>
        <div className={style.calculator}>
          <div className={style.display}>
            <div className={style.equation}>{equation}</div>
            <div className={style.current}>{display}</div>
          </div>
          <div className={style.buttons}>
            <button onClick={handleClear} className={style.clear}>
              C
            </button>
            <button
              onClick={() => handleSpecialOperation("sqrt")}
              className={style.operations}
            >
              √
            </button>
            <button
              onClick={() => handleSpecialOperation("square")}
              className={style.operations}
            >
              x²
            </button>
            <button
              onClick={() => handleSpecialOperation("log")}
              className={style.operations}
            >
              log
            </button>
            <button
              onClick={() => handleSpecialOperation("sin")}
              className={style.operations}
            >
              sin
            </button>
            <button
              onClick={() => handleSpecialOperation("cos")}
              className={style.operations}
            >
              cos
            </button>

            <button onClick={() => handleNumber("7")}>7</button>
            <button onClick={() => handleNumber("8")}>8</button>
            <button onClick={() => handleNumber("9")}>9</button>
            <button
              onClick={() => handleOperator("/")}
              className={style.operators}
            >
              /
            </button>

            <button onClick={() => handleNumber("4")}>4</button>
            <button onClick={() => handleNumber("5")}>5</button>
            <button onClick={() => handleNumber("6")}>6</button>
            <button
              onClick={() => handleOperator("*")}
              className={style.operators}
            >
              ×
            </button>

            <button onClick={() => handleNumber("1")}>1</button>
            <button onClick={() => handleNumber("2")}>2</button>
            <button onClick={() => handleNumber("3")}>3</button>
            <button
              onClick={() => handleOperator("-")}
              className={style.operators}
            >
              -
            </button>

            <button onClick={() => handleNumber("0")}>0</button>
            <button onClick={() => handleNumber(".")}>.</button>
            <button onClick={handleEqual} className={style.equal}>
              =
            </button>
            <button
              onClick={() => handleOperator("+")}
              className={style.operators}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
}
