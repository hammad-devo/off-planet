import React from 'react'
import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import PersonalForm from './Components/Form/Form';
import Home from './Container/Home/Home';
import './App.css'

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Routes>
          <Route path={"/apply"} element={<PersonalForm />} />
          <Route path={"/"} element={<Home />} />
        </Routes>
      </Router></React.Fragment>
  )
}

export default App