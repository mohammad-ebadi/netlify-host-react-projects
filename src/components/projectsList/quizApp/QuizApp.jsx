import { useState } from "react";
import Footer from "../../footer/Footer";
import Header from "../../header/Header";
import style from "./QuizApp.module.css";
import questionsData from "./questions.json"
export default function QuizApp() {
    const [currentQuestion , setCurrentQuestion] = useState(0)
    const [ result , setResult] = useState(0)
    const [showResult , setShowResult] = useState(false)

     const handleAnswer = (answer)=>{
        if( answer === questionsData.questions[currentQuestion].correctAnswer){
            setResult(result + 1)
        }

        const nextQuestionNumber =  currentQuestion + 1
        if(nextQuestionNumber < questionsData.questions.length){
            setCurrentQuestion(nextQuestionNumber)
        }else{
            setShowResult(true)
        }
    }

    const restartQuiz = ()=>{
        setCurrentQuestion(0)
        setResult(0)
        setShowResult(false)

    }
  return (
    <>
      <Header></Header>
      <div className={style.container}>
        {
            showResult ? (
                <div className={style.resultSection}>
                    <h3>Quiz Completd</h3>
                    <p>Your score is : {result} out of {questionsData.questions.length}</p>
                    <div className={style.restartBtn}>
                        <button onClick={restartQuiz}>restart</button>
                    </div>
                </div>
            ):(
                <div className={style.questionSection}>
                    <h3>Qustions {currentQuestion + 1}/{questionsData.questions.length} </h3>
                    <p>{questionsData.questions[currentQuestion].question}</p>
                    <div className={style.btn}>
                        <button onClick={()=>{handleAnswer("yes")}}>yes</button>
                        <button onClick={()=>{handleAnswer("no")}}>no</button>
                    </div>
                </div>
            )}
      </div>
      <Footer></Footer>
    </>
  );
}
