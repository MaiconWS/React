import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import '../style.css';

const eng_prod = () =>{
  return (
    <>
     <div className="mod_1">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <br></br>
              <h1 className="fonte_laranja" style={{ fontSize: '5vw' }} >Arquitetura e Urbanismo</h1 >
              <p>A função do arquiteto é projetar, planejar, construir e organizar espaços externos e internos, sempre com o objetivo de garantir conforto, segurança e acessibilidade. Ele leva em consideração critérios como funcionalidade, estética, aspectos técnicos, históricos e culturais.<br></br>

                O curso de Arquitetura e Urbanismo da Anhanguera agrega uma formação artística e humana com disciplinas exatas. Inicia com disciplinas como Arte, Desenho e História da Arquitetura e avança para temas mais específicos como Planejamento e Infraestrutura Urbana.</p>
              <Row>
                <Col>
                  <h4 className="fonte_laranja">Duração</h4>
                  <h6>5 anos.</h6>
                </Col>
                <Col>
                  <h4 className="fonte_laranja">Carga horária</h4>
                  <h6>4.000 horas</h6>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Image style={{ borderRadius: '20px' }} src="../../../img/cursos/arquitetura.png" fluid />
            </Col>
          </Row>
          <Card style={{ border: 'none', marginTop: '50px' }}>
            <Row>
              <Col>
                <h3 className="fonte_laranja">O QUE VOCÊ VAI APRENDER?</h3>
              </Col>
            </Row>
            <Card.Body className="centro">
              <Row>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Formar um profissional criativo e flexível, com espírito crítico, iniciativa, capacidade de julgamento e tomada de decisão.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Disponibilizar um elenco de opções de convivência com outras áreas do conhecimento colocadas à disposição dos acadêmicos em termos práticos e efetivos.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Oferecer um sólido aparato de conhecimentos técnicos e científicos e habilidades práticas essenciais à profissão.
                  </Card.Text>
                </Col>
              </Row>
              <br></br>
              <Row >
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Ser apto a coordenar e atuar em equipes multidisciplinares, ter habilidade em comunicação oral e escrita e saber valorizar a formação continuada.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Formar um profissional com visão moderna das demandas e das inovações da área, com sólida formação geral e científica que o capacite a identificar, formular e solucionar problemas ligados às atividades de projeto.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Assegurar a formação em Arquitetura e Urbanismo de forma que os aspectos generalistas da profissão sirvam de base para a consolidação dos conteúdos científicos e técnicos.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Row>
            <Col >
              <h3 className="fonte_laranja">CAMPO DE ATUAÇÃO</h3>
              <p>O campo de atuação da arquitetura e urbanismo é bastante abrangente e envolve diversas áreas. Aqui estão algumas das principais áreas de atuação para profissionais formados em arquitetura e urbanismo:</p>
            </Col>
          </Row>
          <Row className="centro">
            <Row>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Projeto Arquitetônico Residencial e Comercial:</Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Desenvolvimento de projetos para residências, edifícios comerciais, escritórios, lojas e outros espaços.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Planejamento Urbano e Regional:</Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Elaboração de planos diretores, estudos de impacto ambiental, zoneamento e desenvolvimento sustentável de áreas urbanas e regionais.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Restauro e Conservação: </Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Preservação de patrimônio histórico e cultural, incluindo a restauração de edifícios antigos e monumentos.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Design de Interiores: </Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Planejamento e execução de projetos de design de interiores para otimizar a funcionalidade e estética de espaços internos.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Construção Sustentável:</Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Envolvimento em projetos que buscam a eficiência energética, o uso de materiais sustentáveis e práticas que minimizem o impacto ambiental.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Gestão de Projetos: </Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Coordenação e gerenciamento de equipes envolvidas em projetos arquitetônicos e urbanísticos, assegurando a execução adequada e dentro dos prazos estabelecidos.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>

        </Container>
      </div >
    
    <Outlet/>
    </>
  )
}

export default eng_prod;