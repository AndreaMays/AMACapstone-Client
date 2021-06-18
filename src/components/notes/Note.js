import { Card, Accordion, Button} from "react-bootstrap"
import { LessonNoteList } from "./NoteList"
import React, {useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { LessonNotesContext } from "./NoteProvider"
import { StudentUserContext } from "../studentUser/StudentProvider"

export const WeeklyNoteCard = ({week}) => {
  const {getNotes, notes, deleteNotes} = useContext(LessonNotesContext)
  // const { students, getStudents } = useContext(StudentUserContext)
  const history = useHistory()

  useEffect(() => {
      getNotes()
  }, [])
  console.log("PRACTICE", notes)

  //"groceryMenuProducts" (above) is being called from the expand fetch call on getGroceryMenuProductItems which
  // is getting the join table, the groceryMenu and the Product Item.
// "product" on line 19 is passing in the conditional that is pulling all groceryMenu and productItems

  return (
    <>
<Accordion className="row weeklyCard ">
  <div>
  <Card  className="card-group weeklyMenuCard">
<Card.Header>

  <Accordion.Toggle as={Button} variant="link" eventKey="0">
  {week.date}
   </Accordion.Toggle>
</Card.Header>
<Accordion.Collapse eventKey="0">
  <Card.Body>
  {
                notes
                ?
                notes.map(Lnotes => {
                    return <section key={notes.id} className="lessonNotes">
                        <div className="date_notes">Date: {Lnotes.date}</div>
                        <div className="scale_notes">Scales: {Lnotes.scale_notes}</div>
                        <div className="memory_notes">Memory Songs: {Lnotes.memory_notes}</div>
                        <div className="song1_notes">Primary Song: {Lnotes.song1_notes}</div>
                        <div className="song2_notes">Second Song: {Lnotes.song2_notes}</div>
                        <div className="admin_note_id">Admin Id: {Lnotes.admin}</div>
                        <div className="id_notes"> Note Id: {Lnotes.id} </div>

                    </section>
                })
                :<div>loading</div>
}
  </Card.Body>
</Accordion.Collapse>
</Card>
</div>
</Accordion>
</>

)

  }
