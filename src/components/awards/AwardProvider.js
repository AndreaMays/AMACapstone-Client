import React, { useState } from "react"

export const AwardContext = React.createContext()

export const AwardProvider = (props) => {
    const [awards, setAwards] = useState([])

    const getAwards = () => {

        return fetch("https://ama-student-portal.herokuapp.com/awardslist", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setAwards)
        }
    
        return (
            <AwardContext.Provider value={{awards, getAwards}} >
                { props.children }
            </AwardContext.Provider>
    
        )
    }