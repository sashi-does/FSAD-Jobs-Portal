import React, { Component } from 'react'; 
import logo from '../public/logo.png';
import './App.css'; 
 
class App extends Component { 
    render() { 
        return ( 
            <div id='container'> 
                <div id='header'>
                  <img src={logo} className='logo' alt='logo' />
                  <div className='logo-text'>
                    <span className='logo-text-1'>Jobs</span>Portal
                  </div>
                </div> 
                <div id='content'>Content</div> 
                <div id='footer'>Footer</div> 
            </div> 
        ); 
    } 
} 
 
export default App;