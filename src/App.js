import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";




function App() {

  const [mode, setmode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setmode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert('Dark mode has been activated', 'success')
      document.title = "TextUtils - Dark Mode"
    } else {
      setmode('light')
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been activated', 'success')
      document.title = "TextUtils - Light Mode"


    }
  }

  return (
    <>
      {/* <Router> */}
        <Navbar mode={mode} toggleMode={toggleMode} title="TextUtils" aboutText="About" home="Home" />
        <Alert alert={alert} />


        <div className="container my-3">

          {/* <Routes> */}
           


            {/* <Route exact path="/about" element={<About/>}/> */}

              {/* <About/> */}
            

            {/* <Route exact path="/" element={<TextForm showAlert={showAlert} mode={mode} heading="Enter text to analyze below " />}> */}
              <TextForm showAlert={showAlert} mode={mode} heading="Enter text to analyze below " />


            {/* </Route> */}
          {/* </Routes> */}


        </div>

      {/* </Router> */}

    </>
  );
}

export default App;
