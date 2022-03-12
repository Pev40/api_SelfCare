import { CollapseRecetas } from '../recetas/components/collapse';
import { Rate } from 'antd';
import desayuno1 from './assets/img/desayuno1.JPG';

function PageRecetas() {
  return (
    <div className="flex flex-col h-screen">
        <img src={desayuno1}/>

        <div className="bg-secundary flex-grow pt-3 px-4">
            <div>
                <div className="grid grid-cols-2">
                    <h3 className="font-bold">Tostadas saludables con palta, huevos y rábano</h3>
                    <p className="flex justify-end">♥</p>
                </div>
                <div>
                    <p>395 kcal</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
                <div>
                    <p>18g</p>
                    <h4 className="font-bold">Proteínas</h4>
                </div>

                <div>
                    <p>23g</p>
                    <h4 className="font-bold">Carbs</h4>
                </div>

                <div>
                    <p>24g</p>
                    <h4 className="font-bold">Grasas</h4>
                </div>
            </div>
            <hr/>
            <div className="grid grid-cols-3 pb-2 pt-4 text-center">
                <div>
                    <p>Ingredientes</p>
                    <p className="font-bold">7</p> 
                </div>
                <div>
                    <p>Dificultad</p>
                    <p className="font-bold">fácil</p>
                </div>
                <div>
                    <p>Tiempo</p>
                    <p className="font-bold">15'</p>
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
                description="4 tostadas de trigo integral
                1 aguacate maduro
                4 huevos
                200 g de rábanos
                1/2 cdta. de sal
                1 cdta. de ajo en polvo
                1/2 cdta. de pimienta negra molida"/>

            </div>
            <hr />
            <div>
                <CollapseRecetas
                title="Preparación"
                description="Prepara las tostadas con pan integral - ya sea sobre una sartén o en una tostadora.
                Pela el aguacate, retira la semilla y tritúralo en un tazón con un tenedor y pimienta negra molida.
                Calienta una sartén antiadherente. Luego agrega los huevos previamente batidos con sal y ajo en polvo.
                Revuelve los huevos revueltos hasta que estén espesos.
                Lava los rábanos, límpialos y córtalos en trozos delgadas.
                Unta las tostadas calientes con puré de aguacate y cúbrelas con los huevos revueltos y rábanos picados."/>
                
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

