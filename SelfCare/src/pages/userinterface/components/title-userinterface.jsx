import logointerface from "../../../images/logo-interface.png";
function TitlePageUserInterface(props) {
    const { title = "",} = props;
  
    return (
      <div className="title-page bg-secondary flex justify-between py-12 px-6">
        
        <h1 className="font-bold text-3xl text-primary">{title}</h1>
        <img className="w-32" src={logointerface} alt="selfcare-logo-top-face" />
      </div>
    );
  }
  
  export { TitlePageUserInterface };