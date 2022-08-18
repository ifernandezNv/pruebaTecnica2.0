import {useContext} from 'react'
import PruebaContext from '../context/PruebaProvider'
function usePrueba() {
  return useContext(PruebaContext);
}

export default usePrueba