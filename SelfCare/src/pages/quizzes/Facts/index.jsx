import { useState } from "react";
import { BottomMenu } from "../../../components/bottom-menu";
import {TitlePage} from "../../../components/title-page"
import "./facts.css";

function Facts() {
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
        { answerText: "Brocoli, Almendras, huevo", isCorrect: true },
        { answerText: "Ciruelas, higos, kiwis, Manzanas", isCorrect: false },
        { answerText: "Ninguna de las anteriores", isCorrect: false },
      ],
    },
    {
      questionText:
        "¿Cuáles son los grupos de frutas que son fuentes de vitamina A?",
      answerOptions: [
        { answerText: "Aguacate, plátano, melón", isCorrect: true },
        { answerText: "Piña, plátano, fresas", isCorrect: false },
        { answerText: "kiwi, magos, papaya", isCorrect: false },
        { answerText: "Naranjas, toronjas, piña", isCorrect: false },
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
      questionText: "¿Que causa la Malnutrición?",
      answerOptions: [
        {
          answerText: "Disminución de la proliferación celular",
          isCorrect: false,
        },
        {
          answerText: "Disminución de la proliferación celular",
          isCorrect: false,
        },
        { answerText: "Deficiencia de nutrientes", isCorrect: false },
        { answerText: "Todas las anteriores", isCorrect: true },
      ],
    },
    {
      questionText: "Las personas que toman mucho alcohol:",
      answerOptions: [
        {
          answerText: "Pueden presentar carencias de vitaminas y minerales.",
          isCorrect: true,
        },
        {
          answerText: "Suelen llevar una dieta equilibrada.",
          isCorrect: false,
        },
        {
          answerText: "Suelen acumular proteínas en el hígado.",
          isCorrect: false,
        },
        {
          answerText: "Pueden absorber mejor los nutrientes.",
          isCorrect: false,
        },
      ],
    },
    {
      questionText:
        "¿Cuáles son los grupos de frutas que son fuentes de vitamina A?",
      answerOptions: [
        { answerText: "Naranjas, toronjas, piña", isCorrect: false },
        { answerText: "Naranjas, toronjas, piña", isCorrect: true },
        { answerText: "Naranjas, toronjas, piña", isCorrect: false },
        { answerText: "Naranjas, toronjas, piña", isCorrect: false },
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
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  return (
    <di>
      <TitlePage
        title="Facts"
        subtitle=""
      />

      <section className="container-quiz fact-container-quiz">
        <p>{questions[currentQuestion].fact}</p>
        <button class="btn btn-primary Btn">Siguiente</button>
      </section>
      <BottomMenu />
    </di>
  );
}

export { Facts };
