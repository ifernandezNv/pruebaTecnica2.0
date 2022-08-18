import { useState, useEffect } from 'react'
import {PruebaProvider} from './context/PruebaProvider'
import Listado from './components/Listado';
import Botones from './components/Botones';

function App() {

  return (
    <PruebaProvider>  
      <Botones />
      <Listado/>
    </PruebaProvider>
  )
}

export default App
