import { Card } from "react-bootstrap"
import { CardDeck } from "react-bootstrap"
import React from "react"


export const NoteCard = ({ menu }) => (
  
    <>
    
  <CardDeck>
     <Card className="groceryCard" style={{ width: '20rem'}}>
     
      <Card.Body>
        <Card.Title></Card.Title>
       
        
        <Card.Text>
        Grocery Items:
         {/* {menu.productItem.name} */}
        </Card.Text>
      </Card.Body>
    </Card>
  
  </CardDeck>
  
  
  </>
    )