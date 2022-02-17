import { CollapseRecetas } from '../recetas/components/collapse';
import { Rate } from 'antd';
import desayuno3 from './assets/img/desayuno3.JPG';

function PageRecetas() {
  return (
    <div className="flex flex-col h-screen">
        <img src={desayuno3}/>

        <div className="bg-secundary flex-grow pt-3 px-4">
            <div>
                <div className="grid grid-cols-2">
                    <h3 className="font-bold">Avena “tarta de queso de arándanos”</h3>
                    <p className="flex justify-end">♥</p>
                </div>
                <div>
                    <p>282 kcal</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
                <div>
                    <p>10g</p>
                    <h4 className="font-bold">Proteínas</h4>
                </div>

                <div>
                    <p>47g</p>
                    <h4 className="font-bold">Carbs</h4>
                </div>

                <div>
                    <p>3g</p>
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
                    <p className="font-bold">8'</p>
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
                description="1/2 tazas de avena 
                1 taza de agua
                2-3 cdas de yogur natural griego (bajo en grasas)
                200g de arándanos
                una pizca de canela
                una pizca de estevia (o 1-2 cdas de miel)"/>

            </div>
            <hr />
            <div>
                <CollapseRecetas
                title="Preparación"
                description="Hierve el agua en una olla.
                Añade la avena al agua y cocina la avena hasta que esté suave. Una vez que la avena esté suave y cremosa y haya absorbido el agua, remueve del fuego y mezcla el endulzante, canela, yogur griego y los arándanos.
                La avena puede servirse fría o caliente."/>
                
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

