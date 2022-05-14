import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png'
import auth from '../../../firebase.init';
import './Header.css';


const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <>
            <Navbar collapseOnSelect expand="lg" sticky='top' bg="success" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/">
                        <img height={30} className="logo" src={logo} alt="" />
                    </Navbar.Brand>


                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                            <Nav.Link href="home#products">Products</Nav.Link>
                            <Nav.Link href="home#whyUs">Why Us</Nav.Link>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>
                            <Nav.Link href="home#feedback">FeedBack</Nav.Link>

                        </Nav>
                        <Nav>

                            {
                                user ?
                                    <div className="d-flex">
                                        <button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>sign out</button>
                                        <Nav.Link as={Link} to="manageallitems">Manage all items</Nav.Link>
                                        <Nav.Link as={Link} to="addproduct">Add items</Nav.Link>
                                        <Nav.Link as={Link} to="about">My items</Nav.Link>
                                        <Nav.Link as={Link} to="checkout">CheckOut</Nav.Link>
                                    </div>

                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;