
import Header from './components/header/Header'
import Body from './components/body/Body.jsx'
import Carrusel from './components/carrusel/Carrusel.jsx'
import Imagenes from './components/imagenes/Imagenes.jsx'
import Barra  from './components/barra/Barra';
import Tarjeta from './components/tarjeta/Tarjeta.jsx'
import Iconos from './components/iconos/Iconos.jsx'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Body />
        <Carrusel />
        <Imagenes />

      </main>
    </>
  )
}

export default App
