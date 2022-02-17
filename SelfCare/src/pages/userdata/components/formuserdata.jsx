import { Form,Button, InputNumber, Select, DatePicker } from 'antd';
import "./formuserdata.css";
import "../../../App.css"
function FormUserData(){
    const { Option } = Select;


return(

    <Form
    className="form"
    name="formuserdata"
    wrapperCol={{ span: 12 }}
    initialValues={{remember: true,}}
    autoComplete="off"
    >

  <Form.Item  className="flex justify-between px-5"
    label="Peso Actual"
    name="peso"
    rules={[
      {
        required: true,
        message: 'Por favor, ingresa tu peso actual',
      },
    ]}
 >
    <InputNumber min={30} max={300} defaultValue={30} addonAfter="kg" className="rounded-xl border-white hover:border-yellow-300"/>

  </Form.Item>
 

 
  <Form.Item  className="flex justify-between px-5"
    label="Talla"
    name="talla"
    rules={[
      {
        required: true,
        message: 'Por favor, ingresa tu talla actual',
      },
    ]}
 >
    <InputNumber min={80} max={220} defaultValue={80} addonAfter="cm" className="rounded-xl border-white hover:border-yellow-300"/>

  </Form.Item>

  <Form.Item  className="flex justify-between px-5 input-sex"
    label="Sexo"
    name="sexo"
    rules={[
      {
        required: true,
        message: 'Elige un sexo para continuar',
      },
    ]}
 >
     
    <Select defaultValue=""> 
      <Option value="masculino">Masculino</Option>
      <Option value="femenino">Femenino</Option>
      <Option value="otro">Otro</Option>
    </Select>
    
  </Form.Item>
  
  <Form.Item  className="flex justify-between px-5"
    label="Fecha de Nac."
    name="fechnac"
    rules={[
      {
        required: true,
        message: 'Selecciona tu fecha de nacimiento',
      },
    ]}  
 >
    <DatePicker placeholder="aaaa-mm-dd" className="rounded-xl border-white hover:border-yellow-300"/>
   
</Form.Item>

  
  <Form.Item className="px-5 pt-10"
    wrapperCol={{
      span: 24,
    }}
  >
    <Button type="primary" htmlType="submit" className="btn-difficulty btn-goal Btn">
     <a href="../../userinterface">Siguiente</a>
    </Button>
  </Form.Item>
</Form>

);
}
export{FormUserData};