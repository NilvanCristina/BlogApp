import React, { useState } from "react"
import { createBrowserHistory } from 'history';
import './Newsletter.css'
import Footer from "../../components/Footer/Footer";


function Newsletter() {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    let history = createBrowserHistory();

    function handleSubmit() {

        if (email === '')
            setErrorMessage("Unable to process empty fields");

        if (email !== '') {
            history.push('/');
            history.go('/');
        }
    }

    return (
        <div>
            <div className="Padding"/>

            <div className="NewsletterForm">
                <h1>Subscribe to our newsletter!</h1>

                <input type="email" placeholder="email@example.com" onChange={ event => setEmail(event.target.value) }/>
                <div className="Padding"/>

                { errorMessage && <div className="Error"><b>{ errorMessage }</b></div> }
                <div className="Padding"/>

                <button type="submit" className="Active" onClick = { handleSubmit }>Send</button>
            </div>

            <div className="Padding"/>

            <Footer/>
        </div>
    )
}

export default Newsletter;