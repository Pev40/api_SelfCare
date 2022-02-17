import "./startquiz.css";
import { useState } from "react";
import { useHistory } from "react-router";
import {ErrorMessage} from "../StartQuiz/components/errormessage";

const StartQuiz = ({ fetchQuestions }) => {
  
    const [difficulty] = useState("");
    const [error, setError] = useState(false);

    const history = useHistory();

    const handleSubmit = () => {
      if ( !difficulty ) {
        setError(true);
        return;
      } else {
        setError(false);
        fetchQuestions(difficulty);
        history.push("/quiz");
      }
    };


  return (

    <section className="Home-container">
     
        <h2 className="h2"
        >Seleccione su nivel</h2>

        <form className="form">

          {error && <ErrorMessage>Por favor rellene todos los campos</ErrorMessage>}

          <button className="btn-difficulty">
            <h2 
            className="h2"
            value={difficulty}
            >
            Facíl</h2>
          </button>
          <button className="btn-difficulty">
            <h2 
            className="h2"
            value={difficulty}
            >
            Intermedio</h2>
          </button>
          <button className="btn-difficulty">
            <h2 
            className="h2"
            value={difficulty}
          
            >
            Dificil</h2>
          </button>

          <button
          type="button"
          class="btn btn-primary Btn Btn-secondary"
          onClick={handleSubmit}
          >
          <a href="../Quiz">Comenzar Quiz</a>
          </button>

        </form>
  
    </section>
    
  );
};

export { StartQuiz };