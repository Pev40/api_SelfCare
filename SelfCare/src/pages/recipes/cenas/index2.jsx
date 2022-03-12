import { CollapseRecetas } from '../recetas/components/collapse';
import { Rate } from 'antd';
import cena2 from './assets/img/cena2.JPG';

function PageRecetas() {
  return (
    <div className="flex flex-col h-screen">
        <img src={cena2}/>

        <div className="bg-secundary flex-grow pt-3 px-4">
            <div>
                <div className="grid grid-cols-2">
                    <h3 className="font-bold">Bolitas de atún horneadas</h3>
                    <p className="flex justify-end">♥</p>
                </div>
                <div>
                    <p>350 kcal</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
                <div>
                    <p>57g</p>
                    <h4 className="font-bold">Proteínas</h4>
                </div>

                <div>
                    <p>12g</p>
                    <h4 className="font-bold">Carbs</h4>
                </div>

                <div>
                    <p>7g</p>
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
                description="250g de atún en agua
                            20g de avena
                            1 huevo
                            Sal marina
                            Pimienta negra molida
                            Ajo en polvo"
                />

            </div>
            <hr />
            <div>
                <CollapseRecetas
                title="Preparación"
                description="Moler o procesar avena hasta que esté fina.
                            En un recipiente, mezclar la avena con atún colado, huevo y especias al gusto.
                            Formar bolitas de la masa y colocarlas en una bandeja forrada con papel para hornear.
                            Hornear a 180° C (350° F) por 20 minutos.
                            Servir las bolitas calientes – de preferencia con yogur o salsa de eneldo o tomate."
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

