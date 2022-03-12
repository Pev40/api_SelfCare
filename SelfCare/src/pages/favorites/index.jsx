import { BottomMenu } from '../../components/bottom-menu'
import { InterfaceCards } from './components/userinterfacecards'
import { Input } from 'antd'
import { useCallback, useEffect, useState } from 'react'
import { post, get } from '../../servicies/api/api.service'
import data from './prueba.json'

function Favorite() {
  const [Recetas, setRecetas] = useState([])
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

  const onSearch = (value) => console.log(value)
  const { Search } = Input
  let datos = data
  console.log(datos)
  return (
    <div className="flex flex-col h-screen">
      <div className="overflow-y-auto rounded-t-xl bg-primary h-full pt-10 px-5">
        <div className="mb-10 "></div>
        {Recetas.map((objeto) => {
          let numero_busqueda = `../filterrecipes/${objeto.idRecetas}`
          return (
            <InterfaceCards
              img="https://imgmedia.buenazo.pe/640x300/buenazo/original/2021/02/19/602fe3609fca9819a90726f3.jpg"
              titlecard={objeto.NombreReceta}
              linkrecipe={numero_busqueda}
            />
          )
        })}
        
      </div>
      <BottomMenu />
    </div>
  )
}

export { Favorite }
