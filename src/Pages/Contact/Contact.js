import React, {useState} from "react"
import {createBrowserHistory} from 'history';
import './Contact.css'
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import {asyncHandleContact} from "../../utils/ApiCalls";

function Contact() {
    const [first_name, setFirstName] = useState("");
    const [last_name, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const wallpaperImage = 'url("https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")';

    let history = createBrowserHistory();

    function handleContact() {

        if (first_name === '' || last_name === '' || email === '' || message === '')
            setErrorMessage("Unable to process empty fields!");

        if (first_name !== '' && last_name !== '' && email !== '' && message !== '') {

            asyncHandleContact(first_name, last_name, email, message).then(() => {
                setErrorMessage("");
                history.push('/');
                history.go('/');
            })
        }
    }

    return (
        <div>
            <Navbar/>

            <div className="Page" style={{backgroundImage: `${wallpaperImage}`}}>
                <div className="Padding"/>

                <div className="Form">
                    <h1>Contact us!</h1>

                    <input type="text" placeholder="First name" onChange={event => setFirstName(event.target.value)}/>
                    <div className="Padding"/>

                    <input type="text" placeholder="Last name" onChange={event => setLastName(event.target.value)}/>
                    <div className="Padding"/>

                    <input type="email" placeholder="email@example.com"
                           onChange={event => setEmail(event.target.value)}/>
                    <div className="Padding"/>

                    <textarea rows="4" placeholder="Message" onChange={event => setMessage(event.target.value)}/>
                    <div className="Padding"/>

                    {errorMessage && <div className="Error"><b>{errorMessage}</b></div>}
                    <div className="Padding"/>

                    <button type="submit" className="Active" onClick={handleContact}>Send</button>
                </div>

                <div className="Padding"/>
            </div>

            <Footer/>
        </div>
    )
}

export default Contact;