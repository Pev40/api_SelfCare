import { Form, Input, Button} from 'antd';






function FormRegister(){
    return(
      <Form className="py-10"
      name="basic "
      labelCol={{span: 9}}
      initialValues={{ remember: true }}
      autoComplete="off"
      method='POST'
      
      >
      <Form.Item className="grid grid-cols-1 px-5 justify-items-start"
        label="Nombre"
        name="username"
        rules={[{ required: true, message: 'Por favor, Ingresa tu nombre' }]}
      >
        <Input placeholder="Ingresa tu nombre" className="bg-transparent border-t-0 border-r-0 border-l-0 font-bold hover:bg-transparent hover:border-yellow-400 hover:border-t-0 hover:border-r-0 hover:border-l-0"/>
      </Form.Item>

      <Form.Item className="grid grid-cols-1 px-5 justify-items-start"
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Por favor, Ingresa un correo' }]}
      >
        <Input  placeholder="email@email.com" className="bg-transparent border-t-0 border-r-0 border-l-0 font-bold hover:bg-transparent hover:border-yellow-400 hover:border-t-0 hover:border-r-0 hover:border-l-0"/>
      </Form.Item>

      <Form.Item className="grid grid-cols-1 px-5 justify-items-start"
        label="Contraseña"
        name="password"
        rules={[{ required: true, message: 'Por favor, Ingresa una contraseña' }]}
      >
        <Input.Password placeholder="Ingrese una contraseña" className="bg-transparent border-t-0 border-r-0 border-l-0 font-bold hover:bg-transparent hover:border-yellow-400 hover:border-t-0 hover:border-r-0 hover:border-l-0"/>
      </Form.Item>

      <Form.Item className="px-5 pt-10" wrapperCol={{span: 24 }}>
        <Button type="primary" htmlType="submit" className="btn-difficulty btn-goal Btn">
        <a href="../../userdata" >Registrarse </a>
        </Button>
      </Form.Item>

      <div className="text-center font-bold">
          <label className="pr-2">¿Tienes una cuenta?</label>
          <span className="text-yellow-300">Iniciar Sesión</span>
      </div>
    </Form>
    );
}

export {FormRegister};