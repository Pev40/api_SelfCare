import { CollapseRecetas } from '../recipes/components/collapse';
import { Rate } from 'antd';
import desayuno1 from './assets/img/desayuno1.JPG'
import { useCallback, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie';
import { post, get } from '../../servicies/api/api.service'
function PageRecetas() {
    const cookies = new Cookies();
    let cookName = cookies.get('idDeLaRececta')
    const history = useHistory()
    const [Recetas, setRecetas] = useState([])
    const handleFinish = useCallback(async () => {
      const recetasDb = await post({
        url: "/recetas/especifico",
        data: {"idReceta": Number(cookName)}
      })
      setRecetas(recetasDb)
      console.log('Consulta BBDD', recetasDb)
      return recetasDb
    }, [])
  
    useEffect(() => {
      if (Recetas.length === 0) {
        handleFinish()
      }
    }, [handleFinish, Recetas.length])
  
    let randon = Math.random() * (5-1) + 1;

  return (
    <div className="flex flex-col h-screen">
        <img src={desayuno1}/>
        {Recetas.map((objeto)=>{
            return (
            <div className="bg-secundary flex-grow pt-3 px-4">
            <div>
                <div className="grid grid-cols-2">
                    <h3 className="font-bold">{objeto.NombreReceta}</h3>
                    <p className="flex justify-end">♥</p>
                </div>
                <div>
                    <p>{objeto.NivelCalorico} kcal</p>
                </div>
            </div>
            
            <div className="grid grid-cols-3 gap-4 p-6 text-center">
                <div>
                    <p>{objeto.Proteinas} g</p>
                    <h4 className="font-bold">Proteínas</h4>
                </div>

                <div>
                    <p>{objeto.Carboidratos} g</p>
                    <h4 className="font-bold">Carbs</h4>
                </div>

                <div>
                    <p>{objeto.Grasas} g</p>
                    <h4 className="font-bold">Grasas</h4>
                </div>
            </div>
            <hr/>
            <div className="grid grid-cols-3 pb-2 pt-4 text-center">
                <div>
                    <p>Ingredientes</p>
                    <p className="font-bold">{objeto.Grasas}</p> 
                </div>
                <div>
                    <p>Dificultad</p>
                    <p className="font-bold">{objeto.Dificultad}</p>
                </div>
                <div>
                    <p>Tiempo</p>
                    <p className="font-bold">{objeto.TiempoDePreparacion} '</p>
                </div>
            </div>
            <div className="flex justify-center gap-x-40 pb-5">
                <div className=" bg-primary rounded-full h-10 w-10"></div>
                <div className=" bg-primary rounded-full h-10 w-10"></div>
                <div className=" bg-primary rounded-full h-10 w-10"></div>
            </div>
            <hr/>
            <div>
                <CollapseRecetas 
                title="Ingredientes"
                description={objeto.Ingredientes}/>

            </div>
            <hr />
            <div>
                <CollapseRecetas
                title="Preparación"
                description={objeto.Preparacion}/>
                
            </div>
            <hr/>
            <div className="flex justify-between items-center  pt-2 pb-5">
                <h3 className="font-bold">Valorar</h3>
                <Rate allowHalf defaultValue={randon}/>
            </div>
     
        
        </div>)
        })}

    </div>
  );
}

export { PageRecetas }; 
