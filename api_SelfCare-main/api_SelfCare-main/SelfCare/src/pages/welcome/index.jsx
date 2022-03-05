import { TitlePage } from "../../components/title-page";
import { Button } from "antd";
import "./welcome.css";

function PageWelcome() {
  return (
    <div className="page-login flex flex-col h-screen">
      <TitlePage
        title="Bienvenido"
        subtitle="La plataforma de aprendizaje saludable que necesitabas"
      />
      <section className="form">
        <div className="pb-10  pl-5 pr-5">
          <Button className="bg-yellow-300 rounded-xl border-yellow-300 text-white w-full hover:text-black btn-goal btn-difficulty">
          <a href="../register"> Registrarse </a>
          </Button>
        </div>
        <div className="pb-10  pl-5 pr-5">
          <Button className="bg-yellow-300 rounded-xl border-yellow-300 text-white w-full hover:text-black btn-goal btn-difficulty">
            <a href="../login"> Iniciar Sesión </a>
          </Button>
        </div>
      </section>
    </div>
  );
}

export { PageWelcome };

