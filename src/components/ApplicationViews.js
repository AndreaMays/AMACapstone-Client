import React from "react"
import { Route } from "react-router-dom"
import { NoteProvider } from "./notes/NoteProvider"
import { LessonNoteForm } from "./notes/NoteForm"

export const ApplicationViews = () => {
    return (
    <>
    {/* <Route exact path="/home">
        <Home />
    </Route>     */}

    <NoteProvider>
    {/* <Route exact path="/notes">
        <NoteList />
    </Route> */}

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