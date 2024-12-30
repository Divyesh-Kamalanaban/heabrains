import './App.css';
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Home'
import Dashboard from './Dashboard';
import arrowgradient from "./assets/arrow-gradient.svg"
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'

function App() {
  return (
    <div className="App font-['Inter'] tracking-tight">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

function NavBar(){
  const location = useLocation();
  const pathname = location.pathname;
  return(
    <>
      <section className="w-screen h-[15vh] p-[1em] absolute m-[0.5em] flex justify-center items-center z-8">
        <div className=" rounded-full flex justify-around items-center bg-slate-200 px-[0.5em] lg:w-[50%]">
          <div className="flex flex-row justify-center items-center p-[1em]">
        <a className="text-2xl font-bold tracking-tighter bg-gradient-to-r from-[#7E1FF1] to-[#48128B] bg-clip-text text-transparent" href="/">Heabrains</a>
      <img src={arrowgradient} className="h-[2em] mx-3" alt=""></img>
      <p className='tracking-tighter bg-gradient-to-r from-[#7E1FF1] to-[#48128B] bg-clip-text text-transparent'>{pathname==='/'?'Home':'Dashboard'}</p>
      </div>

      <Link className="tracking-tighter font-semibold  bg-gradient-to-r from-[#7E1FF1] to-[#48128B] bg-clip-text text-transparent md:p-[1em]" to={pathname==='/'?'/Dashboard':'/'}>{pathname==='/'?'Dashboard':'Home'}</Link>
        </div>
      </section>
    </>
  )
}

export default App;