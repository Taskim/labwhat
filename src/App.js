import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'
import Buttons from './Buttons';

class App extends Component {
    render() {
        return (
            <Router>
                <Route path="/" component={Buttons} />
            </Router>
        )
    }
}

export default App
