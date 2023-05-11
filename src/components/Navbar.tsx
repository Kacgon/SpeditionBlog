import { Container, Nav, Navbar as NavbarBs } from "react-bootstrap" 
import { NavLink } from "react-router-dom"
import '../main.css';


export function Navbar() {
    return <NavbarBs className="NavLink">

            <Nav className="me-auto">
                <Nav.Link className="NavLink" to="/" as={NavLink}>1</Nav.Link>
                <Nav.Link className="NavLink" to="/page2" as={NavLink}>2</Nav.Link>
                <Nav.Link className="NavLink" to="/page3" as={NavLink}>3</Nav.Link>
                <Nav.Link className="NavLink" to="/page4" as={NavLink}>4</Nav.Link>
                <Nav.Link className="NavLink" to="/page5" as={NavLink}>5</Nav.Link>
                <Nav.Link className="NavLink" to="/page6" as={NavLink}>...</Nav.Link>
                <Nav.Link className="NavLink" to="/page10" as={NavLink}>10</Nav.Link>
                <Nav.Link className="NavLink" to="/page15" as={NavLink}>15</Nav.Link>
                <Nav.Link className="NavLink" to="/page20" as={NavLink}>20</Nav.Link>
                <Nav.Link className="NavLink" to="/page21" as={NavLink}>...</Nav.Link>
                <Nav.Link className="NavLink" to="/page2" as={NavLink}>&gt;</Nav.Link>
            </Nav>
    </NavbarBs>
}