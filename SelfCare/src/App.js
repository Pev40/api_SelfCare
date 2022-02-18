import {
  BrowserRouter , Router,
  Switch,
  Route
} from "react-router-dom";
import { Routes } from "react-router";
import { PageIntro } from "./pages/intro";
import { PageWelcome } from "./pages/welcome";
import { PageRegister } from "./pages/register";
import { PageLogin } from "./pages/login";
import { PageUserData } from "./pages/userdata";
import { PageUserGoal } from "./pages/usergoal";
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
import "antd/dist/antd.css";
import "./App.css";
import { CookiesProvider } from "react-cookie";
import RequireAuth from "./components/General/RequireAuth";
import { privateRoutes } from "../routes/routes";
function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/pagos_mykonos">
        <CookiesProvider>
          <Routes>
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


                <Route path="/login" element={<PageLogin />} />
                {privateRoutes.map(({ path, title, element }) => (
                  <Route
                    key={title}
                    path={path}
                    element={<RequireAuth>{element}</RequireAuth>}
                  />
                ))}


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
          </Routes>
        </CookiesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
