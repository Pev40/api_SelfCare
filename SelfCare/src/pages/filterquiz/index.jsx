import { NavBottom } from "../filterquiz/components/NavBottom";
import { Header } from "../filterquiz/components/header";
import { Content } from "../filterquiz/components/content";

function FilterQuiz() {
  return (
    <>
      <Header title="Quizz" />
      <main>
        <Content />
      </main>
      <NavBottom />
    </>
  );
}
export { FilterQuiz };