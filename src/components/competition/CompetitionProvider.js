import React, { useState } from "react"

export const CompetitionContext = React.createContext()

export const CompetitionProvider = (props) => {
    const [competitions, setCompetitions] = useState([])

    const getCompetitions = () => {

        return fetch("http://localhost:8000/competitionlists", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setCompetitions)
        }
    
    const updateCompetition = (competitionObj) => {
        return fetch(`http://localhost:8000/competitionlists${competitionObj.id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Token ${localStorage.getItem('lu_token')}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(competitionObj)
        })
        .then(getCompetitions)

    }

    const createCompetition = (competition) => {
        return fetch("http://localhost:8000/competitionlists", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(competition)
        })
    }

    const deleteCompetition = competitionId => {
        return fetch(`http://localhost:8000/competitionlists${ competitionId }`, {
            method: "DELETE",
            hearders: {
                "Auhtorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(getCompetitions)
    }

    return (
        <CompetitionContext.Provider value={{competitions, getCompetitions, createCompetition, deleteCompetition, updateCompetition}} >
            { props.children }
        </CompetitionContext.Provider>

    )
}