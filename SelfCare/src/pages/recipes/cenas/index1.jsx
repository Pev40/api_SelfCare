import { CollapseRecetas } from '../recetas/components/collapse';
import { Rate } from 'antd';
import cena1 from './assets/img/cena1.JPG';

function PageRecetas() {
  return (
    <div className="flex flex-col h-screen">
        <img src={cena1}/>

        <div className="bg-secundary flex-grow pt-3 px-4">
            <div class="receta">
                <div className="grid grid-cols-2">
                    <h3 className="font-bold">Pollo al Curry con Manzanas</h3>
                    <p className="flex justify-end">♥</p>
                </div>
                <div>
                    <p>282 kcal</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
                <div>
                    <p>32g</p>
                    <h4 className="font-bold">Proteínas</h4>
                </div>

                <div>
                    <p>17g</p>
                    <h4 className="font-bold">Carbs</h4>
                </div>

                <div>
                    <p>9g</p>
                    <h4 className="font-bold">Grasas</h4>
                </div>
            </div>
            <hr/>
            <div className="grid grid-cols-3 pb-2 pt-4 text-center">
                <div>
                    <p>Ingredientes</p>
                    <p className="font-bold">8</p> 
                </div>
                <div>
                    <p>Dificultad</p>
                    <p className="font-bold">Intermedio</p>
                </div>
                <div>
                    <p>Tiempo</p>
                    <p className="font-bold">30'</p>
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
                description="300 g de Muslos de pollo (sin piel ni huesos)
                            1 manzana grande
                            1 cebolla
                            1 taza de agua
                            2 cdas. de mostaza
                            1 cdta. de aceite de coco 
                            2 cdtas. de curry en polvo
                            2 cdtas. de salsa de soja"
                />

            </div>
            <hr />
            <div>
                <CollapseRecetas
                title="Preparación"
                description="En una sartén grande, derrite una cucharadita de aceite de coco; añade la cebolla finamente picada y saltea hasta que esté transparente.
                            Añade el pollo previamente cortado en cubos, la manzana en cubos pequeños, la salsa de soja, el curry en polvo, 2 cucharadas de mostaza y vierte una taza de agua.
                            Cubre el sartén y deja que el pollo hierva a fuego lento por 25 minutos, revolviendo ocasionalmente.
                            En caso de que el pollo comience a quemarse, agrega un poco más de agua y revuelve más seguido.
                            Puedes espesar y suavizar la salsa añadiendo un poco de yogurt griego después de que esté bien cocida.
                            El pollo al curry es servido idealmente con arroz o cuscús."
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

