import React from 'react'
import ReactDOM from 'react-dom/client';
import { HelloWorld } from './HelloWorld';
import { FirstApp } from './FirstApp';

import './style.css';
import { CounterApp } from './CounterApp';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <HelloWorld/> */}
        {/* <FirstApp title={"Hola soy Goku"} subTitle={123}/> */}
        <CounterApp value = {12}/>
    </React.StrictMode>
)