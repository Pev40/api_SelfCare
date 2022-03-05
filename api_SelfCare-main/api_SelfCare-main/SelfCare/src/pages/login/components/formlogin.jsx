import { Form, Input, Button} from 'antd';
import { useHistory } from 'react-router-dom';
import { createContext, useState } from "react";
import { useCookies } from "react-cookie";
import { post } from '../../../servicies/api/api.service';
import "./formlogin.css"
function FormLogin(){
  const [cookies, setCookie, removeCookie] = useCookies([
    "pagos_mykonos_user",
    "pagos_mykonos_token",
    "pagos_mykonos_email",
  ]);
  const [user, setUser] = useState(cookies["pagos_mykonos_user"] || null);
  const [token, setToken] = useState(cookies["pagos_mykonos_token"] || null);
  const [email, setEmail] = useState(cookies["pagos_mykonos_email"] || null);
  const [puntaje, setPuntaje] = useState(cookies["pagos_mykonos_puntaje"] || null);

  const history = useHistory();
  const handleFinish = async(values) =>{
    try {
          console.log("Holass",values)
      const registro = await post({
      url: '/usuario/login',
      data: {
        Email : values.email,
        Password : values.password
      }
    })

    setCookie("pagos_mykonos_user",registro.Nombre);
    setCookie("pagos_mykonos_token",registro.idCliente);
    setCookie("pagos_mykonos_email",registro.Email);
    setCookie("pagos_mykonos_puntaje",registro.Puntaje);
    setUser(registro.Nombre);
    setToken(registro.idCliente);
    setEmail(registro.Email);
    setPuntaje(registro.Puntaje);
    
    console.log(registro);
    history.push('/userinterface');  
    } catch (error) {
      console.error(error);
    }

  }

    return(
        <Form
      onSubmit={()=>{
        console.log("Holass")
        
      }}
      name="basic"
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={handleFinish}
    >
      <Form.Item className="grid grid-cols-1 px-5 justify-items-start font-bold w-full"
        label="Email"
        name="email"
        rules={[{type:'email',required: true, message: 'Por favor, Ingresa tu correo' }]}
      >
        <Input  className="bg-transparent border-t-0 border-r-0 border-l-0 font-bold hover:bg-transparent hover:border-yellow-400 hover:border-t-0 hover:border-r-0 hover:border-l-0"/>
      </Form.Item>

      <Form.Item className="grid grid-cols-1 px-5 font-bold justify-items-start w-full"
        label="Contraseña"
        name="password"
        rules={[{ required: true, message: 'Por favor, Ingresa una contraseña' }]}
      >
        <Input.Password className="bg-transparent border-t-0 border-r-0 border-l-0 font-bold hover:bg-transparent hover:border-yellow-400 hover:border-t-0 hover:border-r-0 hover:border-l-0"/>
      </Form.Item>

      <div className="text-right font-bold">
          <span>¿Olvidaste la contraseña?</span>
      </div>


      <Form.Item className="px-5 pt-10"
      wrapperCol={{span: 24 }}>
        <Button type="primary" htmlType="submit" className="btn-difficulty btn-goal Btn">
        <a >Iniciar Sesión   </a>
          
        </Button>
      </Form.Item>

      <div className="text-center font-bold">
          <label>¿No tienes una cuenta?</label> <span className="text-yellow-300">Registrarse</span>
      </div>
    </Form>
    );
}

export{FormLogin};