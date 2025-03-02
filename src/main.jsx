import React from 'react'
import ReactDOM from 'react-dom/client';
import { HelloWorld } from './HelloWorld';
import { FirsApp } from './FirsApp';



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorld/>
        <FirsApp/>
    </React.StrictMode>
)