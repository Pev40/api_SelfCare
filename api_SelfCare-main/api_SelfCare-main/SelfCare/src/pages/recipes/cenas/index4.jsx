import { CollapseRecetas } from '../recetas/components/collapse';
import { Rate } from 'antd';
import cena4 from './assets/img/cena4.JPG';

function PageRecetas() {
  return (
    <div className="flex flex-col h-screen">
        <img src={cena4}/>

        <div className="bg-secundary flex-grow pt-3 px-4">
            <div class="receta">
                <div className="grid grid-cols-2">
                    <h3 className="font-bold">Albóndigas saludables en salsa de tomate</h3>
                    <p className="flex justify-end">♥</p>
                </div>
                <div>
                    <p>570 kcal</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
                <div>
                    <p>36g</p>
                    <h4 className="font-bold">Proteínas</h4>
                </div>

                <div>
                    <p>52g</p>
                    <h4 className="font-bold">Carbs</h4>
                </div>

                <div>
                    <p>21g</p>
                    <h4 className="font-bold">Grasas</h4>
                </div>
            </div>
            <hr/>
            <div className="grid grid-cols-3 pb-2 pt-4 text-center">
                <div>
                    <p>Ingredientes</p>
                    <p className="font-bold">15</p> 
                </div>
                <div>
                    <p>Dificultad</p>
                    <p className="font-bold">Difícil</p>
                </div>
                <div>
                    <p>Tiempo</p>
                    <p className="font-bold">35'</p>
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
                description="500 g de carne de pavo (o ternera) molida
                            3 cdas de cualquier harina
                            1 diente de ajo
                            1 cdta de mostaza
                            sal, pimienta negra molida (al gusto)
                            pizca de comino molido
                            Para la salsa:
                            50g de mozzarella rallada (con bajo contenido en grasas)
                            300ml de puré de tomate
                            1 lata (400g) de tomates pelados y triturados
                            1 cebolla
                            orégano, sal, pimienta negra molida (al gusto)
                            1-2 dientes de ajo
                            250g de arroz
                            1 cda de aceite
                            2 cdtas de vinagre balsámico"
                />

            </div>
            <hr />
            <div>
                <CollapseRecetas
                title="Preparación"
                description="Sazona el arroz al gusto y cocínalo con el doble de cantidad de agua hasta que esté suave. 
                Con la carne molida, harina, ajo triturado, especias y sal, forma una mezcla homogénea y forma pequeñas bolas con ella. 
                Coloca las albóndigas sobre una bandeja con papel para hornear. Hornea por 15 minutos a 190 grados hasta que estén cocidas en el medio. 
                En una olla grande o sartén profunda , cocina las cebollas finamente picadas en aceite caliente. 
                Añade el puré de tomate, los tomates pelados, sal, especias, vinagre balsámico y ajo triturado. 
                Deja que la salsa hierva y luego añade las albóndigas horneadas y añade queso mozzarella rallado. 
                Cubre la sartén y deja que las albóndigas hiervan en la salsa por otros 5 minutos. 
                Sirve las albóndigas con la salsa de tomate y arroz cocido."
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

