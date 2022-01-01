import React, {useState} from "react"
import {createBrowserHistory} from 'history';
import './Newsletter.css'
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import {asyncHandleNewsletter} from "../../utils/ApiCalls";


function Newsletter() {
    const [user_email, setUserEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const wallpaperImage = 'url("https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260")';

    let history = createBrowserHistory();

    function handleNewsletter() {

        if (user_email === '')
            setErrorMessage("Unable to process empty fields!");

        if (user_email !== '') {

            asyncHandleNewsletter(user_email).then(() => {
                setErrorMessage("");
                history.push('/');
                history.go('/');
            });
        }
    }

    return (
        <div>
            <Navbar/>

            <div className="Page" style={{backgroundImage: `${wallpaperImage}`}}>
                <div className="Padding"/>
                <div className="Padding"/>

                <div className="Form">
                    <h1>Subscribe to our newsletter!</h1>

                    <input type="email" placeholder="email@example.com"
                           onChange={event => setUserEmail(event.target.value)}/>
                    <div className="Padding"/>

                    {errorMessage && <div className="Error"><b>{errorMessage}</b></div>}
                    <div className="Padding"/>

                    <button type="submit" className="Active" onClick={handleNewsletter}>Send</button>
                </div>

                <div className="Padding"/>
                <div className="Padding"/>
                <div className="Padding"/>
            </div>

            <Footer/>
        </div>
    )
}

export default Newsletter;