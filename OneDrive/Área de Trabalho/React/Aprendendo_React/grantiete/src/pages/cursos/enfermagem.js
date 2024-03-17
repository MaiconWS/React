import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import '../style.css';

const enfermagem = () =>{
  return (
    <>
    <div className="mod_1">
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <br></br>
              <h1 className="fonte_laranja" style={{ fontSize: '5vw' }} >Enfermagem</h1 >
              <p>Ao estudar Enfermagem, você adquirirá uma ampla gama de habilidades clínicas, técnicas e interpessoais que são essenciais para fornecer cuidados de saúde de alta qualidade aos pacientes. Aqui estão algumas das habilidades que você provavelmente desenvolverá durante o curso:</p>
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
              <Image style={{ borderRadius: '20px' }} src="../../../img/cursos/enfermagem.png" fluid />
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
                    Você aprenderá a realizar avaliações abrangentes dos pacientes, incluindo histórico médico, exame físico e avaliação de sinais vitais, para determinar o estado de saúde atual e identificar problemas potenciais.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Desenvolverá habilidades para administrar com segurança uma variedade de medicamentos, incluindo via oral, intravenosa, intramuscular e subcutânea, seguindo protocolos e procedimentos estabelecidos.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Aprenderá a realizar uma variedade de procedimentos clínicos, como curativos, coleta de amostras de sangue e urina, administração de terapias intravenosas, entre outros, de acordo com os padrões de prática e protocolos de segurança.
                  </Card.Text>
                </Col>
              </Row>
              <br></br>
              <Row >
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Desenvolverá habilidades para monitorar e interpretar sinais vitais, como pressão arterial, frequência cardíaca, frequência respiratória e temperatura, para identificar alterações no estado de saúde do paciente.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Aprenderá a fornecer cuidados de emergência a pacientes em situações críticas, como suporte básico de vida, administração de oxigênio, estabilização de ferimentos e avaliação inicial de emergências médicas.
                  </Card.Text>
                </Col>
                <Col>
                  <Card.Text>
                    <Card.Img src="./../../../img/cursos/verificado.png" style={{ width: '30px' }} />
                    Desenvolverá habilidades de gestão de cuidados para planejar, implementar e avaliar o plano de cuidados do paciente, garantindo a continuidade e a qualidade dos cuidados ao longo do tempo.
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Row>
            <Col >
              <h3 className="fonte_laranja">CAMPO DE ATUAÇÃO</h3>
              <p>Os profissionais de enfermagem têm um amplo campo de atuação em diversos setores da saúde, desempenhando um papel fundamental na promoção da saúde, prevenção de doenças, tratamento e reabilitação. Abaixo estão alguns dos principais campos de atuação para enfermeiros:</p>
            </Col>
          </Row>
          <Row className="centro">
            <Row>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Assistência Hospitalar: </Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Enfermeiros trabalham em hospitais e clínicas, prestando cuidados diretos aos pacientes em diferentes unidades, como emergência, terapia intensiva, cirurgia, pediatria, obstetrícia, entre outras.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Atenção Primária à Saúde:</Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Enfermeiros atuam em centros de saúde, postos de saúde, unidades básicas de saúde e programas de saúde da família, fornecendo cuidados preventivos, promoção da saúde, educação em saúde, vacinação e tratamento de doenças comuns.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Saúde Mental e Psiquiátrica:  </Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Profissionais de enfermagem trabalham em hospitais psiquiátricos, centros de saúde mental, clínicas de reabilitação e comunidades, oferecendo suporte emocional, administração de medicamentos, terapia individual e em grupo, e coordenação de cuidados.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Gestão em Saúde:  </Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Enfermeiros ocupam cargos de gestão em hospitais, clínicas, centros de saúde e organizações de saúde, gerenciando equipes de enfermagem, coordenando serviços de saúde, desenvolvendo políticas de qualidade e segurança do paciente, e administrando recursos.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Educação em Enfermagem: </Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Alguns enfermeiros optam por seguir carreiras acadêmicas, atuando como professores em escolas de enfermagem, coordenadores de cursos, pesquisadores e educadores de pacientes e comunidades sobre cuidados de saúde.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card className="centro" style={{ border: 'none' }}>
                  <Card.Body>
                    <Card.Title className="fonte_laranja">Cuidados Domiciliares:</Card.Title>
                    <Card.Text>
                      <Card.Img src="./../../../img/cursos/alvo.png" style={{ width: '20px' }} />
                      Enfermeiros prestam cuidados de saúde em domicílio para pacientes que necessitam de assistência contínua, como idosos, pessoas com deficiência, pacientes crônicos ou em fase de recuperação.
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

export default enfermagem;