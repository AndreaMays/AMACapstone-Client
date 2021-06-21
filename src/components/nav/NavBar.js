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
      <Nav.Link href="/about">About</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="studentnotes">Lesson Notes</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="progress">Log Progress Bar</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/competitions"> Competitions/Awards</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/message"> Community Message Board</Nav.Link>
    </Nav.Item>
    <Nav.Item>
      <Nav.Link href="/donations"> Contact </Nav.Link>
    </Nav.Item>
  </Nav>
 
  
  </>

  )
}