import { Navbar, Container } from "react-bootstrap";
// importar el componente Link de la libreria react-router-dom
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <Navbar bg="danger" variant="dark">
        <Container className="justify-content-betewen">
          {/* Hacemos uso del componente Links para indicar adonde ir al seleccionar cada opcion */}
          <div>
            <Link to="/" className="text-white ms-3 text-decoration-none">
              🏡 Home
            </Link>
            <Link
              to="/contactos"
              className="text-white ms-3 text-decoration-none"
            >
              📙 Contactos
            </Link>
          </div>
          <Navbar.Brand>Happy Cake 🍰</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
