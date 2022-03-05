import { Result, Button } from 'antd';

function PageFailanswer() {
  return (
    <Result
        className="flex flex-col h-screen bg-secundary"
        status="error"
        title="Inténtalo de nuevo"
        subTitle="No has resuelto bien este reto."
        extra={[
            <Button type="primary" key="console">Try Again</Button>
        ]}
    />
  )
} export { PageFailanswer }