import React, {useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { AwardContext } from "./AwardProvider"
import { StudentUserContext } from "../studentUser/StudentProvider"
import { Card } from "react-bootstrap"
import "./Awards.css"

export const AwardsList = () => {

const {getAwards, awards } = useContext(AwardContext)

useEffect(() => {
    getAwards()
}, [])

return (
    <>
    <article>
        <header className="award_header">
            <h2 className="award_title">Award Info </h2>
            <img class="piano_pic1" src="https://c4.wallpaperflare.com/wallpaper/447/1023/658/piano-dark-cool-partial-wallpaper-preview.jpg" alt=""/>
        </header>

<section   className="competitionList">

{
    awards
    ?
    awards.map(a => {


 return <Card className="row weeklyCard " style={{ width: '18rem' }}>
       <section key={a.id} className="awardSection"> </section>
  <Card.Body className="awardCard" >
  <Card.Title>Name of Comp: {a.name_of_comp}</Card.Title>
  <Card.Subtitle className="mb-2 text-muted">Name: {a.student_user.user.first_name} {a.student_user.user.last_name} </Card.Subtitle>
 
<Card.Text>
    Date: {a.date}
    <br></br>
    Competition: {a.name_of_comp}
    <br></br>
    Award Recieved: {a.type_of_award}
    <br></br>
    Admin Id: {a.admin}
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