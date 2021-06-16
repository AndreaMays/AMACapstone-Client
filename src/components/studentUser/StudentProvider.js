import React, { useState } from "react"

export const StudentUserContext = React.createContext()

export const StudentProvider = (props) => {
    const [students, setStudents] = useState([])

    const getStudents = () => {

        return fetch("http://localhost:8000/students", {
            headers:{
                "Authorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
            .then(response => response.json())
            .then(setStudents)
        }

    const createStudents = (student) => {
        return fetch("http://localhost:8000/students", {
            method: "POST",
            headers: {
                "Authorization": `Token ${localStorage.getItem("lu_token")}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(student)
        })
    }

    const deleteStudent = studentId => {
        return fetch(`http://localhost:8000/students/${ studentId }`, {
            method: "DELETE",
            hearders: {
                "Auhtorization": `Token ${localStorage.getItem("lu_token")}`
            }
        })
    }

    return (
        <StudentUserContext.Provider value={{students, getStudents, createStudents, deleteStudent}} >
            { props.children }
        </StudentUserContext.Provider>

    )
}
