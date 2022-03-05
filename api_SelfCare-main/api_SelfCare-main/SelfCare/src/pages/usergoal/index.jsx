import { TitlePage } from "../../components/title-page";
import {Button} from 'antd';
import "./usergoal.css";

function PageUserGoal() {
  return (
    <div className="page-login flex flex-col h-screen">
      <TitlePage
        title="Objetivo"
        subtitle="Ingrese su objetivo"
      />
      <section className="form">
        <div className="grid grid-cols-1 px-5 pt-10 mb-8">
      <Button type="primary" id="btn1" className="btn-difficulty btn-goal Btn">
        Perdida de peso
      </Button>
      <Button type="primary" id="btn2" className="btn-difficulty btn-goal Btn">
        Mantener peso
      </Button>
      <Button type="primary" id="btn2" className="btn-difficulty btn-goal Btn">
        Aumentar peso
      </Button>
      </div>
      <Button type="primary" disabled className="btn-sgt w-full  font-bold hover:bg-yellow-400 hover:border-yellow-400 hover:text-black btn-goal btn-siguiente">
        Siguiente
      </Button>
      </section>
    </div>
  );
}

export { PageUserGoal };