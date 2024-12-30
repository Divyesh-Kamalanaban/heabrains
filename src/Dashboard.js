import "./App.css";
// import Webcam from 'react-webcam';
// import mainsection from "./assets/section-wave.svg";
// import mainsectionfull from "./assets/section-wave-full.svg";
// import cpulogo from "./assets/cpu.svg";
// import pomodorologo from "./assets/pomodorologo.svg"
// import emojitalk from "./assets/emojitalk.svg";
// import educator from "./assets/educator.svg";
import arrowgradient from "./assets/arrow-gradient.svg"
import { useEffect, useState } from "react";



function Dashboard() {
  const [calibrateOpen, setcalibrateOpen] = useState(false);

  useEffect(()=>{
    const webgazer = window.webgazer;
    //Used to Save calibration Data to index.db
    window.saveDataAcrossSessions = true;

    webgazer.setGazeListener(function(data) {
      if (data == null) {
        return;
      }
      var xprediction = data.x; //these x coordinates are relative to the viewport
      var yprediction = data.y; //these y coordinates are relative to the viewport
      // console.log(xprediction + ',' + yprediction); //elapsed time is based on time since begin was called
    }).begin();
  //   return () => {
  //     webgazer.pause(); // Clean up
  // };
  }, [])




  return (
    <section className=" w-screen h-screen flex flex-row items-center justify-evenly">
      <DashboardSideBar />
      <DashboardMain setcalibrateOpen={setcalibrateOpen} />
      <Calibrate calibrateOpen={calibrateOpen} setcalibrateOpen={setcalibrateOpen} />
    </section>
  );
}

function DashboardSideBar(){
  const [hoveredLink, setHoveredLink] = useState(null);

  return(
    <>
    <section className="h-[90vh] w-[20%] bg-red-400 flex flex-col items-center justify-center p-[1em] m-[0.5em] md:flex-row">
      <div className="lg:flex items-center justify-evenly hidden">
        <img className="h-[50px] transition-transform duration-300 hidden lg:block" src={arrowgradient} alt="" style={
          hoveredLink==='aiattentiontracker'?{transform: 'rotate(-60deg)'}:hoveredLink==='pomodoroscheduler'?{transform: 'rotate(0deg)'}: hoveredLink==='heabuchatbot'?{transform: 'rotate(60deg)'}:null
        }></img>
      </div>
      <div className=" h-full flex flex-col items-center justify-evenly p-[1em] m-[1em]">
      <a href="/" className="text-center" onMouseEnter={()=>setHoveredLink('aiattentiontracker')} onMouseLeave={()=>setHoveredLink(null)}>AI Attention tracker</a>
      <a href="/" className="text-center" onMouseEnter={()=>setHoveredLink('pomodoroscheduler')} onMouseLeave={()=>setHoveredLink(null)}>Pomodoro scheduler</a>
      <a href="/" className="text-center" onMouseEnter={()=>setHoveredLink('heabuchatbot')} onMouseLeave={()=>setHoveredLink(null)}>Heabu Chatbot</a>
      </div>
    </section>
    </>
  )
}
function DashboardMain({setcalibrateOpen}){
  // useEffect(()=>{
  //   const webgazer = window.webgazer;
  //   //Used to Save calibration Data to index.db
  //   window.saveDataAcrossSessions = true;

  //   webgazer.setGazeListener(function(data) {
  //     if (data == null) {
  //       return;
  //     }
  //     var xprediction = data.x; //these x coordinates are relative to the viewport
  //     var yprediction = data.y; //these y coordinates are relative to the viewport
  //     // console.log(xprediction + ',' + yprediction); //elapsed time is based on time since begin was called
  //   }).begin();
  // }, [])
  return(
    <>
      <section className="h-[90vh] w-[80%] bg-red-400 flex flex-col md:flex-row items-center justify-center m-[0.5em] p-[1em]">
        <div className="flex flex-col justify-center items-center">
          <p>Allow site permissions for enabling webcam. All of your data is processed right from your device! Click on the screen a few times and look at the cursor when you click. This calibrates the regression model.</p>
          {/* <Webcam className="rounded-xl w-[640px] h-[360px]"></Webcam> */}
          <button onClick={()=>setcalibrateOpen(true)}>Calibrate</button> <button>Start</button>
        </div>
      </section>
    </>
  )
}


function Calibrate({calibrateOpen, setcalibrateOpen}){

  return(
    <>
    <section className={`w-screen h-screen z-11 self-center absolute justify-center items-center ${calibrateOpen===true?'flex':'hidden'}`}>
      <div className="popup h-screen w-screen bg-white rounded-lg p-[1em] relative flex flex-col justify-center items-center">
        <h1 className="font-bold text-xl absolute -top-0 m-[1em]">Heabrains - Calibration</h1>
        <p className="p-[0.5em] font-light">Click on the screen a few times and look at the cursor when you click. This calibrates the regression model. Ignore if already done.</p>
        <div className="bg-pink-400 h-[1em] w-[1em] rounded-full absolute -top-0 m-[0.5em]"></div>
        <div className="bg-pink-400 h-[1em] w-[1em] rounded-full absolute -top-0 -left-0 m-[0.5em]"></div>
        <div className="bg-pink-400 h-[1em] w-[1em] rounded-full absolute -top-0 -right-0 m-[0.5em]"></div>
        <div className="bg-pink-400 h-[1em] w-[1em] rounded-full absolute -right-0 m-[0.5em]"></div>
        <div className="bg-pink-400 h-[1em] w-[1em] rounded-full absolute -left-0 m-[0.5em]"></div>
        <div className="bg-pink-400 h-[1em] w-[1em] rounded-full absolute -bottom-0 -right-0 m-[0.5em]"></div>
        <div className="bg-pink-400 h-[1em] w-[1em] rounded-full absolute -bottom-0 -left-0 m-[0.5em]"></div>
        <div className="bg-pink-400 h-[1em] w-[1em] rounded-full absolute -bottom-0 m-[0.5em]"></div>
        <button className="p-[1em] m-[1em] bg-slate-500 px-[2em] rounded-lg" onClick={()=>setcalibrateOpen(false)}>Finish</button>
      </div>
    </section>
    </>
  )
}
export default Dashboard;
