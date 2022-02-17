import { Result, Button } from 'antd';
import "./correctanswer.css"

function PageCorrectanswer() {
  return (
    <Result
        className="flex flex-col h-screen bg-secundary"
        status="success"
        title="¡Correcto!"
        subTitle="Has resuelto bien este reto"
        extra={[
        <Button type="primary" key="console">Atrás</Button>,
        <Button key="buy">Siguiente</Button>
        ]}
    />
  );
}
/*
ReactDOM.render(
  <Result
    ]}
  />,
  mountNode,
);
*/

export { PageCorrectanswer }; 