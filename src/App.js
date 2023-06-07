import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "gray";
      showAlert("Dark Mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
      // eslint-disable-next-line no-lone-blocks
      {
        /* setInterval(() => {
          document.title = "TextUtils is amazing";
        }, 2000);
        setInterval(() => {
          document.title = "Install TextUtils Now";
        }, 1500); */
      }
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  // it check whether dark mode is enabled or disabled.


  return (
    <>
      {/*<Navbar title ='TextUtils' aboutText ='About TextUtils' />*/}
      {/*<Navbar/>*/}
      {/* <Navbar title="TextUtils" aboutText="About TextUtils" /> */}
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} title={'TextUtils'} />
        <Routes>
          <Route
            exact
            path="/about"
            element={
              <div>
                <About />
              </div>
            }
          />
          <Route
            exact
            path="/"
            element={
              <div>
                <Textform showAlert={showAlert} />
              </div>
            }
          />
        </Routes>
        <Alert alert={alert} toggleMode={toggleMode} />
      </Router>
      {/*<Footer/>*/}
    </>
  );
}

export default App;
