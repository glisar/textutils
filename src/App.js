// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react'
import Alert from './components/Alert';
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import About from './components/About';

function App() {


  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);

  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode("dark");
      document.body.style.backgroundColor = "#31323c";
      showAlert(" Dark mode has been enabled", "success");
      // document.title = "TextUtils-Dark Mode";
      // setInterval(()=>{
      //   document.title = "TextUtils is Amazing Mode."
      // },2000)

      // setInterval(()=>{
      //   document.title = "Install TextUtils Now."
      // },1500)
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert(" Light mode has been enabled", "success");
      // document.title = "TextUtils-Light Mode";

    }
  }
  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" aboutText="about TextUtils" mode={mode} toggleMode={toggleMode} />
        {/* <Navbar /> */}
        <Alert alert={alert} />

        <div className="container my-4">
          <Routes>



            <Route exact path='/about' element={<About mode={mode} />}>

            </Route>

            <Route exact path='/' element={<TextForm heading="Try TextUtils - word Counter, Character Counter, Remove extra Spaces" mode={mode} showAlert={showAlert} />}>

            </Route>
          </Routes>




        </div>

      </BrowserRouter>
    </>

  );
}

export default App;
