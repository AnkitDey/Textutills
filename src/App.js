import { useState } from 'react';
import './App.css';
 import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
 
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light'); // weather dark mode is enabled
  const [alert, setAlert] = useState(null); // weather dark mode is enabled

  const showAlert = (message, type) =>{
      setAlert({
        msg: message,
        type: type
      })
  }
  setTimeout(() => {
    setAlert(null)
  }, 5000);
  const toggleMode = ()=>{

    if(mode === 'light')
    {
      setMode('dark');
      document.body.style.backgroundColor = '#031838';
      showAlert("Dark mode has been enabled", "success")
      document.title = 'TextUtils - Dark Mode';
      setInterval(() => {
        document.title = 'TextUtils - Dark Mode is Amazing';
      }, 2000);
      setInterval(() => {
        document.title = 'TextUtils - Install TextUtils';
      }, 1500);
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success")
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (
   <>
      
   <Router>
   <div className="body">
 {/* <Navbar title="TextUtlis2" aboutText="About us"/> */}
 {/* <Navbar /> */}
      <Navbar title="TextUtlis2" mode ={mode} toggleMode={toggleMode} />
      <Alert alert ={alert}/>
   <div className="container  my-3">
   <Switch>
          <Route exact path="/about" >
           <About mode= {mode}/>
          </Route>
          
          <Route exact path="/" >
           <TextForm showAlert={showAlert} heading ="Enter the text to analyze below" mode= {mode}/>
            
          </Route>
    </Switch> 
    
    </div>
   </div>
    </Router>  
   </>

  );
}

export default App;
