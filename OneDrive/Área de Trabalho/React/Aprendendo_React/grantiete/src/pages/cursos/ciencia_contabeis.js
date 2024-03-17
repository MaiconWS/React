import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import '../style.css';

const ciencias = () => {
  return (
    <>
      <div className="mod_1">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <br></br>
              <h1 className="fonte_laranja" style={{ fontSize: '5vw' }} >Ciências Contábeis</h1 >
              <br></br>
              <p>Toda empresa necessita de um contador competente para garantir seu sucesso financeiro.
              Aprenderá desde os fundamentos teóricos até a aplicação prática em temas como Auditoria Contábil, Contabilidade Intermediária, Controladoria e Métodos Quantitativos.<br></br>
              com o avanço da tecnologia e das práticas empresariais, os contadores estão cada vez mais envolvidos em áreas como análise de big data, finanças corporativas, contabilidade ambiental e sustentabilidade, entre outras. 
              O campo de atuação dos profissionais de Ciências Contábeis é dinâmico e em constante evolução, oferecendo diversas oportunidades de carreira em diversos setores da economia.</p>

              <Row>
                <Col>
                  <h4 className="fonte_laranja">Duração</h4>
                  <h6>4 anos.</h6>
                </Col>
                <Col>
                  <h4 className="fonte_laranja">Carga horária</h4>
                  <h6>3.300 horas</h6>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Image style={{ borderRadius: '20px' }} src="../../../img/cursos/ciencias-contabeis.jpg" fluid />
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
                    Você aprenderá a analisar e interpretar dados financeiros e contábeis, identificando tendências, padrões e anomalias que podem afetar as operações e a saúde financeira de uma organização.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Você ganhará conhecimento sobre as leis e regulamentos contábeis, tributários e financeiros que regem as operações empresariais, garantindo conformidade e mitigando riscos legais.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    A comunicação eficaz é crucial para transmitir informações financeiras de forma clara e compreensível para diferentes partes interessadas, como gerentes, acionistas, auditores e reguladores.
                  </Card.Text>
                </Col>
              </Row>
              <br></br>
              <Row >
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Através da análise de dados e informações financeiras, você aprenderá a tomar decisões informadas que impactam a gestão financeira e estratégica de uma organização.
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
                    Você será exposto a questões éticas e morais que enfrentam os contadores e aprenderá a tomar decisões éticas em situações profissionais desafiadoras.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Row>
            <Col >
              <h3 className="fonte_laranja">CAMPO DE ATUAÇÃO</h3>
              <p>Ciências Contábeis é uma área ampla e fundamental para o funcionamento de organizações de todos os tipos, desde pequenas empresas até grandes corporações. O campo de atuação dos profissionais de Ciências Contábeis inclui uma variedade de áreas, tais como:</p>
            </Col>
          </Row>
          <Row className="centro">
            <Row>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Contabilidade Financeira: </Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Os contadores financeiros fornecem informações úteis para investidores, credores e reguladores.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Contabilidade Gerencial: </Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Nessa área, os contadores trabalham com gestores e executivos para fornecer informações financeiras que auxiliem na tomada de decisões estratégicas, planejamento financeiro e controle interno.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Perícia Contábil: </Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Profissionais atuam como peritos em questões financeiras e contábeis em litígios judiciais, investigações de fraudes e outras situações legais que exijam análise especializada.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Consultoria Financeira: </Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Profissionais de contabilidade oferecem serviços de consultoria para ajudar organizações a melhorar sua eficiência financeira, gerenciar riscos, implementar sistemas contábeis e atender a requisitos regulatórios.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Contabilidade Pública:</Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Profissionais trabalham em órgãos governamentais, realizando auditorias, elaborando relatórios financeiros e garantindo conformidade com as leis e regulamentos contábeis do setor público.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Contabilidade Tributária:  </Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Envolve o cálculo e o planejamento de impostos para indivíduos e empresas, garantindo conformidade com as leis fiscais e buscando estratégias para minimizar a carga tributária.
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

export default ciencias;