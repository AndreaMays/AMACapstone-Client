import React from "react"
import { Link } from "react-router-dom"
import "./Auth.css"

export const Register = (props) => {
    const firstName = React.createRef()
    const lastName = React.createRef()
    const email = React.createRef()
    const birth_date = React.createRef()
    const parentfirstname = React.createRef()
    const parentlastname = React.createRef()
    const phonenumber = React.createRef()
    const password = React.createRef()
    const verifyPassword = React.createRef()
    const passwordDialog = React.createRef()

    const handleRegister = (e) => {
        e.preventDefault()

        if (password.current.value === verifyPassword.current.value) {
            const newUser = {
                "username": email.current.value,
                "first_name": firstName.current.value,
                "last_name": lastName.current.value,
                "birth_date": birth_date.current.value,
                "email": email.current.value,
                "password": password.current.value,
                "parent_first_name": parentfirstname.current.value,
                "parent_last_name": parentfirstname.current.value,
                "phone_number": phonenumber.current.value

            }

            return fetch("https://ama-student-portal.herokuapp.com/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(newUser)
            })
                .then(res => res.json())
                .then(res => {
                    if ("token" in res) {
                        localStorage.setItem("lu_token", res.token)
                        props.history.push("/")
                    }
                })
        } else {
            passwordDialog.current.showModal()
        }
    }

    return (
        <main style={{ textAlign: "center" }}>

            <dialog className="dialog dialog--password" ref={passwordDialog}>
                <div>Passwords do not match</div>
                <button className="button--close" onClick={e => passwordDialog.current.close()}>Close</button>
            </dialog>

            <form className="form--login" onSubmit={handleRegister}>
                <h1 className="h3 mb-3 font-weight-normal">Register an account</h1>
                <fieldset>
                    <label htmlFor="firstName"> First Name </label>
                    <input ref={firstName} type="text" name="firstName" className="form-control" placeholder="First name" required autoFocus />
                </fieldset>
                <fieldset>
                    <label htmlFor="lastName"> Last Name </label>
                    <input ref={lastName} type="text" name="lastName" className="form-control" placeholder="Last name" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="birthdate"> Birth Date </label>
                    <textarea ref={birth_date} name="birthdate" className="form-control" placeholder="Please enter birthday MM-DD-YYYY" />
                </fieldset>
                <fieldset>
                    <label htmlFor="parent_first_name"> Parent First Name </label>
                    <textarea ref={parentfirstname} name="parentfirstname" className="form-control" placeholder="Please enter Parent(s) First Name" />
                </fieldset>
                <fieldset>
                    <label htmlFor="parent_last_name"> Parent Last Name </label>
                    <textarea ref={parentlastname} name="parentlastname" className="form-control" placeholder="Please enter Parent(s) First Name" />
                </fieldset>
                <fieldset>
                    <label htmlFor="phone_number"> Phone Number </label>
                    <textarea ref={phonenumber} name="phonenumber" className="form-control" placeholder="Please enter Parent(s) First Name" />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputEmail"> Email address </label>
                    <input ref={email} type="email" name="email" className="form-control" placeholder="Email address" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="inputPassword"> Password </label>
                    <input ref={password} type="password" name="password" className="form-control" placeholder="Password" required />
                </fieldset>
                <fieldset>
                    <label htmlFor="verifyPassword"> Verify Password </label>
                    <input ref={verifyPassword} type="password" name="verifyPassword" className="form-control" placeholder="Verify password" required />
                </fieldset>

                <fieldset style={{
                    textAlign: "center"
                }}>
                    <button className="btn btn-1 btn-sep icon-send" type="submit">Register</button>
                </fieldset>
            </form>
            <section className="link--register">
                Already registered? <Link to="/login">Login</Link>
            </section>
        </main>
    )
}
