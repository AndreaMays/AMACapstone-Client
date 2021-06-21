import React from "react"
import { Route } from "react-router-dom"
import { NoteProvider } from "./notes/NoteProvider"
import { LessonNoteForm } from "./notes/NoteForm"
import { LessonNoteList} from "./notes/NoteList"
import { WeeklyNoteCard } from "./notes/Note"
import { Steps } from "./progress/ProgressBar"


export const ApplicationViews = () => {
    return (
    <>
    {/* <Route exact path="/home">
        <Home />
    </Route>     */}

    <NoteProvider>
        <Route exact path="/studentnotes">
            <LessonNoteList/>
            </Route>
        <Route exact path="/progress">
            <Steps/>
      </Route>

        <Route path="/notes/create">
            <LessonNoteForm />
        </Route>
    
    </NoteProvider>
    
        
                <main style={{
                    margin: "5rem 2rem",
                    lineHeight: "1.75rem"
                }}></main>
 
        </>
    )
}