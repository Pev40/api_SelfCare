import './startquiz.css'
import { useState } from 'react'
import { useHistory } from 'react-router'
import { ErrorMessage } from '../StartQuiz/components/errormessage'
import { useCookies } from "react-cookie";
const StartQuiz = () => {
  const [difficulty] = useState('')
  const [error, setError] = useState(false)
  const [cookies, setCookie, removeCookie] = useCookies([
    "pagos_mykonos_dificultad",
  ]);
  const [Dificultad, setDificultad] = useState(cookies["pagos_mykonos_dificultad"] || null);

  const history = useHistory()

  const handleSubmitEasy = () => {
 
      setCookie("pagos_mykonos_dificultad",1);
      setDificultad(1);
      history.push('/quiz')
      return

  }
  const handleSubmitMedium = () => {
 
    setCookie("pagos_mykonos_dificultad",2);
    setDificultad(2);
    history.push('/quiz')
    return

}


const handleSubmitHard = () => {
 
  setCookie("pagos_mykonos_dificultad",3);
  setDificultad(3);
  history.push('/quiz')
  return

}


  return (
    <section className="Home-container">
      <h2 className="h2">Seleccione su nivel</h2>

      <form className="form">
        {error && (
          <ErrorMessage>Por favor rellene todos los campos</ErrorMessage>
        )}

        <button className="btn-difficulty" onClick={handleSubmitEasy}>
          <h2 className="h2" value={1}>
            Facíl
          </h2>
        </button>
        <button className="btn-difficulty" onClick={handleSubmitMedium}>
          <h2 className="h2" value={2}>
            Intermedio
          </h2>
        </button>
        <button className="btn-difficulty" onClick={handleSubmitHard}>
          <h2 className="h2" value={3}>
            Dificil
          </h2>
        </button>

        <button
          type="button"
          class="btn btn-primary Btn Btn-secondary"
          onClick={handleSubmitMedium}
        >
          <a href="../Quiz">Comenzar Quiz</a>
        </button>
      </form>
    </section>
  )
}

export { StartQuiz }
