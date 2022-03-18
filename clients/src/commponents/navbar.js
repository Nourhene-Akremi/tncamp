import React from 'react'
import mylogo from '../logo.png'
import {Link,useHistory} from "react-router-dom"
import {Navbar,Container,Nav} from 'react-bootstrap'

function MyNavBar() {
  const history = useHistory()
  const currentUser=JSON.parse(localStorage.getItem('current_user'))
  const clearRefresh=()=>{
    localStorage.clear()
    history.push("/")
    setTimeout(() => {
      window.location.reload()
    }, 800);
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
     
         <Navbar.Brand  ><Nav.Link as={Link} to ='/' >
             
             <img className='navbar_logo_image' src={mylogo} alt="logo" />
             
         </Nav.Link></Navbar.Brand>
  


  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to ='/' className="nav_transform">Home</Nav.Link>
      { currentUser ?
      <Nav.Link as={Link} to ="/Profile" className="nav_transform">Profile</Nav.Link>
      : '' }
     { currentUser ?
     <Nav.Link as={Link} to ="/" className="nav_transform" onClick={clearRefresh}>Logout</Nav.Link>
    :
    <Nav.Link as={Link} to ="/Login" className="nav_transform">Log In</Nav.Link> 
    }
     
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default MyNavBar