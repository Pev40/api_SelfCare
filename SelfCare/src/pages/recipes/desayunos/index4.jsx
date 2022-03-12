import { CollapseRecetas } from '../recetas/components/collapse';
import { Rate } from 'antd';

function PageRecetas() {
  return (
    <div className="flex flex-col h-screen">
        <img src='https://picsum.photos/415/370.jpg'/>

        <div className="bg-secundary flex-grow pt-3 px-4">
            <div class="receta">
                <div className="grid grid-cols-2">
                    <h3 className="font-bold">Avena rápida sabor a brownie</h3>
                    <p className="flex justify-end">♥</p>
                </div>
                <div>
                    <p>320 kcal</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
                <div>
                    <p>21g</p>
                    <h4 className="font-bold">Proteínas</h4>
                </div>

                <div>
                    <p>44g</p>
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
                    <p className="font-bold">8</p> 
                </div>
                <div>
                    <p>Dificultad</p>
                    <p className="font-bold">fácil</p>
                </div>
                <div>
                    <p>Tiempo</p>
                    <p className="font-bold">5'</p>
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
                description=" Huevo, Almendra,Avena"/>

            </div>
            <hr />
            <div>
                <CollapseRecetas
                title="Preparación"
                description="En un recipiente, triturar la banana con un tenedor y mezclar con los demás ingredientes. Verter la masa en una máquina de waffles precalentada y hornear el waffle durante unos 5 minutos hasta que esté dorado. Si la máquina de waffles no es de teflón, rociar aceite en la máquina. Usando la misma masa, se pueden preparar panqueques. Los waffles se pueden servir con yogur, nieve de banana casera, mousse de proteína, fruta, chocolate oscuro, jarabe de arce o granos descortezados de cacao.
                "/>
                
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

