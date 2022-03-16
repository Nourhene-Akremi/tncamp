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
  <Navbar.Brand ><img src={mylogo} alt="" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link as={Link} to ='/'>Home</Nav.Link>
      <Nav.Link as={Link} to ="/Profile">Profile</Nav.Link>
     
     { currentUser ?
     <Nav.Link as={Link} to ="/" onClick={clearRefresh}>Logout</Nav.Link>
    :
    <Nav.Link as={Link} to ="/Login">Log In</Nav.Link> 
    }
     
    </Nav>
  
  </Navbar.Collapse>
  </Container>
</Navbar>
  )
}

export default MyNavBar
