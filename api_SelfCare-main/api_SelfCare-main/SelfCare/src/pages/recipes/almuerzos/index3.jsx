import { CollapseRecetas } from '../recetas/components/collapse';
import { Rate } from 'antd';
import almuerzo3 from './assets/img/almuerzo3.JPG'

function PageRecetas() {
  return (
    <div className="flex flex-col h-screen">
        <img src={almuerzo3}/>

        <div className="bg-secundary flex-grow pt-3 px-4">
            <div class="receta">
                <div className="grid grid-cols-2">
                    <h3 className="font-bold">Pechugas de pollo Caprese</h3>
                    <p className="flex justify-end">♥</p>
                </div>
                <div>
                    <p>403 kcal</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
                <div>
                    <p>55g</p>
                    <h4 className="font-bold">Proteínas</h4>
                </div>

                <div>
                    <p>3g</p>
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
                    <p className="font-bold">9</p> 
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
                description="800g (4 piezas pequeñas) de pechugas de pollo
                            200g de mozarella fresca
                            un puñado de albahaca fresca
                            2 tomates
                            pimienta negra molida (al gusto)
                            sal (al gusto)
                            ajo en polvo (al gusto)
                            vinagre balsámico (opcional)
                            1-2 cdas de aceite de oliva"
                />

            </div>
            <hr />
            <div>
                <CollapseRecetas
                title="Preparación"
                description="Corta las pechugas de pollo a lo largo por un lado, el otro lado debe permanecer cerrado para que los otros ingredientes no se salgan.
                            Rocía aceite de oliva en ambos lados de la carne, masajea las especias, sal y pimienta a tu gusto, usando tus manos.
                            Corta los tomates y mozzarella en rodajas finas.
                            Coloca rodajas de mozzarella y tomates en cada pieza de carne. Añade hojas de albahaca también.
                            Coloca las pechugas de pollo rellenas en una bandeja para hornear.
                            Hornea la carne (puede estar cubierta) en un horno precalentado por aproximadamente 20 minutos a 220 grados centígrados hasta que estén cocidas. Después de hornear, déjalas reposar por al menos 5 minutos en un plato tapado.
                            Al final, puedes añadir vinagre balsámico y servirlas con tu guarnición favorita."
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

