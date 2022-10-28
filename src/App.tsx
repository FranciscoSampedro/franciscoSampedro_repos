// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import { Home } from '@components/Home'
import { Navbar } from '@components/Navbar'
import { useAppDispatch } from '@hooks/hooks'
import './App.css'
import { fetchInitialPokemons } from './store/pokemon'

function App() {
  // const [count, setCount] = useState(0)

  const dispatch = useAppDispatch()
  dispatch(fetchInitialPokemons())

  return <>
  
  
 <Navbar/>
 <Home/>
  
  </>
  
}

export default App
