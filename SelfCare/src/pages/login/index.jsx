import { TitlePage } from "../../components/title-page";
import LoginForm from "../../components/Login/LoginForm";

function PageLogin() {
  return (
    <div className="flex flex-col h-screen">
      <TitlePage
        title="Inicie Sesión"
        subtitle="Ingrese su Correo y Contraseña"
      />
      <div className="form">
      <LoginForm />
      </div>
    </div>
  );
}

export {PageLogin};
