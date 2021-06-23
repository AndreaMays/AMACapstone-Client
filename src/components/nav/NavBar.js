// import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'

export const NavBar = (props) => {
  return (
    <>
    {/* <img className="logo" src="../Agape Resource Community Center Logo.png" /> */}

       
    <Nav className="navBar" justify variant="tabs" defaultActiveKey="/home">
    <Nav.Item>
      <Nav.Link href="/home">Home</Nav.Link>
    </Nav.Item>
     <Nav.Item>
      <Nav.Link href="studentnotes">Lesson Notes</Nav.Link>
    </Nav.Item>
 
    <Nav.Item>
      <Nav.Link href="/competitionlists"> Competitions</Nav.Link>
    </Nav.Item>

    <Nav.Item>
      <Nav.Link href="/awards">Awards</Nav.Link>
    </Nav.Item>
 
  </Nav>
 
  
  </>

  )
}