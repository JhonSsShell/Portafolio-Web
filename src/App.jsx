import { Home, Skils } from './components/body/Body'
import Header from './components/header/Header'

function App() {
  return(
    <main className='font-ubuntu h-screen'>
      <Header>
        <ul className="flex w-full justify-between items-center">
          <li><a href="#home" className="hover:bg-blue-300 p-2 transition-all duration-100 rounded-lg">Inicio</a></li>
          <li><a href="#skils" className="hover:bg-blue-300 p-2 transition-all duration-100 rounded-lg">Tecnologias</a></li>
          <li><a href="" className="hover:bg-blue-300 p-2 transition-all duration-100 rounded-lg">Proyectos</a></li>
          <li><a href="" className="hover:bg-blue-300 p-2 transition-all duration-100 rounded-lg">Contacto</a></li>
        </ul>
      </Header>
      <Home />
      <Skils />
    </main>
  )
}

export default App
