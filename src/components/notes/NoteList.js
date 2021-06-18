import React, {useContext, useEffect } from "react"
import { useHistory } from "react-router"
import { LessonNotesContext } from "./NoteProvider"
import { StudentUserContext } from "../studentUser/StudentProvider"
import { WeeklyNoteCard } from "./Note"

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
                <h2>Student Lesson Notes </h2>
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


        </article>
        <div class="lessonNotesCard">
        {/* Below we are mapping through "groceryMenus". Inside the ".map()" function,  we set a variable to 
        we are setting a variable to "weeklyMenu. Then we are looping through each object in the array pulling out the 
    "weeklyMenu.id" and the "weeklyMenu". Also I am passing the yellow "week" into the "groceryCard" component.  */}
        {
            notes.map(note => {
                //  console.log(pItem)
                return <WeeklyNoteCard key={note.id} week={note}/>
            })
        }      
    </div>
 

      
        </>
    )
}