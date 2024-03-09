import './App.css';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home';

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
                <NavDropdown title="Nossos cursos" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.4">
                    Separated link
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="/projeto">Projetos & Eventos</Nav.Link>
                <Nav.Link href="#link">Publicações Pesquisas & Extensões</Nav.Link>
                <Nav.Link href="#link">Conheça Gran</Nav.Link>
                <Nav.Link href="#link">Fale Conosco</Nav.Link>
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}



