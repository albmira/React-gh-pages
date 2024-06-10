import { Nav, Navbar, Container } from "react-bootstrap";
import { Outlet, Link } from 'react-router-dom';
import Logo from "../Assets/Img/Logo_trans.png"

function Header() {
    return <div className="h-content">
        <Navbar className='navBg' variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#home">Mira Softworks Lab</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        {/*<Nav.Link as={Link} to="/gallery">Art Gallery</Nav.Link>*/}
                        <Nav.Link as={Link} to="/projects">Projects</Nav.Link>
                        <Nav.Link as={Link} to="/portfolio">Portfolio</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <picture>
            <a href="/">
                <img className="img-fluid" src={Logo} alt="Logo"/>
            </a>
        </picture>

        <section>
            <Outlet></Outlet>
        </section>
    </div>
}

export default Header;