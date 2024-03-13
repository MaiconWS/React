import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import '../style.css';

const adm = () => {
  return (
    <>
      <div className="adm_1">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <br></br>
              <h1 className="fonte_laranja" style={{ fontSize: '5vw' }} >Administração</h1 >
              <p>A faculdade de Administração te prepara para atuar em diferentes etapas e setores das organizações. No curso de administração você aprenderá a analisar, planejar, implantar e gerenciar projetos, pessoas e recursos.<br></br>
                Aprender a administrar significa desenvolver habilidades para atuar com marketing, produtos, finanças, tecnologia e pessoas. Nenhuma outra graduação oferece um conhecimento tão abrangente.</p>
              <Row>
                <Col>
                  <h4 className="fonte_laranja">Duração</h4>
                  <h6>4 anos.</h6>
                </Col>
                <Col>
                  <h4 className="fonte_laranja">Carga horária</h4>
                  <h6>3.240 horas</h6>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Image style={{ borderRadius: '20px' }} src="../../../img/cursos/adm.jpg" fluid />
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
                    Formar profissionais preparados para procedimentos conceituais, sendo habilidosos negociadores e executores, críticos e pró-ativos.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Desenvolver uma visão sistêmica, holística e estratégica das organizações.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Promover a formação de profissionais gestores que contribuam para o desenvolvimento de conteúdos de formação humana.
                  </Card.Text>
                </Col>
              </Row>
              <br></br>
              <Row >
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Como entender e organizar informações e ações para atingir objetivos é essencial para a administração e uma das habilidades mais úteis para todos os projetos..
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Descubra como analisar estados e movimentações da macro e micro economia, como o mercado se comporta e como empresas e projetos podem reagir e aproveitar oportunidades.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Você vai aprender desde análise de custos e lucros até contabilidade. Todo o essencial para a saúde financeira de diferentes tipos de negócios.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Row>
            <Col >
              <h3 className="fonte_laranja">CAMPO DE ATUAÇÃO</h3>
              <p>O campo de atuação da administração é vasto e pode ser encontrado em organizações de todos os tipos e tamanhos, tanto no setor público quanto no privado.<br></br> Aqui estão alguns dos principais campos de atuação da administração:</p>
            </Col>
          </Row>
          <Row className="centro">
            <Row>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Administração de Empresas:</Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Gerenciamento de operações.
                    </Card.Text> <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Tomada de decisões estratégicas.
                    </Card.Text> <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Desenvolvimento de planos de negócios.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Logística e Cadeia de Suprimentos:</Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Gestão de estoque.
                    </Card.Text>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Distribuição e transporte.
                    </Card.Text>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Coordenação da cadeia de suprimentos.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Finanças:</Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Gestão de orçamento.
                    </Card.Text>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Análise financeira.
                    </Card.Text>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Planejamento tributário.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Gestão de Projetos:</Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Planejamento e execução de projetos.
                    </Card.Text>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Controle de prazos e recursos.
                    </Card.Text>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Gestão de equipes de projeto.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Marketing:</Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Pesquisa de mercado.
                    </Card.Text>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Gerenciamento de marcas e produtos.
                    </Card.Text>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Desenvolvimento de estratégias de marketing.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Recursos Humanos:</Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Recrutamento e seleção de pessoal.
                    </Card.Text>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Treinamento e desenvolvimento de funcionários.
                    </Card.Text>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Gestão de desempenho e avaliação.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Row>

        </Container>
      </div >
      <Outlet />
    </>
  )
}

export default adm;