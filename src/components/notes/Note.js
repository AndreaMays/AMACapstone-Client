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

  </Card.Body>
</Accordion.Collapse>
</Card>
</div>
</Accordion>
</>

)

  }
