import React from 'react'
import usePrueba from '../hooks/usePrueba'
function Botones() {
    
    const {handleChangeOrden} = usePrueba();

  return (
    <div className='mt-10 flex gap-5'>
        <button type='button' className='p-2 bg-indigo-900 text-white hover:bg-indigo-600 hover:curspr-pointer block'
            onClick={() => handleChangeOrden('-') }
        >
            Orden Ascendente
            </button>
        <button type='button' className='p-2 bg-indigo-900 text-white hover:bg-indigo-600 hover:curspr-pointer block'
            onClick={() => handleChangeOrden('+') }
        >
            Orden Descendente
        </button>
    </div>
  )
}

export default Botones