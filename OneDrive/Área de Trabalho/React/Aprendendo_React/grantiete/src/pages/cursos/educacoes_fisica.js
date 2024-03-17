import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import '../style.css';

const educacoes_fisica = () =>{
  return (
    <>
     <div className="mod_1">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <br></br>
              <h1 className="fonte_laranja" style={{ fontSize: '5vw' }} >Educação Física</h1 >
              <p>Ao estudar Educação Física, você desenvolverá uma ampla variedade de habilidades que são essenciais para trabalhar no campo da atividade física, saúde e esporte.O curso abrange muitas disciplinas de prática esportiva como Atletismo, Desenvolvimento Motor, Dança e Ginástica, mas também disciplinas teóricas e de base como Anatomia Humana, Fisiologia, Nutrição, Prevenção de Lesões e Primeiros Socorros. Ou seja, o curso de Educação Física não se resume à prática de esportes!</p>
              <Row>
                <Col>
                  <h4 className="fonte_laranja">Duração</h4>
                  <h6>4 anos.</h6>
                </Col>
                <Col>
                  <h4 className="fonte_laranja">Carga horária</h4>
                  <h6>3.440 horas</h6>
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={6}>
              <Image style={{ borderRadius: '20px' }} src="../../../img/cursos/educacao_fisica.jpg" fluid />
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
                    Você ganhará uma compreensão profunda da anatomia e fisiologia do corpo humano, incluindo sistemas musculoesquelético, cardiovascular, respiratório e neuromuscular.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Desenvolverá habilidades para avaliar a aptidão física e o desempenho atlético usando uma variedade de testes e medidas, como testes de resistência, flexibilidade, força e composição corporal.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Aprenderá a projetar programas de exercícios seguros e eficazes para pessoas de diferentes idades, níveis de condicionamento físico e objetivos de saúde.
                  </Card.Text>
                </Col>
              </Row>
              <br></br>
              <Row >
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Você aprenderá sobre os princípios básicos da nutrição e sua relação com a saúde e o desempenho físico, ajudando a orientar os outros sobre hábitos alimentares saudáveis.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Desenvolverá habilidades de liderança e trabalho em equipe, essenciais para colaborar com outros profissionais de saúde e esporte, além de motivar e inspirar indivíduos a alcançarem seus objetivos de condicionamento físico.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Você será exposto a questões éticas e culturais relacionadas à prática da Educação Física, ajudando a promover um ambiente inclusivo e respeitoso para todos os participantes.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Row>
            <Col >
              <h3 className="fonte_laranja">CAMPO DE ATUAÇÃO</h3>
              <p>A área da Educação Física oferece uma variedade de oportunidades de carreira em diversos campos relacionados à promoção da saúde, atividade física, esporte, recreação e bem-estar. Alguns dos principais campos de atuação para profissionais formados em Educação Física incluem:</p>
            </Col>
          </Row>
          <Row className="centro">
            <Row>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Treinamento Esportivo:</Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Profissionais podem trabalhar como treinadores esportivos em clubes esportivos, academias, equipes escolares ou profissionais. Eles planejam e supervisionam programas de treinamento para atletas, ajudando-os a melhorar seu desempenho atlético e evitar lesões.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Reabilitação e Fisioterapia:</Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Alguns profissionais de Educação Física se especializam em reabilitação física, trabalhando em clínicas de fisioterapia, hospitais ou centros de reabilitação para ajudar pacientes a se recuperarem de lesões musculoesqueléticas e recuperarem a função física.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Atividade Física e Saúde:  </Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Profissionais de Educação Física podem atuar em programas de promoção da saúde, trabalhando em organizações governamentais, empresas privadas ou organizações sem fins lucrativos para desenvolver e implementar programas que incentivem a prática regular de atividade física e melhorem a saúde da população.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Gestão de Instalações Esportivas e Recreativas:  </Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Profissionais podem trabalhar na gestão de instalações esportivas, como ginásios, clubes esportivos, piscinas e centros de recreação, coordenando atividades, gerenciando equipes e garantindo a segurança dos usuários.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Consultoria e Assessoria:</Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Profissionais podem oferecer serviços de consultoria e assessoria em áreas como condicionamento físico, nutrição esportiva, treinamento personalizado, gestão esportiva e organização de eventos.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Educação Não-Formal e Recreação:  </Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Além do ambiente escolar, profissionais de Educação Física podem trabalhar em programas de recreação comunitária, acampamentos de verão, cruzeiros, resorts, parques temáticos e outras organizações que oferecem atividades de lazer e recreação.
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

export default educacoes_fisica;