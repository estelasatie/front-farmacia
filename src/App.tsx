
import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Navbar from './components/navBar/navBar';
import Home from './pages/home/home';
import Footer from './components/footer/footer';
import ListaCategorias from './components/categorias/listaCategorias/listaCategorias'
import FormularioCategoria from './components/categorias/formularioCategoria/formularioCategoria';
import DeletarCategoria from './components/categorias/deletarCategoria/deletarCategoria';
import ListaProdutos from './components/produtos/listaProdutos/listaProdutos';
import DeletarProduto from './components/produtos/deletarProdutos/deletarProdutos';
import FormularioProduto from './components/produtos/formularioProduto/formularioProduto';


function App() {
  
  return (
    <>
      <ToastContainer />
        <BrowserRouter>
        <Navbar />
          <div className='min-h-[80vh]'>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/categorias" element={<ListaCategorias />} />
              <Route path="/cadastroCategoria" element={<FormularioCategoria />} />
              <Route path="/editarCategoria/:id" element={<FormularioCategoria />} />
              <Route path="/deletarCategoria/:id" element={<DeletarCategoria />} />
              <Route path="/produtos" element={<ListaProdutos />} />
              <Route path="/cadastroProduto" element={<FormularioProduto />} />
              <Route path="/editarProduto/:id" element={<FormularioProduto />} />
              <Route path="/deletarProduto/:id" element={<DeletarProduto />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
    </>
  );
}

export default App;
