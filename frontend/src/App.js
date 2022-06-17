import React from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navigates from "./Routes";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <Navigates />
            </div>
        </BrowserRouter>
    );
}

export default App;
