import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './Components/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CallDetails from './Components/CallDetails';
import Footer from './Components/Footer';
import Body from './Components/Body';

const AppLayout = () => {
    return (
        <div className="flex flex-col w-[500px]   h-screen overflow-auto  m-auto shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg ">
            <Header />
            <div className=" overflow-y-auto ">
                <Routes>
                    <Route path="/activities" element={<App />} />
                    <Route path="/activities/:callId" element={<CallDetails />} />
                    <Route path="/" element={<Body />} />
                </Routes>
            </div>
            <Footer />
        </div>

    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <BrowserRouter>
        <React.StrictMode>
            <AppLayout />
        </React.StrictMode>
    </BrowserRouter>
);
