import { CollapseRecetas } from '../recetas/components/collapse';
import { Rate } from 'antd';
import almuerzo2 from './assets/img/almuerzo2.JPG'

function PageRecetas() {
  return (
    <div className="flex flex-col h-screen">
        <img src={almuerzo2}/>

        <div className="bg-secundary flex-grow pt-3 px-4">
            <div class="receta">
                <div className="grid grid-cols-2">
                    <h3 className="font-bold">Tortillas de maíz rellenas</h3>
                    <p className="flex justify-end">♥</p>
                </div>
                <div>
                    <p>468 kcal</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
                <div>
                    <p>13g</p>
                    <h4 className="font-bold">Proteínas</h4>
                </div>

                <div>
                    <p>59g</p>
                    <h4 className="font-bold">Carbs</h4>
                </div>

                <div>
                    <p>16g</p>
                    <h4 className="font-bold">Grasas</h4>
                </div>
            </div>
            <hr/>
            <div className="grid grid-cols-3 pb-2 pt-4 text-center">
                <div>
                    <p>Ingredientes</p>
                    <p className="font-bold">11</p> 
                </div>
                <div>
                    <p>Dificultad</p>
                    <p className="font-bold">Intermedio</p>
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
                description="2 tazas de harina de maíz (masa harina)
                            1 1/2 tazas de agua tibia
                            1/2 cdta de sal marina
                            2 aguacates
                            una pizca de sal marina
                            una pizca de pimienta molida
                            una pizca de ajo en polvo
                            300g de tomates
                            200g de frijoles cocidos
                            80g de maíz dulce
                            un puñado de lechuga"
                />

            </div>
            <hr />
            <div>
                <CollapseRecetas
                title="Preparación"
                description="En un tazón, mezcla la harina de maíz con agua tibia y sal.
                            Forma pequeñas bolas con la masa, luego estíralas entre dos hojas de papel para hornear. Es mejor hacer tortillas más pequeñas, para que no se desarmen durante el horneado.
                            Luego, cuidadosamente coloca las tortillas sobre una bandeja caliente y seca, usando papel para hornear, y cocínalas por ambos lados hasta que estén doradas (aproximadamente 1-2 minutos en cada lado).
                            Coloca las tortillas horneadas entre servilletas de papel para suavizarlas.
                            En un recipiente, mezcla el aguacate maduro con sal y especias. Extiende esta mezcla sobre las tortillas.
                            Sobre la mezcla de aguacate agrega ensalada, frijoles cocidos, tomates finamente picados y maíz.
                            Enrolla o dobla las tortillas y sírvelas mientras aún están calientes."
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

