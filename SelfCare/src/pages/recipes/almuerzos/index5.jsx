import { CollapseRecetas } from '../recetas/components/collapse';
import { Rate } from 'antd';
import almuerzo5 from './assets/img/almuerzo5.JPG';

function PageRecetas() {
  return (
    <div className="flex flex-col h-screen">
        <img src={almuerzo5}/>

        <div className="bg-secundary flex-grow pt-3 px-4">
            <div class="receta">
                <div className="grid grid-cols-2">
                    <h3 className="font-bold">Pechugas de Pollo y "Arroz" de Coliflor</h3>
                    <p className="flex justify-end">♥</p>
                </div>
                <div>
                    <p>310 kcal</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
                <div>
                    <p>45g</p>
                    <h4 className="font-bold">Proteínas</h4>
                </div>

                <div>
                    <p>12g</p>
                    <h4 className="font-bold">Carbs</h4>
                </div>

                <div>
                    <p>6g</p>
                    <h4 className="font-bold">Grasas</h4>
                </div>
            </div>
            <hr/>
            <div className="grid grid-cols-3 pb-2 pt-4 text-center">
                <div>
                    <p>Ingredientes</p>
                    <p className="font-bold">14</p> 
                </div>
                <div>
                    <p>Dificultad</p>
                    <p className="font-bold">Intermedio</p>
                </div>
                <div>
                    <p>Tiempo</p>
                    <p className="font-bold">40'</p>
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
                description="700 g de pechugas de pollo
                            1 cebolla
                            1 cda. de aceite de coco
                            200 g de zanahoria
                            2 cdas. de jugo de limón
                            1 cda. de ajo en polvo
                            1 cdta. de paprika dulce
                            1 cdta. de sal
                            una pizca de cúrcuma
                            1 coliflor grande
                            2 cdas. de agua
                            1 cdta. de sal marina
                            1/2 cdta. de pimienta negra molida
                            albahaca"
                />

            </div>
            <hr />
            <div>
                <CollapseRecetas
                title="Preparación"
                description="En una olla grande, calienta el aceite y saltea la cebolla finamente picada hasta que esté transparente.
                Luego, agrega las pechugas de pollo cortadas en cubitos.
                Mezcla bien, agrega un poco de agua, cubre la olla y guisa durante 20 minutos, revolviendo ocasionalmente.
                Finalmente, agrega las especias, la sal, el jugo de limón y la zanahoria rallada.
                Cocina todo junto por otros 5 minutos y luego apaga el fuego.
                Mientras tanto, corta la coliflor en floretes y procésala hasta convertirla en “arroz”. Si lo deseas, puedes cortar la coliflor en trozos pequeños con un cuchillo, pero obtendrás un resultado más fino con un procesador de alimentos.
                Coloca la coliflor picada en una sartén profunda, agrega 2 cucharadas de agua, sazona con sal y especias, y cocina por 10 minutos, revolviendo ocasionalmente hasta que comience a tomar un color dorado.
                Finalmente, retira el “arroz” de coliflor del fuego y sírvelo junto con el pollo."
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

