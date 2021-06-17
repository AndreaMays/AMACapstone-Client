import React, {useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { LessonNotesContext } from "./NoteProvider"
import { StudentUserContext } from "../studentUser/StudentProvider"

export const LessonNoteList = (prop) => {
    const {getNotes, notes, deleteNotes} = useContext(LessonNotesContext)
    // const { students, getStudents } = useContext(StudentUserContext)

    const history = useHistory()

    useEffect(() => {
        getNotes()
    }, [])

    console.log("PRACTICE", notes)

    const dateTime = new Date().toISOString()

    return (
        <>
        <article className="noteList">
            <header className="notes_header">
                <h2>Student Lesson Notes </h2>
            </header>
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

                    </section>
                })
                :<div>loading</div>
}

        </article>
        </>
    )
}