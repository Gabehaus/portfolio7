import React from "react"
import { BrowserRouter as Router, Route } from "react-router-dom"

import HomeMain from "./screens/HomeMain"
import Header from "./components/Header"

const App = () => {
  return (
    <Router>
      <Header />

      <Route path='/' component={HomeMain} exact />
    </Router>
  )
}

export default App
