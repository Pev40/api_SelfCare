import { CollapseRecetas } from '../recetas/components/collapse';
import { Rate } from 'antd';
import almuerzo4 from './assets/img/almuerzo4.JPG'

function PageRecetas() {
  return (
    <div className="flex flex-col h-screen">
        <img src={almuerzo4}/>

        <div className="bg-secundary flex-grow pt-3 px-4">
            <div class="receta">
                <div className="grid grid-cols-2">
                    <h3 className="font-bold">Arroz Fit con Atún y Maíz</h3>
                    <p className="flex justify-end">♥</p>
                </div>
                <div>
                    <p>308 kcal</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
                <div>
                    <p>20g</p>
                    <h4 className="font-bold">Proteínas</h4>
                </div>

                <div>
                    <p>44g</p>
                    <h4 className="font-bold">Carbs</h4>
                </div>

                <div>
                    <p>5g</p>
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
                    <p className="font-bold">Intermedio</p>
                </div>
                <div>
                    <p>Tiempo</p>
                    <p className="font-bold">25'</p>
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
                description="100 g de arroz integral
                            150 g de atún en aceite de oliva
                            100 g de maíz
                            Sal marina, pimienta negra molida, albahaca (al gusto).
                            1/2 cebolla
                            1 cdta. de aceite de coco"
                />

            </div>
            <hr />
            <div>
                <CollapseRecetas
                title="Preparación"
                description="En una olla pequeña, calienta el aceite de coco, agrega la cebolla finamente picada y saltéala.
                            Agrega el arroz integral, vierte el doble de cantidad de agua, sazona con sal y pimienta y déjalo hervir a fuego lento hasta que el arroz absorba toda el agua.
                            Finalmente, combina el arroz cocido con el maíz y el atún en aceite de oliva y sirve caliente."
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

