import React, {useContext, useEffect} from "react"
import { StudentUserContext} from "./StudentProvider"

export const StudentList = (props) => {
    const { students, getStudents } = useContext(StudentUserContext)

    useEffect(() => {
        getStudents()
    }, [])

    return (
        <article className="students">
            <header className="student_header">
                <h2>StudentList</h2>
            </header>
        </article>
    )
}