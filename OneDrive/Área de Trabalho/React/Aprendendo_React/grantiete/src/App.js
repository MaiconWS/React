import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Home from './pages/home';
import Projeto from './pages/projetos';
import Publicacoes from './pages/publicacoes';
import Conheca from './pages/conheca';
import Contato from './pages/contato';
import Adm from './pages/cursos/adm';
import Arquitetura from './pages/cursos/arquitetura_urbanismo';
import Ciencia from './pages/cursos/ciencia_contabeis';
import Educacao from './pages/cursos/educacoes_fisica';
import Enfermagem from './pages/cursos/enfermagem';
import Civil from './pages/cursos/eng_civil';
import Computacao from './pages/cursos/eng_comp';
import Mecanica from './pages/cursos/eng_mecanica';
import Producao from './pages/cursos/eng_prod';
import Farmacia from './pages/cursos/farmacia';
import Nutricao from './pages/cursos/nutricao';
import Pedagogia from './pages/cursos/pedagogia';
import Psicologia from './pages/cursos/psicologia';




export default function App() {
  return (
    <div className="App">
      <header>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="/home">
              <img
                alt=""
                src="/img/logo-dark.png"
                width="100"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <NavDropdown title="Nossos cursos" id="basic-nav-dropdown" >
                  <Row>
                    <Col>
                      <NavDropdown.Item href="/pages/cursos/adm">Administração</NavDropdown.Item>
                      <NavDropdown.Item href="/pages/cursos/arquitetura_urbanismo">Arquitetura & Urbanismo</NavDropdown.Item>
                      <NavDropdown.Item href="/pages/cursos/ciencia_contabeis">Ciências Contabeis</NavDropdown.Item>
                      <NavDropdown.Item href="/pages/cursos/educacoes_fisica">Educação Física</NavDropdown.Item>
                      <NavDropdown.Item href="/pages/cursos/enfermagem">Enfermagem</NavDropdown.Item>
                      <NavDropdown.Item href="/pages/cursos/eng_civil">Engenharia Civil</NavDropdown.Item>
                      <NavDropdown.Item href="/pages/cursos/eng_comp">Engenharia da Computação</NavDropdown.Item>
                    </Col>
                    <Col>
                      <NavDropdown.Item href="/pages/cursos/eng_prod">Engenharia de Produção</NavDropdown.Item>
                      <NavDropdown.Item href="/pages/cursos/eng_mecanica">Engenharia Mecânica</NavDropdown.Item>
                      <NavDropdown.Item href="/pages/cursos/farmacia">Farmacia</NavDropdown.Item>
                      <NavDropdown.Item href="/pages/cursos/nutricao">Nutrição</NavDropdown.Item>
                      <NavDropdown.Item href="/pages/cursos/pedagogia">Pedagogia</NavDropdown.Item>
                      <NavDropdown.Item href="/pages/cursos/psicologia">Psicologia</NavDropdown.Item>
                    </Col>
                  </Row>
                </NavDropdown>
                <Nav.Link href="/projeto">Projetos & Eventos</Nav.Link>
                <Nav.Link href="/publicacoes">Publicações Pesquisas & Extensões</Nav.Link>
                <Nav.Link href="/conheca">Conheça Gran</Nav.Link>
                <Nav.Link href="/contato">Fale Conosco</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <Navbar.Brand href="#home">
              <img
                alt=""
                src="/img/logoportalgran.png"
                width="50"
                className="d-inline-block align-top"
              />{' '}
            </Navbar.Brand>
          </Container>
        </Navbar>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/projeto" element={<Projeto />} />
          <Route path="/publicacoes" element={<Publicacoes />} />
          <Route path="/conheca" element={<Conheca />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/pages/cursos/adm" element={<Adm />} />
          <Route path="/pages/cursos/arquitetura_urbanismo" element={<Arquitetura />} />
          <Route path="/pages/cursos/ciencia_contabeis" element={<Ciencia />} />
          <Route path="/pages/cursos/educacoes_fisica" element={<Educacao />} />
          <Route path="/pages/cursos/enfermagem" element={<Enfermagem />} />
          <Route path="/pages/cursos/eng_civil" element={<Civil />} />
          <Route path="/pages/cursos/eng_comp" element={<Computacao />} />
          <Route path="/pages/cursos/eng_mecanica" element={<Mecanica />} />
          <Route path="/pages/cursos/eng_prod" element={<Producao />} />
          <Route path="/pages/cursos/farmacia" element={<Farmacia />} />
          <Route path="/pages/cursos/nutricao" element={<Nutricao />} />
          <Route path="/pages/cursos/pedagogia" element={<Pedagogia />} />
          <Route path="/pages/cursos/psicologia" element={<Psicologia />} />

        </Routes>
      </BrowserRouter>
      <footer>
        
      </footer>
    </div>
  );
}



