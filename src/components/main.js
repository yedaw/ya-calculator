import React from 'react';
import Homepage from '../components/homepage.js';
import {About} from '../components/about.js';
import '../styles/master.scss';
import {Routes, Route} from "react-router-dom";


export const Main = () =>{
    return(
        <div className="main">
            <Routes>
                {/* 404 */}
                <Route path='*' element={<Homepage />} />
    
                <Route exact path="/" element={< Homepage />} />
                <Route exact path="/About" element={< About />} />
            </Routes>
        </div>
    );
}