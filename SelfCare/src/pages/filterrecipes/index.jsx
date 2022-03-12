import { BottomMenu } from "../../components/bottom-menu";
import { InterfaceRecipes } from "./components/userinterfacerecipes"; 
import { Button, Tooltip } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { useCookies } from "react-cookie";
import { useCallback, useEffect, useState } from 'react'
function RecetasFiltro ()  {
    const [cookies, setCookie, removeCookie] = useCookies([
        "busqueda_filtros",
        "idDeLaRececta",
      ]);
    const [busqueda_filtros, setBusqueda_Filtros] = useState(cookies["busqueda_filtros"] || "/recetas/");
    const [idDeLaRececta, setidDeLaRececta] = useState(cookies["idDeLaRececta"] || 1);

    
    return (

        <div className="flex flex-col h-screen">
        
        <div className="overflow-y-auto rounded-t-xl bg-primary h-full pt-10 px-5">
        <div className="mb-10 text-center ">

        </div>
            <div className="mb-10">
                
            <InterfaceRecipes
                ptitle="Desayunos"
                linkfiltro = {busqueda_filtros}
                tipo="Desayuno"
            />
            </div>
            
            <div className="mb-10">
                
            <InterfaceRecipes
                ptitle="Almuerzos"
                linkfiltro = {busqueda_filtros}
                tipo="Almuerzo"
            />
            </div>
            
            <div className="mb-10 border-4 border-color-black">
                
                <InterfaceRecipes 
                     ptitle="Cenas"
                     linkfiltro = {busqueda_filtros}
                     tipo="Cena"
                 />
            </div>
        </div>
        <BottomMenu/>
    
      </div>
    );
  };
  
  export { RecetasFiltro };