import "./header.css";
import imagenes from "../components/assets/banner-quizz.jpg"
import logo from "../../../../images/assets/img/logo-white.png"

function Header() {
  return (
      <header>
        <img className="header-banner" src={imagenes} alt="banner"/>
        <div>
        <img className="logo" src={logo} alt="logo"/>
        <h1 className="h1">
          Quizz
        </h1>
        </div>
      </header>
  
  );
};

export { Header };