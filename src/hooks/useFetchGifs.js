import { useState, useEffect } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    const [state, setstate] = useState({
        data: [],
        loading: true
    });

 
    useEffect(()=>{
        //Se ejecuta cuando el componente es renderizado por primera vez, no vuelve a ejecturse con cualquier 
        //cambio en react
        getGifs(category)
            .then(imgs => {
                setTimeout(() => {
                    setstate({
                        data: imgs,
                        loading: false
                    });
                }, 3000);
               
            }); 
        
    }, [category]); //Si la categoria cambia se dispara el useeffect

    return state; // {data : [], loading: true }
}