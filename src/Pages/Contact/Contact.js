import React, { useState } from "react"
import { createBrowserHistory } from 'history';
import './Contact.css'
import Footer from "../../components/Footer/Footer";

function Contact() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const [subject, setSubject] = useState("");
    const [message, setMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    let history = createBrowserHistory({ forceRefresh:true });

    function handleSubmit() {

        if (firstName === '' || lastName === '' || email === '' || subject === '' || message === '')
            setErrorMessage("Unable to process empty fields");

        if (firstName !== '' && lastName !== '' && email !== '' && subject !== '' && message !== '') {
            history.push('/');
            history.go('/');
        }
    }

    return (
        <div>
            <div className="Padding"/>
            <div className="Padding"/>

            <div className="Form">
                <h1>Contact us!</h1>

                <input type="text" placeholder="First name" onChange={ event => setFirstName(event.target.value) }/>
                <div className="Padding"/>

                <input type="text" placeholder="Last name" onChange={ event => setLastName(event.target.value) }/>
                <div className="Padding"/>

                <input type="email" placeholder="email@example.com" onChange={ event => setEmail(event.target.value) }/>
                <div className="Padding"/>

                <select onChange = { event => setSubject(event.target.value) }>

                    <option value="Collaboration">Collaboration</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Consultancy">Consultancy</option>
                    <option value="Gratitude">Gratitude</option>

                </select>
                <div className="Padding"/>

                <textarea rows="4" placeholder="Message" onChange = { event => setMessage(event.target.value) }/>
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

export default Contact;