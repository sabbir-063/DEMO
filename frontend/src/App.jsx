import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Services from './components/Services';
import About from './components/About';
import Newsletter from './components/Newsletter';
import MyFooter from './components/MyFooter';

function App() {


    return (
        <div>
            <Navbar/>
            <Home/>
            <Services/>
            <About/>
            <Newsletter/>
            <MyFooter/>
        </div>
    );
}

export default App
