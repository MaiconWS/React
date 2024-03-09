import React from 'react';

import './style.css'
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const Home = () => {
    return (
        <div class="box">
            <div class="box_1" >
                <Image src="/img/banner.jpg" fluid />
            </div>
            <div class="box_2">
                <Container>
                <Row>
                        <Col className='Titulo' xs={12}>VEM PRA <span className='fonte_laranja'>GRAN</span></Col>
                    </Row>
                    <Row>
                        <Col className="espaco" md={6} xs={12}>
                            <p>A Gran é uma faculdade que atende à toda nossa região, atendendo alunos de Barra Bonita e região
                                que não precisam mais se deslocar até grandes cidades para ter uma educação superior de qualidade.
                                Estabelecendo sempre como missão propiciar ao universitário uma educação superior de qualidade
                                por meio da construção crítica e criativa do conhecimento, fundamentada na pluralidade de ideias,
                                respeito às diferenças étnicas, sociais e de gênero, propiciando a inserção na vida da comunidade e
                                na cidadania plena.</p>
                        </Col>
                        <Col md={6} xs={12}>
                            <Image className='tamanho' src="../../img/image_1.png" fluid />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div class="box_3">
                <Container>
                    <Row>
                        <Col xs={12} className='Titulo'>Conheça nossos <span className='fonte_laranja'>Cursos</span></Col>
                    </Row>
                    <Row>
                        <Col xs={6} md={4} className="espaco">
                            <Col className="curso" >Administração</Col>
                            <Col className="curso" >Arquitetura e urbanismo</Col>
                            <Col className="curso" >Ciências Contábeis</Col>
                            <Col className="curso" >Educação Física</Col>
                            <Col className="curso" >Enfermagem</Col>
                            <Col className="curso" >Engenharia Agronômica</Col>
                            <Col className="curso" >Engenharia Civil</Col>
                        </Col>
                        <Col xs={6} md={4} className="espaco">
                            <Col className="curso" >Engenharia de Computação</Col>
                            <Col className="curso" >Engenharia de Produção</Col>
                            <Col className="curso" >Farmácia</Col>
                            <Col className="curso" >Nutrição</Col>
                            <Col className="curso" >Pedagogia</Col>
                            <Col className="curso" >Psicologia</Col>
                            <Col className="curso" >E mais !</Col>
                        </Col>
                        <Col md={4} xs={6} className="espaco">
                            <Image src='../../img/01 1.png' fluid></Image>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>

    )

}

export default Home;