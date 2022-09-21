import { Container, Form, Button } from "react-bootstrap";

export default () => {
  return (
    <Container className="text-center">
      <h1>Cuentanos, ¿en que te podemos ayudar?</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" placeholder="Ingresar correo" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Descripcion</Form.Label>
          <Form.Control type="text" placeholder="Agregar descripcion" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};
