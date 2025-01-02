import React, { Component } from 'react';
import './App.css'
class App extends Component {
    render() {
        return (
            <div id='container'>
               <div id="header">
                <img className='logo'src="logo.png" alt="job-portal logo" />
                <div className="logoText"><span>Job</span> portal</div>
                <img className='signinIcon' src="../public/user.png" alt="sign in icon" />
                <label className='signinText'>Sign In</label>
                </div>
               <div id="content">Content</div>
               <div id="footer">Fotter</div>
            </div>
        );
    }
}

export default App;