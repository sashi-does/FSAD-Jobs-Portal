import React, { Component } from 'react';
import './App.css'
class App extends Component {
    render() {
        return (
            <div id='container'>
                <div id="popup">
                    <div id="popupwindow">
                        <div id="popupheader">
                            <label className='popupheaderText'>Login</label>
                        </div>
                        <div id="signin">
                            <label htmlFor="username" className='usernamelabel'>Username</label>
                            <input id="username" type="text" className='input-form' placeholder='Email' />
                            <label className='passwordlabel'>Password</label>
                            <input id="password" type="password" className='input-form' placeholder='Password' />
                            <div id="forgetpassword">
                            Forget <label className='forgetlabel'> Password</label>
                            </div>
                            <button type="submit" id="signinButton">Sign In</button>
                            <div className='div1'></div>
                            <div className='div2'>
                                Don't have an account? <a href="/signup">Sign Up</a>
                            </div>
                        </div>
                    </div>
                </div>
               <div id="header">
                <img className='logo'src="logo.png" alt="job-portal logo" />
                <div className="logoText"><span>Job</span> portal</div>
                <img className='signinIcon' src="../public/user.png" alt="sign in icon" />
                <label className='signinText'>Sign In</label>
                </div>
               <div id="content">
                <div className='text1'>India's No.1 Job Portal</div>
                <div className='text2'>Your job search ends here</div>
                <div className='text3'>discover career opportunities</div>
                <div className='searchBar'>
                  <input type="text" className='searchjobText' placeholder='Search for jobs' />
                  <input type="search" className='joblocationText' placeholder='Search by location'  />
                  <button className='searchjob'>Search Jobs</button>
                </div>
               </div>
               <div id="footer">
                <label className='copyrightText'>Copyright 2025 Jobs Portal. All rights reserved.</label>
                <img className='socialmediaIcon' src="facebook.png" alt="facebook icon" />
                <img className='socialmediaIcon' src="twitter.png" alt="twitter icon" />
                <a href="https://www.linkedin.com/in/sakshi-gupta-1234567890/"><img className='socialmediaIcon' src="linkedin.png" alt="linkedin icon" /> </a>
               </div>
            </div>
        );
    }
}

export default App;