import { CollapseRecetas } from '../recetas/components/collapse';
import { Rate } from 'antd';
import desayuno5 from './assets/img/desayuno5.JPG';

function PageRecetas() {
  return (
    <div className="flex flex-col h-screen">
        <img src={desayuno5}/>
        <div className="bg-secundary flex-grow pt-3 px-4">
            <div class="receta">
                <div className="grid grid-cols-2">
                    <h3 className="font-bold">Enrollado de lechuga</h3>
                    <p className="flex justify-end">♥</p>
                </div>
                <div>
                    <p>266 kcal</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
                <div>
                    <p>20g</p>
                    <h4 className="font-bold">Proteínas</h4>
                </div>

                <div>
                    <p>5g</p>
                    <h4 className="font-bold">Carbs</h4>
                </div>

                <div>
                    <p>18g</p>
                    <h4 className="font-bold">Grasas</h4>
                </div>
            </div>
            <hr/>
            <div className="grid grid-cols-3 pb-2 pt-4 text-center">
                <div>
                    <p>Ingredientes</p>
                    <p className="font-bold">6</p> 
                </div>
                <div>
                    <p>Dificultad</p>
                    <p className="font-bold">fácil</p>
                </div>
                <div>
                    <p>Tiempo</p>
                    <p className="font-bold">5'</p>
                </div>
            </div>
            <div className="flex justify-center gap-x-14 pb-5">
                <div className=" bg-primary rounded-full h-10 w-10"></div>
                <div className=" bg-primary rounded-full h-10 w-10"></div>
                <div className=" bg-primary rounded-full h-10 w-10"></div>
            </div>
            <hr/>
            <div>
                <CollapseRecetas
                title="Ingredientes"
                description="2 hojas grandes de lechuga
                            50g de jamón de alta calidad
                            30g de queso en rebanadas (por ejemplo, queso suizo)
                            1/4 de aguacate
                            1/2 de tomate
                            una pizca de pimienta negra molida"/>

            </div>
            <hr />
            <div>
                <CollapseRecetas
                title="Preparación"
                description="Lava las hojas de lechuga con agua y déjalas secar.
                            Limpia el aguacate y tritúralo con un tenedor.
                            Mezcla el aguacate triturado con una pizca de pimienta negra molida y extiéndelo sobre una de las hojas de lechuga.
                            Coloca la hoja de lechuga con aguacate sobre una segunda hoja lavada de lechuga para que se peguen.
                            Coloca rodajas de jamón y queso sobre las hojas de lechuga y añade una rebanada de tomate finamente picada encima.
                            Con cuidado enrolla las hojas de lechuga con el relleno lo más apretado posible. Puedes cortar el enrollado a la mitad, o asegurarlo con un palillo para que no se abra."
                />
                
            </div>
            <hr/>
            <div className="flex justify-between items-center  pt-2 pb-5">
                <h3 className="font-bold">Review</h3>
                <Rate allowHalf defaultValue={3}/>
            </div>
     
        
        </div>
    </div>
  );
}

export { PageRecetas }; 

