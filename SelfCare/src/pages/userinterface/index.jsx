import { BottomMenu } from "../../components/bottom-menu";
import { TitlePageUserInterface } from "./components/title-userinterface";
import { InterfaceCards } from "./components/userinterfacecards";


function PageUserInterface() {
    return (
      <div className="flex flex-col h-screen">
        <TitlePageUserInterface
        title="Hola, Nombre"
        />
        <div className="rounded-t-xl bg-primary h-full pt-10 px-5">
            <div className="rounded-xl bg-white w-full h-28 text-right mb-8">
                <p className="text-2xl font-bold pr-20 pt-5">PUNTOS</p>
                <p className="text-base font-bold text-primary pr-32">0</p>
            </div>
            <div className="mb-10">
            <InterfaceCards
            titlecard="Quizz"
            tab1="Básico"
            tab2="Intermedio"
            tab3="Avanzado"
            content1="Accede a los quizz de nivel Básico y pon a prueba tu conocimiento"
            content2="Accede a los quizz de nivel Intermedio y pon a prueba tu conocimiento"
            content3="Accede a los quizz de nivel Avanzado y pon a prueba tu conocimiento"
            link="../quizzes"
            />
            </div>
            <div className="mb-10">
            <InterfaceCards
            titlecard="Recetas"
            tab1="Desayuno"
            tab2="Almuerzo"
            tab3="Cena"
            content1="¿Buscas un buen desayuno por la mañana? Ingresa aqui a ver nuestras recetas"
            content2="¿Que te apetece almorzar hoy dia? Ingresa aqui para encontrar el almuerzo de hoy"
            content3="¿Que te provoca de cenar? Ingresa aqui para encontrar la cena ideal"
            link="../filterrecipes"
            />
            </div>
            
          
            
        </div>
        <BottomMenu/>
    
      </div>
    );
  }
  
  export { PageUserInterface };