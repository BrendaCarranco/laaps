import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import '../components/componentsCSS/Card.css';





const Card = () => {
  return (

    <Form className="login-form">
        <h3 className="text-center">¿Con qué tarjeta vas a pagar?</h3>
          <FormGroup>
            <Input type="email" placeholder="Nombre y Apellido" />
          </FormGroup>
        <FormGroup>
            <Input type="text" placeholder="Número de tarjeta" />
          </FormGroup>

      <Row form>
        <Col md={6}>
          <FormGroup>
            <Input type="password" placeholder="Vencimiento" />
          </FormGroup>
        </Col>
        <Col md={4}>
          <FormGroup>
            <Input type="password" placeholder="CVV" />
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
            <Input type="email" placeholder="Calle y número" />
          </FormGroup>
       
    <Row form>
        <Col md={6}>
          <FormGroup>
            <Input type="password" placeholder="Colonia" />
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input type="password" placeholder="C.P" />
          </FormGroup>
        </Col>
      </Row>

      <FormGroup>
            <Input type="email" placeholder="Alcaldía" />
          </FormGroup>

    <Row form>
        <Col md={6}>
          <FormGroup>
            <Input type="text" placeholder="Ciudad"/>
          </FormGroup>
        </Col>
        <Col md={6}>
          <FormGroup>
            <Input type="text" placeholder="Estado"/>
          </FormGroup>
        </Col>
      </Row>
      <Button>Agregar Tarjeta</Button>
    </Form>

  );
}

export default Card;