import {useState, useEffect} from 'react';
import Persona from './Persona';

import usePrueba from '../hooks/usePrueba';

function Listado() {
    
    const {datos} = usePrueba();

  return (
    <div className='m-10'>
        {datos.map( dato => (
            <Persona
                dato={dato}
                key={dato.id}
            />
        ))}
    </div>
  )
}

export default Listado