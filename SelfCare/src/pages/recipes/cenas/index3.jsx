import { CollapseRecetas } from '../recetas/components/collapse';
import { Rate } from 'antd';
import cena3 from './assets/img/cena3.JPG';

function PageRecetas() {
  return (
    <div className="flex flex-col h-screen">
        <img src={cena3}/>

        <div className="bg-secundary flex-grow pt-3 px-4">
            <div class="receta">
                <div className="grid grid-cols-2">
                    <h3 className="font-bold">Risotto delicioso de pollo con espinacas</h3>
                    <p className="flex justify-end">♥</p>
                </div>
                <div>
                    <p>356 kcal</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
                <div>
                    <p>35g</p>
                    <h4 className="font-bold">Proteínas</h4>
                </div>

                <div>
                    <p>24g</p>
                    <h4 className="font-bold">Carbs</h4>
                </div>

                <div>
                    <p>11g</p>
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
                    <p className="font-bold">Difícil</p>
                </div>
                <div>
                    <p>Tiempo</p>
                    <p className="font-bold">60'</p>
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
                description="500g de pechugas de pollo
                            2 tazas de arroz integral
                            200g de espinacas frescas
                            3 cucharadas de mantequilla
                            1 cebolla
                            4 tazas de agua
                            1 taza de leche
                            2 cucharaditas de sal marina
                            ⅓ cucharadita de pimienta negra molida
                            ½ cucharadita de ajo en polvo
                            Una pizca de cilantro
                            Elote en grano (opcional)
                            Champiñones (opcional)"
                />

            </div>
            <hr />
            <div>
                <CollapseRecetas
                title="Preparación"
                description="Se puede preparar el risotto en una sartén honda (wok) o en una olla de teflón.
                            Derretir 3 cucharadas de mantequilla en una olla.
                            Sofreír cebolla picada finamente en mantequilla derretida hasta que esté dorada. Incorporar el pollo picado.
                            Agregar 1 taza de agua y cocer durante aproximadamente 10 minutos.
                            Incorporar las espinacas lavadas y menear hasta que estén tiernas.
                            Se puede agregar elote y champiñones picados.
                            Añadir el arroz junto con 3 tazas de agua y 1 taza de leche en una olla.
                            Sazonar con sal y especias, menear y cocinar hasta que toda el agua se consuma.
                            Si es necesario, agregar más agua. Al final, el arroz debe estar suave y un poco pegajoso."
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

