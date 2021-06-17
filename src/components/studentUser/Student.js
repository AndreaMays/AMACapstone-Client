import { Card, Accordion, Button } from "react-bootstrap"
import { StudentUserContext} from "./StudentProvider"
import {NoteCard} from "./Note"
import React, {useContext} from 'react'
import {useEffect} from "react"
import { useHistory } from "react-router"


export const WeeklyNoteCard = ({week}) => {
    const {getStudents} = useContext(StudentUserContext)

    const history = useHistory()

    //"groceryMenuProducts" (above) is being called from the expand fetch call on getGroceryMenuProductItems which
    // is getting the join table, the groceryMenu and the Product Item.
// "product" on line 19 is passing in the conditional that is pulling all groceryMenu and productItems

    return (
<Accordion className="row weeklyNoteCard ">
    <div>
    <Card  className="card-group weeklyNoteCard">
  <Card.Header>
  <button className="addButton" onClick={() => {history.push("/notes/create")}}>
              "Here are your notes for this week"
        </button>
    <Accordion.Toggle as={Button} variant="link" eventKey="0">
    {week.title}
    </Accordion.Toggle>
  </Card.Header>
  <Accordion.Collapse eventKey="0">
    <Card.Body>
    { groceryMenuProducts.map(product => {
                        // console.log("HELP",product)
                        if(product.groceryMenuId === week.id) {
                            // console.log("hungry",product)
                            return <GroceryCard key={product.id} menu={product}></GroceryCard>
                        }
                    })
                }
    </Card.Body>
  </Accordion.Collapse>
</Card>
</div>
</Accordion>
    )
}