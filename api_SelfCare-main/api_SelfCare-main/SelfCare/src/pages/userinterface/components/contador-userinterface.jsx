import logointerface from "../../../images/logo-interface.png";
import Cookies from 'universal-cookie';
function ContadorUserInterface(props) {
  const cookies = new Cookies();
  let cookName = cookies.get('pagos_mykonos_puntaje')
    let construcccion =  cookName;
    const { title = construcccion,} = props;
  
    return (
        <div className="rounded-xl bg-white w-full h-28 text-right mb-8">
        <p className="text-2xl font-bold pr-20 pt-5">PUNTOS</p>
        <p  className=" text-base font-bold text-primary pr-32">{title}</p>
        </div>
    );
  }
  
  export { ContadorUserInterface };


