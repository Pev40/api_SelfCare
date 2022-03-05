import { Carousel } from "antd";
import { StepOne } from "./components/step-one";
import { StepTwo } from "./components/step-two";
import { StepThree } from "./components/step-three";
import { StepFour } from "./components/step-four";
import "./index.css"

function PageIntro() {

  return (
    <section className="page-intro bg-primary">
      <Carousel dotPosition={"bottom"} autoplay>
        <div>
          <StepOne 
          title="La plataforma de aprendizaje saludable que necesitabas"
          />
        </div>
        <div>
          <StepTwo 
          title="Nosotros nos encargamos de que aprendas, descubras recetas fáciles y sanas; nutre tu cuerpo y mente de manera saludable."
          />
        </div>
        <div>
          <StepThree
          title="Nunca fue fácil aprender sobre vida y alimentación saludable."
          />
        </div>
        <div>
          <StepFour
          title="Evalúa tu objetivo con nosotros, llena cuestionarios para afianzar tu conocimiento sobre vida y alimentación saludable."
          />
        </div>
      </Carousel>
    </section>
  );
}

export { PageIntro };
