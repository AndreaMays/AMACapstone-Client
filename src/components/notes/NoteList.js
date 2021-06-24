import React, {useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { LessonNotesContext } from "./NoteProvider"
import { StudentUserContext } from "../studentUser/StudentProvider"
import { WeeklyNoteCard } from "./Note"
import { Button, Card, Accordion } from "react-bootstrap"
import "./Notes.css"

export const LessonNoteList = (prop) => {
    const {getNotes, notes, deleteNotes} = useContext(LessonNotesContext)
 
    useEffect(() => {
        getNotes()
    }, [])

    return (
        <>
        <article className="noteList">

        <section>
        <h2 className="note_header_title">Student Lesson Notes </h2>
            <header className="notes_header">
                <img class="piano_pic1" src="https://images.squarespace-cdn.com/content/v1/5346bffee4b0c33a173cb5ac/1431091455266-GFC9T77JU9CQGNLYW3O3/ke17ZwdGBToddI8pDm48kN68_zcfjFZkWPqKjCmxL3dZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PINkM-dKYsswEVcZeKKkMnnsAcG5BqBMTl3yv2oxfyt5gKMshLAGzx4R3EDFOm1kBS/img-banner-hands-playing-piano.jpg?format=2500w" alt="" width="5000" height="300"/>  
                <br></br>      
            </header>
        </section>

  {
                notes
                ?
                notes.map(Lnotes => {
                    return   <Accordion className="row weeklyCard ">
                    <section key={notes.id} className="lessonNotes">
                        <Card  className="card-group weeklyLessonCard">
                    <Card.Header>
                            <div className="note_name">Student Name: {Lnotes.student_user.user.first_name}</div>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0" className="note_toggle">
                        <div className="date_notes">Date: {Lnotes.date}</div>
                        </Accordion.Toggle>
                            </Card.Header>
                            <Accordion.Collapse eventKey="0">                                        
                            <Card.Body className="note_card">
                        <div className="scale_notes notes">Scales: {Lnotes.scale_notes}</div>
                        <br></br>
                        <div className="memory_notes notes">Memory Songs: {Lnotes.memory_notes}</div>
                        <br></br>
                        <div className="song1_notes notes">Primary Song: {Lnotes.song1_notes}</div>
                        <br></br>
                        <div className="song2_notes notes">Second Song: {Lnotes.song2_notes}</div>
                        <br></br>
                        <div className="admin_note_id notes">Admin Id: {Lnotes.admin}</div>
                        <br></br>
                        <div className="id_notes notes"> Note Id: {Lnotes.id} </div>
                            </Card.Body>
                        </Accordion.Collapse>
                        </Card>
                    </section>
                    </Accordion>                 
                })
                                :<div>loading</div>
}

        </article>
     
        </>
    )
}