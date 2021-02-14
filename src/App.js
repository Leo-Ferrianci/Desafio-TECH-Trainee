import React from 'react';
import {
  Col,
  Row,
  Button,
  Container,
} from 'reactstrap';

export default function App() {
  return (
    <Container style={{ marginTop: "15%", marginLeft: "15%" }}>
      <Row style={{ marginBottom: "10%" }}>
        <Col lg="2"className="text-center">
          <Button color="primary">Janela 1</Button>
          <p> Ligado </p>
        </Col>
        <Col lg="2">
          <Button color="primary">Janela 2</Button>
        </Col>
        <Col lg="2">
          <Button color="primary">Janela 3</Button>
        </Col>
        <Col lg="2">
          <Button color="primary">Janela 4</Button>
        </Col>
        <Col lg="2">
          <Button color="primary">Janela 5</Button>
        </Col>
        <Col lg="2">
          <Button color="primary">Janela 6</Button>
        </Col>
      </Row>
      <Row>
        <Col lg="2">
          <Button color="primary">Janela 7</Button>
        </Col>
        <Col lg="2">
          <Button color="primary">Janela 8</Button>
        </Col>
        <Col lg="2">
          <Button color="primary">Janela 9</Button>
        </Col>
        <Col lg="2">
          <Button color="primary">Janela 10</Button>
        </Col>
        <Col lg="2">
          <Button color="primary">Janela 11</Button>
        </Col>
        <Col lg="2">
          <Button color="primary">Janela 12</Button>
        </Col>
      </Row>
    </Container>
  );
}

