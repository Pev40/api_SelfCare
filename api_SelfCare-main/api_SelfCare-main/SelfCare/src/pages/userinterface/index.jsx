import { BottomMenu } from "../../components/bottom-menu";
import { TitlePageUserInterface } from "./components/title-userinterface";
import { InterfaceCards } from "./components/userinterfacecards";
import { ContadorUserInterface } from "./components/contador-userinterface";
import Cookies from 'universal-cookie';

function PageUserInterface() {
  const cookies = new Cookies();
  let cookName = cookies.get('pagos_mykonos_user')
  return (
      <div className="flex flex-col h-screen">
        <TitlePageUserInterface/>
        <div className="rounded-t-xl bg-primary h-full pt-10 px-5">
            <ContadorUserInterface/>
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