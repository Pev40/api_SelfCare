import logointerface from "../../../images/logo-interface.png";
import Cookies from 'universal-cookie';
function TitlePageUserInterface(props) {
  const cookies = new Cookies();
  let cookName = cookies.get('pagos_mykonos_user')
    let construcccion = "Bienvenido "+ cookName;
    const { title = construcccion,} = props;
  
    return (
      <div className="title-page bg-secondary flex justify-between py-12 px-6">
        
        <h1 className="font-bold text-3xl text-primary">{title}</h1>
        <img className="w-32" src={logointerface} alt="selfcare-logo-top-face" />
      </div>
    );
  }
  
  export { TitlePageUserInterface };