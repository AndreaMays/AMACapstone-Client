import React, {useContext, useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { LessonNotesContext } from "./NoteProvider"
import { StudentUserContext } from "../studentUser/StudentProvider"
import Form from "react-bootstrap/Form"


export const LessonNoteForm = () => {
    const history = useHistory()

    const currentUserId = parseInt(sessionStorage.getItem("lu_token"))
    const [isLoading, setIsLoading] = useState(true)

    const [currentNote, setNote] = useState({
        date: Date.now(),
        scale_notes: "",
        memory_notes: "",
        song1_notes: "",
        song2_notes: "",
        student_user: currentUserId,
        admin: ""
    })

    const {createNote, updateNote} = useContext(LessonNotesContext)
    // const {getStudents, students} = useContext(StudentUserContext)

    // useEffect(() => {
    //     getStudents()
    // }, [])



// the function below is watching for the input change on the form/
const handleControlledInputChange = (event) => {
    event.preventDefault()
    const newStudentNote = {...currentNote }
    newStudentNote[event.target.id] = event.target.value
    setNote(newStudentNote)
}

const handleClickSaveEditForm = () => {
    if(currentNote.student_user === 0) {
        window.alert("Please enter a student")
    } else {
        setIsLoading(true);
        if (setNote.student_user === currentUserId) {
            updateNote({
                date: setNote.date,
                scale_notes: setNote.scale_notes,
                memory_notes: setNote.memory_notes,
                song1_notes: setNote.song1_notes,
                song2_notes: setNote.song2_notes,
                student_user: currentUserId,
                admin: parseInt(setNote.admin)
            })
        .then(() => history.push(`/notes`)) 
       } else {
        createNote({
                student_user: currentUserId,
                date: Date.now(),
                scale_notes: "",
                memory_notes: "",
                song1_notes: "",
                song2_notes: "",
                admin: ""
        })
        .then(() => history.push("/orders"))
        }
    }
}

    
    return (

    <Form>
    
    <h2 className="lessonNoteForm__title">
        {/* {productId ? "Edit Lesson Note" : "Add Lesson Note"} */}
        </h2>
    
      <Form.Group controlId="exampleForm.ControlSelect1">
        <Form.Label>Select A Student</Form.Label>
        {/* <Form.Control as="select" value={grocery.groceryMenuId} name="student_userIdid="student_userId" onChange={handleControlledInputChange} required autoFocus className="form-control">
                     <option value="0">Select a Week</option>
                     {groceryMenus.map(gm => (                                             
                            <option key={gm.id} value={gm.id}>
                            {gm.title}
                                </option>
                                ))}  
                                
                                other select box code
                    <option value="0">Select A Location</option>
                    {locations.map(location => (
                        <option key={location.id} value={location.id}>
                        {location.name}
                        </option>
                        ))}
                    </Form.Control> */}
    
      <br></br>
      <Form.Group controlId="exampleForm.ControlTextarea1">
        <Form.Label>Date</Form.Label>
        <Form.Control type="datetime-local" id="date" name="date" value={setNote.date}  onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Date">
        </Form.Control>
      </Form.Group>

    <br></br>
        <Form.Label>Scale Notes and Info</Form.Label>
        <Form.Control as="textarea" rows={3} type="text" id="scale_notes" name="scale_notes" value={setNote.scale_notes}  onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Scale info">
        </Form.Control>
      </Form.Group>
      

      <Form.Group controlId="exampleForm.ControlTextarea2">
        <Form.Label>Memory Song(s) Notes</Form.Label>
        <Form.Control as="textarea" rows={3} type="text" id="memory_notes" name="memory_notes" autoFocus className="form-control" onChange={handleControlledInputChange} placeholder="Memory Songs" value={setNote.memory_notes} />
        
    <br></br>
        <Form.Group controlId="exampleForm.ControlTextarea3">
            <Form.Label>First Practice Song</Form.Label>
            <Form.Control as="textarea" rows={3} type="text" id="song1_notes" name="song1_notes" value={setNote.song1_notes}  onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Main Practice Song">
            </Form.Control>
        </Form.Group>        
    <br></br>
        <Form.Group controlId="exampleForm.ControlTextarea4">
            <Form.Label>Second Practice Song</Form.Label>
            <Form.Control as="textarea" rows={3} type="text" id="song2_notes" name="song2_notes" value={setNote.song2_notes}  onChange={handleControlledInputChange} required autoFocus className="form-control" placeholder="Second Practice Song">
            </Form.Control>
        </Form.Group>        


        <button className="SaveEditButton" disabled={isLoading}  onClick={event => {
            event.preventDefault()
            handleClickSaveEditForm()}}> 
            {/* {productId ? "Save Lesson Note" : "Edite Lesson Note" } */}
                  </button>
      </Form.Group>

 

      <button type="submit"
                onClick={note => {
                    note.preventDefault()
                    const lessonNote = {...currentNote}
                    lessonNote.student_user = parseInt(lessonNote.student_user)
                    
                    // Create the event
                    createNote(currentNote)
                    .then(() => history.push('/notes'))
                    
                    // Once lesson is created, redirect user to note list
                }}
                className="btn btn-primary">Create Note</button>
    </Form>
    
    )
}
    