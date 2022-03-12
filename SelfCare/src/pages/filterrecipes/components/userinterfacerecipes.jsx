import React from 'react'
import { Card } from 'antd'
import { post, get } from '../../../servicies/api/api.service'
import { useCallback, useEffect, useState } from 'react'
import { useCookies } from 'react-cookie'
import { useHistory } from 'react-router-dom'
function InterfaceRecipes(props) {
  const { ptitle = '', linkfiltro = '', tipo = '' } = props
  const [Recetas, setRecetas] = useState([])
  const [cookies, setCookie, removeCookie] = useCookies(['idDeLaRececta'])
  const [idDeLaRececta, setidDeLaRececta] = useState(
    cookies['idDeLaRececta'] || 1,
  )
  const history = useHistory()
  const handleFinish = useCallback(async () => {
    const recetasDb = await get({
      url: `/recetas/`,
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

  const guardarCookie = (cook) => {
    //let cook = document.getElementById(`boton${objeto.idRecetas}`);
    setidDeLaRececta(cook)
    //setCookie("idDeLaRececta",cookk);
    console.log("Estoy aqui",cook)
    history.push('/recipes')
    return
  }

  return (
    <Card title={ptitle} className="font-bold">
      {Recetas.map((objeto) => {
        if (objeto.Comida === tipo) {
          let numero_busqueda = `../filterrecipes/`
          return (
            <Card
              type="inner"
              title={objeto.NombreReceta}
              // eslint-disable-next-line no-undef
              extra={<button id={`boton${objeto.idRecetas}`} value={objeto.idRecetas} onClick={()=>{
                setidDeLaRececta(objeto.idRecetas)
                setCookie("idDeLaRececta",objeto.idRecetas);
                console.log("Estoy aqui",objeto.idRecetas)
                history.push('/recipes')
                return
              }} >Ver receta</button>}
              hoverable="false"
            >
              <p>
                <b>NIVEL DE DIFICULTAD: </b>
                {objeto.Dificultad}
              </p>
              <p>
                <b>NIVEL CALORICO: </b>
                {objeto.NivelCalorico}
              </p>
            </Card>
          )
        }
      })}
    </Card>
  )
}
export { InterfaceRecipes }
