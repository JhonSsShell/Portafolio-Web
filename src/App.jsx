import { useState } from 'react';
import { Home, Skils } from './components/body/Body';
import Header from './components/header/Header';
import Peticion from './components/ajax/Github';

function App() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <main className='font-ubuntu h-screen'>
      <Header isMenuOpen={isMenuOpen} setMenuOpen={setMenuOpen}>
        <li>
          <a 
            href="#home" 
            className="btn btn-ghost btn-sm"
            onClick={() => setMenuOpen(false)}
          >
            Inicio
          </a>
        </li>
        <li>
          <a 
            href="#skils" 
            className="btn btn-ghost btn-sm"
            onClick={() => setMenuOpen(false)}
          >
            Tecnologias
          </a>
        </li>
        <li>
          <a 
            href="#projects " 
            className="btn btn-ghost btn-sm"
            onClick={() => setMenuOpen(false)}
          >
            Proyectos
          </a>
        </li>
        <li>
          <a 
            href="#" 
            className="btn btn-ghost btn-sm"
            onClick={() => setMenuOpen(false)}
          >
            Contacto
          </a>
        </li>
      </Header>
      <Home />
      <Skils />
      <Peticion />
    </main>
  );
}

export default App;
