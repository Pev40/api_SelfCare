import { Header } from "../quizzes/StartQuiz/components/header";
import { StartQuiz } from "../quizzes/StartQuiz";
import { BottomMenu } from "../../components/bottom-menu";

function Quizzes() {
  const fetchQuestions = () => {};

  return (
      <div className="flex flex-col h-screen">
            <Header />
            <StartQuiz
              fetchQuestions={fetchQuestions}
            />
            <BottomMenu/>
        </div>
       

  );
}

export { Quizzes };