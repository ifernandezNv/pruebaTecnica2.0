import {createContext, useState, useEffect} from 'react';
import axios from 'axios';

const PruebaContext = createContext();

function PruebaProvider({children}) {

    const [datos, setDatos] = useState([]);

    function handleChangeOrden(orden){
        console.log(orden)

        let datosOrdenados = [];

        if(orden === '+'){
            datosOrdenados = datos.sort( (fi, si) => fi.last_name + si.last_name );
            console.log(datosOrdenados);
        }else{
            datosOrdenados = datos.sort( (fi, si) => fi.last_name - si.last_name );
            console.log(datosOrdenados);
        }
        setDatos(datosOrdenados);
        
    }
    useEffect(() => {
        async function obtenerDatos(){
            try {
                const {data} = await axios('https://reqres.in/api/users');
                setDatos(data.data);
            } catch (error) {
                console.log(error);
            }
        }
        obtenerDatos();
    }, [datos])

  return (
    <PruebaContext.Provider
        value={{
            datos, 
            setDatos,
            handleChangeOrden
        }}
    >
        {children}
    </PruebaContext.Provider>
  )
}
export {PruebaProvider}
export default PruebaContext