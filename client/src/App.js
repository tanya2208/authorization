import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

const App = () => {
    return <div>
        <BrowserRouter>
            <Routes>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/register" exact component={Register}></Route>
                <Route path="/home" exact component={Home}></Route>
            </Routes>
        </BrowserRouter>
    </div>
}

export default App;
