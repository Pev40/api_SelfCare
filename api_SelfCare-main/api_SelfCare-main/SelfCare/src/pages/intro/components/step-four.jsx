import imgheart from "../../../images/corazon-top.png";
import imgintro2 from "../../../images/logo-intro.png";
import { Button } from "antd";

function StepFour (props) {
  const {title = ""} = props;
  return (
    <div className="step-one h-screen grid grid-cols-1">
      <div className="flex justify-center items-center ">
      <img className="w-72 px-2 mx-8 mt-12" src={imgheart} alt="selfcare-corazon-top-face"/>
      </div>
      <div className="grid grid-cols-1 place-content-start">
        <img className="w-70 px-10" src={imgintro2} alt="selfcare-logo-intro2-face" />
        <p className="text-center stepOne-p p-width">{title}</p>
      </div> 
      <div className="px-10"> 
        <Button type="" htmlType="submit" className="btn-difficulty btn-goal Btn">
         <a href="../../welcome"> Empecemos </a>
        </Button>
      </div>
  </div>
  );
}

export { StepFour };