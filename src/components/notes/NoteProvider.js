import React, { useState } from "react"

export const LessonNotesContext = React.createContext()

export const NoteProvider = (props) => {
    const [notes, setNotes] = useState([])

    const getNotes = () => {

        return fetch("https://ama-student-portal.herokuapp.com/studentnotes", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setNotes)
        }

        // return fetch("http://localhost:8000/studentnotes", {
        //     headers:{
        //         "Authorization": `Token ${localStorage.getItem("lu_token")}`
        //     }
        // })
        //     .then(response => response.json())
        //     .then(setNotes)
        // }

        
    // not using this function currently
    const updateNote = (noteObj) => {
        return fetch(`https://ama-student-portal.herokuapp.com/studentnotes/${noteObj.id}`, {
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
        return fetch("https://ama-student-portal.herokuapp.com/studentnotes", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(note)
        })
    }

    const deleteNote = noteId => {
        return fetch(`https://ama-student-portal.herokuapp.com/studentnotes/${ noteId }`, {
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
