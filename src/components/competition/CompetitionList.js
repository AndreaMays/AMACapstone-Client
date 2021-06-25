import React, {useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { CompetitionContext } from "./CompetitionProvider"
import { StudentUserContext } from "../studentUser/StudentProvider"
import { Card } from "react-bootstrap"
import "./competition.css"

export const CompetitionList = () => {

const {getCompetitions, competitions } = useContext(CompetitionContext)

useEffect(() => {
    getCompetitions()
}, [])
console.log("Comp", competitions)

return (
    <>
    <article>
        <header className="comp_header">
            <h2 className="comp_header_title">Student Competition Info </h2>
            <img class="piano_pic3" src="https://cdn.pixabay.com/photo/2016/03/06/05/03/piano-1239729__480.jpg" alt="" />
        </header>

<section   className="competitionList">
{
    competitions
    ?
    competitions.map(competition => {
        {console.log("HELP", competition)}

 return <Card style={{ width: '18rem' }}>
<div > 

  <Card.Body className="compCard">
  <Card.Title>Name of Comp: {competition.name_of_comp}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">Name: {competition.student_user.user.first_name} {competition.student_user.user.last_name} </Card.Subtitle>
 
<Card.Text>
    Date: {competition.date}
    <br></br>
    Score: {competition.score}
    <br></br>
    Award: {competition.award}
</Card.Text>
    {/* <Card.Link href="#">Card Link</Card.Link>
    <Card.Link href="#">Another Link</Card.Link> */}
  </Card.Body>
  </div>    
</Card> 
})
:<div>loading</div>
}
</section>
</article>

</>
)
}