import React from 'react';
import logo from './images/twitter.png';
import Profile from './Profile';
import TweetApp from './Tweetapp';
import Home from "./Home";

import './App.css';

function App() {
    return (
        <div className="App">

            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Welcome to Twitter App.</p>
            </header>

            <section>
                <div>
                  <Home/>
                </div>
           {/*
                <div>
                    <Profile></Profile>
                </div>
                <div>
                    <TweetApp></TweetApp>
                </div>
           */}
            </section>

            <footer>

            </footer>
        </div>
    );
}

export default App;
