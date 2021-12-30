
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header'
import Main from './components/layout/Main'
import Footer from './components/layout/Footer'

import Home from './components/pages/Home';
import NovoApontamento from './components/pages/NovoApontamento';
import Concluidos from './components/pages/Concluidos';
import Relatorios from './components/pages/Relatorios';
import Ajuda from './components/pages/Ajuda';


function App() {
  return (
    <BrowserRouter>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/novoapontamento" element={<NovoApontamento />} />
        <Route path="/concluidos" element={<Concluidos />} />
        <Route path="/relatorios" element={<Relatorios />} />
        <Route path="/ajuda" element={<Ajuda />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
