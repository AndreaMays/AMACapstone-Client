import React, { useState } from "react"

export const LessonNotesContext = React.createContext()

export const NoteProvider = (props) => {
    const [notes, setNotes] = useState([])

    const getNotes = () => {

        return fetch("http://localhost:8000/notes", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setNotes)
        }
    
    const updateNote = (noteObj) => {
        return fetch(`http://localhost:8000/notes/${noteObj.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem('lu_token')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(noteObj)
        })
        .then(getNotes)

    }

    const createNotes = (note) => {
        return fetch("http://localhost:8000/notes", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
    }

    const deleteNote = noteId => {
        return fetch(`http://localhost:8000/notes/${ noteId }/signup`, {
            method: "DELETE",
            hearders: {
                "Auhtorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(getNotes)
    }

    return (
        <LessonNotesContext.Provider value={{notes, getNotes, createNotes, deleteNote, updateNote}} >
            { props.children }
        </LessonNotesContext.Provider>

    )
}
