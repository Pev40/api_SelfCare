import { TitlePage } from "../../components/title-page";
import { FormLogin } from "../login/components/formlogin";

function PageLogin() {
  return (
    <div className="flex flex-col h-screen">
      <TitlePage
        title="Inicie Sesión"
        subtitle="Ingrese su Correo y Contraseña"
      />
      <div className="form">
      <FormLogin/>
      </div>
    </div>
  );
}

export { PageLogin };
