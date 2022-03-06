import "./quiz.css";
import { useCallback, useEffect, useState } from "react";
import logoYellow from "../../../images/assets/img/logo-white.png"
import { BottomMenu } from "../../../components/bottom-menu";
import { post ,get} from '../../../servicies/api/api.service';
import Cookies from 'universal-cookie';
import { useHistory } from 'react-router'
import { useCookies } from "react-cookie";
function Quiz(){
  const [cookies, setCookie, removeCookie] = useCookies([
    "pagos_mykonos_puntaje",
  ]);
const history = useHistory()
const cookiess = new Cookies();
const cookieDificultad = cookiess.get('pagos_mykonos_dificultad')
const cookieIdCliente = cookiess.get('pagos_mykonos_token')
if(!cookieDificultad || !cookieIdCliente){
  history.push('/quizzes')
}

const [currentQuestion, setCurrentQuestion] = useState(0);
const [showScore, setShowScore] = useState(false);
const [score, setScore] = useState(0);
const [questions, setQuestions] = useState([]);
const [puntaje, setPuntaje] = useState(cookies["pagos_mykonos_puntaje"] || null);

const handleFinish = useCallback(async() =>{
  
  const preguntas = await get({
    url: `/quiz/${cookieDificultad}`
  })
  
  setQuestions(preguntas);
  console.log("Consulta BBDD",preguntas)
  return preguntas;
},[])

useEffect(()=>{
  if(questions.length === 0){
    handleFinish();
  }
},[handleFinish, questions.length])


async function answerOptionClick(isCorrect){
if (isCorrect) {
  setScore(score + 1);
}

const nextQuestion = currentQuestion + 1;
if (nextQuestion < questions.length) {
  setCurrentQuestion(nextQuestion);
} else {
  setCookie("pagos_mykonos_puntaje", Number(cookieIdCliente)+score);
  setPuntaje(Number(cookieIdCliente+score));
  const scoreFinal = await post({
    url: `/quiz/register`,
    data: {
      idCliente : cookieIdCliente,
      Puntuacion : score
    }
  })
  setShowScore(true);
}

}




/*

const nextQuestion = currentQuestion + 1;
if (nextQuestion < questions.length) {
  setCurrentQuestion(nextQuestion);
} else {
  setShowScore(true);
}
*/



  return (
    <section className="container-quiz">
      {showScore ? (
        <section className="container-quiz-scored">
          <div className="Quiz-facts">
          <img src={logoYellow}/>
            <h1 className="h1">Scored</h1>
          </div>
          <h2 className="score-section h2">
            Tu puntaje es {score} de {questions.length}
          </h2>
          <button class="btn btn-primary Btn"><a href="../Quizzes">
          <a href="../../userinterface">Regresar al home</a>
          
          </a>
          </button>
          <BottomMenu/>
        </section>
      ) : (
        <>
          <section className="question-section">
            <h2 className="question-count h2">
              Pregunta {currentQuestion + 1}/{questions.length}
            </h2>

            <p className="question-text p">
              {questions[currentQuestion] && questions[currentQuestion].questionText}
            </p>
          </section>
          <section className="answer-section">
            {questions[currentQuestion] &&
             questions[currentQuestion].answerOptions.map((answerOption) => (
              <button
                class="btn btn-primary Btn"
                onClick={() => answerOptionClick(answerOption.isCorrect)}
              >
                {answerOption.answerText}
              </button>
            ))}
          </section>
        </>
      )}
      <BottomMenu/>
    </section>
   
  );
};

export { Quiz };