import Nav from "react-bootstrap/Nav";
import { Link, NavLink, useLocation } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";

function SideBar() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showIcon, setShowIcon] = useState(null);

  const getLinkClass = ({ isActive }) =>
    `navLink text-decoration-none text-dark mb-2 ${
      isActive ? "active-link" : ""
    }`;

  const handleToggle = (isOpen) => {
    setShowDropdown(isOpen);
  };

  function useActivePath(path) {
    const location = useLocation();
    return `nav-drop ${location.pathname === path ? "active-link" : ""}`;
  }

  return (
    <Row
      className="d-flex flex-column p-3"
      style={{
        backgroundColor: "#e9e9e9",
        height: "100vh",
        width: "250px",
        position: "fixed",
        top: 0,
        left: 0,
      }}
    >
      <Col>
        <Nav defaultActiveKey="/home" className="flex-column ms-2 ">
          <h5 className="ms-5 mt-3">TO-DO LIST</h5>
          <div className="d-flex ">
            <Button
              variant="navy"
              style={{ backgroundColor: "navy", color: "white", width: "100%" }}
              className="mt-3  mb-4"
            >
              ADD NEW TASKS
            </Button>
          </div>
          <NavLink className={getLinkClass} to="/">
            All Tasks
          </NavLink>
          <NavLink className={getLinkClass} to="/important">
            Important
          </NavLink>
          <NavLink className={getLinkClass} to="completed">
            Completed task
          </NavLink>
          <NavLink className={getLinkClass} to="uncompleted">
            {" "}
            Uncompleted tasks
          </NavLink>

          <NavDropdown
            className="nav-dropdown"
            style={{ backgroundColor: "#e9e9e9" }}
            id="dropdown-basic-button"
            title={
              <span
                className="navLink"
                style={{ color: "black", textDecoration: "none" }}
              >
                Directories
              </span>
            }
            show={showDropdown}
            onToggle={handleToggle}
          >
            <Dropdown.Item
              as={NavLink}
              to="/secondary"
              onClick={(e) => e.stopPropagation()}
              className={`icons-side    ${useActivePath("/secondary")}`}
              onMouseEnter={() => setShowIcon("secondary")}
              onMouseLeave={() => setShowIcon(null)}
            >
              <span>secondary</span>
              {showIcon === "secondary" && (
                <div className="d-flex gap-1">
                  <i class="bi bi-pencil-square"></i>
                  <i class="bi bi-trash"></i>
                </div>
              )}
            </Dropdown.Item>
            <Dropdown.Item
              as={NavLink}
              to={"/main"}
              onClick={(e) => e.stopPropagation()}
              className={`icons-side    ${useActivePath("/main")}`}
              onMouseEnter={() => setShowIcon("main")}
              onMouseLeave={() => setShowIcon(null)}
            >
              <span>Main</span>
              {showIcon === "main" && (
                <div className="d-flex gap-1">
                  <i class="bi bi-pencil-square"></i>
                  <i class="bi bi-trash"></i>
                </div>
              )}
            </Dropdown.Item>
            <Dropdown.Item
              as={NavLink}
              to={"/new"}
              onClick={(e) => e.stopPropagation()}
              className={useActivePath("/new")}
            >
              <span className="new">+New</span>
            </Dropdown.Item>
          </NavDropdown>
        </Nav>
      </Col>
    </Row>
  );
}

export default SideBar;
