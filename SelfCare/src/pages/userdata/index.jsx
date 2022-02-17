import { TitlePage } from "../../components/title-page";
import { FormUserData } from "./components/formuserdata";
import "./userdata.css"

function PageUserData() {
  return (
    <div className="flex flex-col h-screen">
      <TitlePage
        title="Datos"
        subtitle="Ingrese su información"
      />

      <FormUserData/>
    </div>
  );
}

export { PageUserData };