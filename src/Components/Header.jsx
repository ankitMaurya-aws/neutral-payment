import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='site_header'>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand>
                        <Link to="/"><img src="images/logo.png" alt="Neutral-payment" /></Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className='justify-content-end' id="navbarScroll">
                        <Nav className="my-2 my-lg-0">
                            <ul className='navlinks'>
                                <li><Link to="/">Solutions</Link></li>
                                <li><Link to="/">Funding</Link></li>
                                <li><Link to="/">Industries</Link></li>
                                <li><Link to="/">ISO & Agent</Link></li>
                                <div className='d-flex'>
                                    <Link className='header_btn priamry-bg'>APPLY</Link>
                                    <Link className='header_btn cta secondary-bg'><img src="images/call-icon.png" alt="call-icon" /> 1-234-567-8901</Link>
                                </div>
                            </ul>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header