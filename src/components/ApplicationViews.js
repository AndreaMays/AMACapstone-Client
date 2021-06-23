import React from "react"
import { Route } from "react-router-dom"
import { NoteProvider } from "./notes/NoteProvider"
import { LessonNoteForm } from "./notes/NoteForm"
import { LessonNoteList} from "./notes/NoteList"
import { WeeklyNoteCard } from "./notes/Note"
import { Steps } from "./progress/ProgressBar"
import {CompetitionProvider} from "./competition/CompetitionProvider"
import { CompetitionList } from "./competition/CompetitionList"
import { Home } from "./home/Home"
import { AwardProvider } from "./awards/AwardProvider"
import { AwardsList } from "./awards/AwardsList"



export const ApplicationViews = () => {
    return (
    <>
    <Route exact path="/home">
        <Home />
    </Route>    

<NoteProvider>
    <CompetitionProvider>
        <AwardProvider>
        <Route exact path="/studentnotes">
            <LessonNoteList/>
            </Route>
        <Route exact path="/progress">
            <Steps/>
      </Route>

        <Route path="/notes/create">
            <LessonNoteForm />
        </Route>
    
        <Route exact path="/competitionlists">  
            <CompetitionList />
        </Route>
        <Route exact path="/awards">  
            <AwardsList />
        </Route>
        </AwardProvider>
    </CompetitionProvider>
</NoteProvider>       
                <main style={{
                    margin: "5rem 2rem",
                    lineHeight: "1.75rem"
                }}></main>
 
        </>
    )
}