import { CollapseRecetas } from '../recetas/components/collapse';
import { Rate } from 'antd';
import cena5 from './assets/img/cena5.JPG';

function PageRecetas() {
  return (
    <div className="flex flex-col h-screen">
        <img src={cena5}/>

        <div className="bg-secundary flex-grow pt-3 px-4">
            <div class="receta">
                <div className="grid grid-cols-2">
                    <h3 className="font-bold">Frittata de tomate baja en carbohidratos</h3>
                    <p className="flex justify-end">♥</p>
                </div>
                <div>
                    <p>230 kcal</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
                <div>
                    <p>17g</p>
                    <h4 className="font-bold">Proteínas</h4>
                </div>

                <div>
                    <p>6g</p>
                    <h4 className="font-bold">Carbs</h4>
                </div>

                <div>
                    <p>15g</p>
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
                description="4 huevos grandes
                            2 cdas de leche
                            2 cdas de puré de tomate
                            3 cdas de queso parmesano rallado
                            250g de tomates cherry
                            1 cdta de aceite de oliva
                            pimienta negra molida
                            1/2 cdta de sal marina"
                />

            </div>
            <hr />
            <div>
                <CollapseRecetas
                title="Preparación"
                description="En un recipiente, mezcla los huevos, la leche, el puré de tomate, sal marina, pimienta negra molida, y una cucharada de queso parmesano rallado.
                            Calienta aceite de oliva en una olla profunda.
                            Vierte la mezcla de huevos en la olla.
                            Cubre la olla y déjala cocinar a fuego medio por 5 minutos hasta que la mayor parte de la frittata se espese.
                            Agrega sobre la frittata tomates cherry picados, el resto del queso parmesano, y déjalo cocinar tapado por otros 5-7 minutos, verificando ocasionalmente que no se queme."
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

