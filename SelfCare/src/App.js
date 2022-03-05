import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { PageIntro } from "./pages/intro";
import { PageWelcome } from "./pages/welcome"
import { PageRegister } from "./pages/register";
import { PageLogin } from "./pages/login";
import { PageUserData } from "./pages/userdata"
import { PageUserGoal } from "./pages/usergoal"
import { FilterPage } from "./pages/filterpage";
import { PageUserInterface } from "./pages/userinterface";
import { Quizzes } from "./pages/quizzes";
import { Quiz } from "./pages/quizzes/Quiz";
import { Facts } from "./pages/quizzes/Facts";
import { PageCorrectanswer } from "./pages/correctanswer";
import { PageFailanswer } from "./pages/failanswer";
import { PageRecetas } from "./pages/recipes";
import { RecetasFiltro } from "./pages/filterrecipes";
import { FilterQuiz } from "./pages/filterquiz";
import 'antd/dist/antd.css'; 
import "./App.css";
import { useEffect, useState } from "react";




function App() {

const [cliente,setCliente] = useState(

  {
    Nombre: "",
    Email: "",
    Password:""
  }
)

useEffect(()=>{
  const getClientes = () =>{
    fetch('http://localhost:3015/api/v1/usuario/')
    .then(res => res.json())
    .then(res => setCliente(res))
  }
  getClientes();
  },[]
)


  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <PageIntro />
          </Route>
          <Route path="/welcome">
            <PageWelcome />
          </Route>
          <Route path="/register">
            <PageRegister />
          </Route>
          <Route path="/login">
            <PageLogin />
          </Route>
          <Route path="/userdata">
            <PageUserData />
          </Route>
          <Route path="/usergoal">
            <PageUserGoal />
          </Route>
          <Route path="/filterpage">
            <FilterPage />
          </Route>
          <Route path="/userinterface">
            <PageUserInterface />
          </Route>
          <Route path="/quizzes">
            <Quizzes />
          </Route>
          <Route path="/quiz">
            <Quiz />
          </Route>
          <Route path="/facts">
            <Facts />
          </Route>
          <Route path="/recipes">
            <PageRecetas />
          </Route>
          <Route path="/wrong">
            <PageFailanswer />
          </Route>
          <Route path="/right">
            <PageCorrectanswer />
          </Route>
          <Route path="/filterrecipes">
            <RecetasFiltro />
          </Route>
          <Route path="/filterquiz">
            <FilterQuiz />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
