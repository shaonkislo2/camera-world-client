
 import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../../hooks/useAuth';
import './Header.css'

const Header = () => {
  const {user, logOut} = useAuth();
    return (
        <>
        <Navbar bg="success" variant="dark" sticky="top" collapseOnSelect expand="lg" >
          <Container>
          <Navbar.Brand className="fs-2" href="#home"> <i class="fas fa-camera"></i> Camera World</Navbar.Brand>
          <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
            <Nav.Link className="nav-style" as={HashLink} to="/home#home">Home</Nav.Link>
            <Nav.Link className="nav-style" as={HashLink} to="home#products">Products</Nav.Link>
            <Nav.Link className="nav-style" as={HashLink} to="/allexplore">Explore</Nav.Link>
            <Nav.Link className="nav-style" as={HashLink} to="/home#gallery">Gallery</Nav.Link>
            <Nav.Link className="nav-style" as={HashLink} to="/home#membership">MemberShip</Nav.Link>
            <Nav.Link className="nav-style" as={Link}to="about">About</Nav.Link>
            
            <div>
              
            </div>
             {
             user?.email?
           <>
           <span> <Nav.Link className="nav-style" as={Link}to="dashboard">Dashboard</Nav.Link>
          </span>
           <span> <Button  onClick={logOut}
             variant="light">Logout</Button></span>
           
            </>
            :  
            <Nav.Link className="nav-style" as={Link}to="login">Login</Nav.Link>
            }


            <Navbar.Text>
                Signed in as: <a href="#login">{user?.displayName} </a>
                </Navbar.Text> 
        
          
    </Navbar.Collapse>
          
          </Container>
        </Navbar>
            
      </>   
    );
};

export default Header;

/*




       <NavLink style={{textDecoration: 'none', color: 'white'}} to="/login">
                <Button color="inherit">Login </Button>
             </NavLink> 
*/