// src/components/NavBar.jsx
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";

function NavBar() {
  return (
    <Container>
      <Navbar
        className="bg-body-tertiary px-4 nav-up"
        style={{ height: "70px", borderBottom: "1px solid #ddd" }}
      >
        <Form className="d-flex justify-content-center ">
          <Form.Control
            type="text"
            placeholder="Search"
            className="me-2 search"
          />
          <Button type="submit" className="btn-nav">
            Add new task
          </Button>
        </Form>
      </Navbar>
    </Container>
  );
}

export default NavBar;
