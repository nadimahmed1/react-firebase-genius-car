import { signOut } from 'firebase/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from '../../images/logo.png'

function CollapsibleExample() {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }
    return (
        <Navbar sticky='top' collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img height={30} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="home#services">Services</Nav.Link>
                        <Nav.Link href="home#Experts">Experts</Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link as={Link} to="/about">About</Nav.Link>

                        {
                            user && <>
                                <Nav.Link as={Link} to="adduser">Add User</Nav.Link>
                                <Nav.Link as={Link} to="manage">Manage Services</Nav.Link>
                                <Nav.Link as={Link} to="orders">Orders</Nav.Link>

                            </>
                        }
                        {

                            user ?
                                <button onClick={handleSignOut}>Sign Out</button>
                                :
                                <Nav.Link as={Link} to="/login">
                                    Login
                                </Nav.Link>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;