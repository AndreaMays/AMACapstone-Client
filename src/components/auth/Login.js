import React from "react"
import { Link } from "react-router-dom"
import {Form, Button} from "react-bootstrap"
import "./Auth.css"

export const Login = props => {
    const email = React.createRef()
    const password = React.createRef()
    const invalidDialog = React.createRef()

    const handleLogin = (event) => {
        event.preventDefault()

        return fetch("https://ama-student-portal.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid && "token" in res) {
                    localStorage.setItem( "lu_token", res.token )
                    props.history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        

         <main className="container--login">
             <dialog className="dialog dialog--auth" ref={invalidDialog}>
                 <div>Email or password was not valid.</div>
                 <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
             </dialog>

             <section>
                <div className="pic4Header">
                    <img class="pianoPic4" src="https://cdn.palmbeachillustrated.com/wp-content/uploads/sites/78/2020/02/Piano.jpg" alt=""/>
                </div>
                 <form className="form--login" onSubmit={handleLogin}>
                     <h1 className="loginTitle">The Allegro Music Academy Student Portal</h1>
                     <fieldset>
                         <label className="email" htmlFor="inputEmail"> Email address </label>
                         <input ref={email} type="email" id="email" className="form-control"  placeholder="Email address" required autoFocus />
                     </fieldset>
                     <fieldset>
                         <label className="password" htmlFor="inputPassword"> Password </label>
                         <input ref={password} type="password" id="password" className="form-control"  placeholder="Password" required />
                     </fieldset> 
                     <fieldset style={{ 
                         textAlign:"center"
                     }}>
                         <br></br>
                         <button className="subBut btn-1 btn-sep icon-send" type="submit">Sign In</button>
                     </fieldset>
                 </form>
             </section> 
             <section className="link--register">
                 <Link to="/register">Not a member yet?</Link>
             </section>
         </main> 
    )
}