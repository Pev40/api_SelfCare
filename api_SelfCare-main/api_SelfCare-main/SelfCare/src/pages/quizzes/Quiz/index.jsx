import "./quiz.css";
import { useState } from "react";
import logoYellow from "../../../images/assets/img/logo-white.png"
import { BottomMenu } from "../../../components/bottom-menu";

function Quiz(){
  const questions = [
    {
      questionText:
        "Las grasas se encuentran únicamente en los alimentos de origen animal",
      answerOptions: [
        { answerText: "Falso", isCorrect: true },
        { answerText: "Verdadero", isCorrect: false },
        { answerText: "Depende", isCorrect: false },
      ],
      fact: "lorem tghg rehn4idv  e3irnbcfdkei eubgrfv rubgdj iubvgfdk rj",
    },
    {
      questionText:
        "Seleccione el grupo de alimentos que son altas fuente de calcio?",
      answerOptions: [
        { answerText: "Carnes rojas, Naranjas, Cereales", isCorrect: false },
        { answerText: "Brocoli, Almendras, Pistachos", isCorrect: true },
        { answerText: "Ciruelas, higos, kiwis, Manzanas", isCorrect: false },
        { answerText: "Ninguna de las anteriores", isCorrect: false },
      ],
    },
    {
      questionText: "¿ Cual de las siguientes funciones realiza el agua?",
      answerOptions: [
        {
          answerText: "Contribuye a regular la temperatura corporal.",
          isCorrect: true,
        },
        { answerText: " Favorece la absorción del calcio", isCorrect: false },
        {
          answerText: "Contribuye a la defensa del organismo",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "¿Las frutas engordan si se comen de noche?",
      answerOptions: [
        { answerText: "Verdadero", isCorrect: false },
        { answerText: "Falso", isCorrect: true },
        {
          answerText: "Depende de que tan noche y que fruta es",
          isCorrect: false,
        },
      ],
    },

    {
      questionText: "El principal nutriente con función estructural es",
      answerOptions: [
        {
          answerText: "Los glúcidos",
          isCorrect: false,
        },
        {
          answerText: "Los lípidos",
          isCorrect: false,
        },
        { answerText: "El agua", isCorrect: false },
        { answerText: "Las proteínas", isCorrect: true },
      ],
    },
    {
      questionText: "¿cómo se mide la energía liberada en los alimentos?",
      answerOptions: [
        {
          answerText: "En grados centígrados",
          isCorrect: false,
        },
        {
          answerText: "En grados kelvin",
          isCorrect: false,
        },
        {
          answerText: "En calorías",
          isCorrect: true,
        },
        {
          answerText: "En newton",
          isCorrect: false,
        },
      ],
      fact:"Las calorías son la energía que no metemos en el cuerpo a través de los 3 macronutrientes principales carbohidratos, proteínas y grasas."
    },
  ];

  const questionsMedium = [
    {
      questionText: "Los aminoácidos son los componentes de",
      answerOptions: [
        { answerText: "Los glúcidos", isCorrect: false },
        { answerText: "Las proteínas", isCorrect: true },
        { answerText: " Los lípidos", isCorrect: false },
      ],
    },
    {
      questionText: "¿Qué grupo de frutas es fuente de vitamina A?",
      answerOptions: [
        { answerText: "Aguacate, plátano, melón", isCorrect: true },
        { answerText: "Piña, plátano, fresas", isCorrect: false },
        { answerText: "kiwi, magos, papaya", isCorrect: false },
        { answerText: "Naranjas, toronjas, piña", isCorrect: false },
      ],
    },
    {
      questionText: "¿Qué es una proteína completa?",
      answerOptions: [
        { answerText: "Aqu ella que se absorbe rápidamente", isCorrect: false },
        {
          answerText: "Aquella que tiene un valor biológico mayor al 75%",
          isCorrect: false,
        },
        {
          answerText: "Aquella que se obtiene de fuentes animales",
          isCorrect: false,
        },
        {
          answerText: "Aquella que tiene los 9 aminoacidos esenciales",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "Una deficiencia acusada por deficiencia de calcio puede producir",
      answerOptions: [
        { answerText: "Fatiga y anemia", isCorrect: false },
        { answerText: "Debilidad y fragilidad en los huesos", isCorrect: true },
        {
          answerText: "Nauseas",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "La falta de yodo en la dieta puede producir",
      answerOptions: [
        { answerText: "Bocio", isCorrect: true },
        { answerText: "Anemia", isCorrect: false },
        {
          answerText: "Caries dental",
          isCorrect: false,
        },
      ],
    },
  ];

  const questionsHard = [
    {
      questionText:
        "El almidón es un polisacárido muy abundante en alimentos como:",
      answerOptions: [
        { answerText: "El pescado", isCorrect: false },
        { answerText: "El pan", isCorrect: true },
        { answerText: "El queso", isCorrect: false },
      ],
    },
    {
      questionText: "El colesterol es",
      answerOptions: [
        { answerText: "Un lípido esteroideo", isCorrect: true },
        { answerText: "Un fosfolípido", isCorrect: false },
        { answerText: "Un hidrato de carbono", isCorrect: false },
      ],
    },
    {
      questionText:
        "¿Cuál de los siguientes macros proporcionan más calorías por gramo:?",
      answerOptions: [
        { answerText: "Carbohidratos", isCorrect: false },
        { answerText: "Proteínas", isCorrect: false },
        {
          answerText: "Grasas",
          isCorrect: true,
        },
      ],
    },
    {
      questionText:
        "¿Cual de las siguientes combinaciones muestra las cantidades aproximadas recomendadas de los macronutrientes en una dieta equilibrada?",
      answerOptions: [
        {
          answerText: "Glúcidos ( 20% ), lípidos (30% ), Proteínas (50% )",
          isCorrect: false,
        },
        {
          answerText: "Glúcidos (57% ), lípidos (28%   ), Proteínas (15% )",
          isCorrect: true,
        },
        {
          answerText: "Glúcidos ( 40%), lípidos ( 40% ), Proteínas ( 20%)",
          isCorrect: false,
        },
      ],
    },
    {
      questionText: "¿Cuál de las siguientes funciones tiene el aditivo E-350?",
      answerOptions: [
        { answerText: "Impedir la oxidación", isCorrect: true },
        { answerText: "Endulzar", isCorrect: false },
        {
          answerText: "Dar color al alimento",
          isCorrect: false,
        },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const answerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

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
              {questions[currentQuestion].questionText}
            </p>
          </section>
          <section className="answer-section">
            {questions[currentQuestion].answerOptions.map((answerOption) => (
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