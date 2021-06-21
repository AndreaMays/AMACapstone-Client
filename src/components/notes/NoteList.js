import React, {useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { LessonNotesContext } from "./NoteProvider"
import { StudentUserContext } from "../studentUser/StudentProvider"
import { WeeklyNoteCard } from "./Note"
import { Button, Card, Accordion } from "react-bootstrap"
import "./Notes.css"

export const LessonNoteList = (prop) => {
    const {getNotes, notes, deleteNotes} = useContext(LessonNotesContext)
    // const { students, getStudents } = useContext(StudentUserContext)

    const history = useHistory()

    useEffect(() => {
        getNotes()
    }, [])
    console.log("PRACTICE", notes)

    // useEffect(() => {
    //     getStudents()
    // }, [])

    // console.log("STUDENTS", students)

    const dateTime = new Date().toISOString()

    return (
        <>
        <article className="noteList">
            <header className="notes_header">
                <h2 className="note_header">Student Lesson Notes </h2>
            </header>

            {/* {
                students
                ?
                students.map(student => {
                    return <section key={students.id} className="studentNames">
                        <div className="student_firstName">First Name: {student.first_name}</div>
                        <div className="student_lastName">Last Name: {student.last_name}</div>
                        </section>
            })
            :<div>loading</div>
        }  */}
  {
                notes
                ?
                notes.map(Lnotes => {
                    return   <Accordion className="row weeklyCard ">
                    <section key={notes.id} className="lessonNotes">
                        <Card  className="card-group weeklyMenuCard">
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