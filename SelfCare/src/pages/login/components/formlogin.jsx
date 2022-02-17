import { Form, Input, Button} from 'antd';
import "./formlogin.css"
function FormLogin(){
    return(
        <Form
      name="basic"
      initialValues={{ remember: true }}
      autoComplete="off"
    >
      <Form.Item className="grid grid-cols-1 px-5 justify-items-start font-bold w-full"
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Por favor, Ingresa tu correo' }]}
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
        <a href="../../userinterface">Iniciar Sesión   </a>
          
        </Button>
      </Form.Item>

      <div className="text-center font-bold">
          <label>¿No tienes una cuenta?</label> <span className="text-yellow-300">Registrarse</span>
      </div>
    </Form>
    );
}

export{FormLogin};