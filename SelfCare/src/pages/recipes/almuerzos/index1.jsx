import { CollapseRecetas } from '../recetas/components/collapse';
import { Rate } from 'antd';
import almuerzo1 from './assets/img/almuerzo1.JPG'

function PageRecetas() {
  return (
    <div className="flex flex-col h-screen">
        <img src={almuerzo1}/>

        <div className="bg-secundary flex-grow pt-3 px-4">
            <div class="receta">
                <div className="grid grid-cols-2">
                    <h3 className="font-bold">Rollos de carne con ciruelas deshidratadas</h3>
                    <p className="flex justify-end">♥</p>
                </div>
                <div>
                    <p>315 kcal</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
                <div>
                    <p>35g</p>
                    <h4 className="font-bold">Proteínas</h4>
                </div>

                <div>
                    <p>12g</p>
                    <h4 className="font-bold">Carbs</h4>
                </div>

                <div>
                    <p>13g</p>
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
                description="2 bistecs de res
                4 a 6 ciruelas deshidratadas
                2 rebanadas de jamón
                1 cucharada de aceite de oliva
                Cebolla
                Sal marina
                Pimienta negra
                Para la salsa:
                1 cucharada de harina de garbanzo
                5 cucharadas de leche
                Pimienta negra"/>
            </div>
            <hr />
            <div>
                <CollapseRecetas
                title="Preparación"
                description="Utilizar un mazo para carnes para ablandar los bistecs de res.
                            Agregar pimienta y sal al gusto.
                            En cada bistec, colocar una rebanada de jamón y unas ciruelas deshidratadas y enrollar.
                            Sostener el rollo con un palillo.
                            Mientras tanto, en una olla de vapor o sartén para freír, sofreír levemente la cebolla picada en el aceite de oliva.
                            Agregar los rollos y agua.
                            Cocer los rollos sobre fuego bajo por aproximadamente 30 minutos hasta tiernos.
                            Verificar ocasionalmente el nivel de agua en la olla y agregar más cuando sea necesario.
                            Cuando se hayan cocido los rollos, sacar de la olla.
                            Hacer una salsa con le leche mezclada con la harina de garbanzo y especias.
                            Dejar hervir y cuando esté espesa, verter sobre los rollos antes de servir.
                            Se acompaña con arroz integral y verduras."
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

