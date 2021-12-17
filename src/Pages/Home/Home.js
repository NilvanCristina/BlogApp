import React from 'react';
import Footer from "../../components/Footer/Footer";
import './Home.css';
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import Post from "../../components/Post/Post";

function Home() {

    return (
        <div className="Home">
            <Navbar />
            <Header />
            <Post />
            <Footer />
        </div>
    )
}

export default Home;