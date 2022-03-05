import { TitlePage } from "../../components/title-page";
import { FormRegister } from "./components/form-register";

function PageRegister() {
  return (
    <div className="page-login flex flex-col h-screen">
      <TitlePage
        title="Registrarse"        
      />
      <div className="form">
      <FormRegister/>
      </div>
    </div>
  );
}

export { PageRegister };
