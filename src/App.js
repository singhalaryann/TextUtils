import React from "react";
import './App.css';
import Navbar from './components/Navbar.js'
import TextForm from "./components/TextForm.js";
import About from "./components/About.js";
import { useState } from "react";
import Alert from "./components/Alert.js";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  const [mode, setmode] = useState("light")
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
  const togglemode = () => {
    if (mode === 'light') {
      setmode("dark")
      document.body.style.backgroundColor = '#2b3036'
      showAlert('Dark mode has been enabled', 'Success')
    } else {
      setmode("light")
      document.body.style.backgroundColor = 'white'
      showAlert('Light mode has been enabled', 'Success')
    }
  }

  return (
    <>
      <Router>
        <Navbar title="TextUtils" home="Home" About="About Us" mode={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-4">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the Text Below" mode={mode} />} />
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App;
