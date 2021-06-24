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
        <header className="notes_header">
            <h2 className="comp_header">Student Competition Info </h2>
        </header>

<section   className="competitionList">
{
    competitions
    ?
    competitions.map(competition => {
        {console.log("HELP", competition)}
        // <section>
        // <div>{competition.date}</div>
        // </section>


 return <Card style={{ width: '18rem' }}>

       <section key={competition.id} className="competitionCard"></section>
  <Card.Body >
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
</Card> 
})
:<div>loading</div>
}
</section>
</article>

</>
)
}