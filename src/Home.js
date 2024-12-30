import "./App.css";
// import Webcam from 'react-webcam';
// import mainsection from "./assets/section-wave.svg";
import mainsectionfull from "./assets/section-wave-full.svg";
import cpulogo from "./assets/cpu.svg";
import pomodorologo from "./assets/pomodorologo.svg"
import emojitalk from "./assets/emojitalk.svg";
import educator from "./assets/educator.svg";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <LandingPageTop />
      <LandingPageMid />
      <LandingPageEnd />
    </div>
  );
}

function LandingPageTop() {
  return (
    <>
      <section
        className="flex h-screen w-screen items-center justify-center flex-col bg-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${mainsectionfull})`,
        }}
      >
        <div className="content">
          <h1 className="text-2xl font-semibold text-white text-center">
            AI powered attention tracker and productivity suite for students
          </h1>
          <p className="text-xl font-light text-white text-center">
            AI Recognition from your browser only. No additional software
            required!
          </p>
        </div>
        <Link className="p-[1em] px-[1.5em] m-[1em] bg-gradient-to-r from-orange-400 to-orange-600 rounded-full text-white" to="/Dashboard">Dashboard </Link>
      </section>
    </>
  );
}

function LandingPageMid() {
  return (
    <>
      <section className="flex h-auto w-screen items-center justify-center flex-col bg-center bg-cover md:flex-row lg:h-screen bg-no-repeat">
        {/*First Card*/}

        <div className="card w-[80vw] bg-[#e5dbff] p-[2em] rounded-xl m-[2em] h-auto md:w-[33%] lg:h-[43vh] flex flex-col items-center justify-center relative">
        <div className="iconbox h-[4em] w-[4em] p-[0.85em] bg-[#48128B] flex items-center justify-center rounded-full absolute -top-[2rem]">
          <img src={cpulogo} alt='AI'></img>
        </div>
        <div>
          <h2 className="text-xl font-bold text-center">
            AI Based Attention Tracker
          </h2>
          <p className="text-lg font-light text-center">
            Get AI powered attention stats, pomodoro techniques based learning
            and personal conversational AI bot for students to discuss and help
            better their state of mind.
          </p>
          </div>
        </div>

        {/*Second Card*/}
        <div className="card w-[80vw] bg-[#e5dbff] p-[2em] rounded-xl m-[2em] h-auto md:w-[33%] lg:h-[43vh] flex flex-col items-center justify-center relative">
        <div className="iconbox h-[4em] w-[4em] p-[1em] bg-[#48128B] flex items-center justify-center rounded-full absolute -top-[2rem]">
          <img src={pomodorologo} alt='AI'></img>
        </div>
          <h2 className="text-xl font-bold text-center">
            Pomodoro based time management
          </h2>
          <p className="text-lg font-light text-center">
            Get AI powered attention stats, pomodoro techniques based learning
            and personal conversational AI bot for students to discuss and help
            better their state of mind.
          </p>
        </div>

        {/*Third Card*/}
        <div className="card w-[80vw] bg-[#e5dbff] p-[2em] rounded-xl m-[2em] h-auto md:w-[33%] lg:h-[43vh] flex flex-col items-center justify-center relative">
        <div className="iconbox h-[4em] w-[4em] p-[0.85em] bg-[#48128B] flex items-center justify-center rounded-full absolute -top-[2rem]">
          <img src={emojitalk} alt='AI'></img>
        </div>
          <h2 className="text-xl font-bold text-center">
            Conversational AI for improving mental health
          </h2>
          <p className="text-lg font-light text-center">
            Get AI powered attention stats, pomodoro techniques based learning
            and personal conversational AI bot for students to discuss and help
            better their state of mind.
          </p>
        </div>
      </section>
    </>
  );
}

function LandingPageEnd(){  
  return(
    <>
       <section
        className="flex h-auto md:h-screen w-screen items-center justify-center flex-row bg-center bg-cover bg-no-repeat"
      >
        <div className="card bg-[#e5dbff] p-[2em] rounded-xl m-[2em] h-auto md:h-[50vh] flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-[60%]"> 
          <h2 className="text-2xl font-bold">
          A few words from the Heabrains team
          </h2>
          <p className="text-lg font-light">
          Heabrains was built for project day 2025, by a passionate group of tech heads featuring Divyesh, Mukunth, and Divya, with latter being the lead of this project. The work was split accordingly to play to each of their strengths and they did excel at it, or else, this wouldn’t be possible! We would love to hear your feedback and suggestions for improving this product. With loads of love from the Heabrains team!
          </p>
          </div>
          <img className="h-1/4 md:h-10em lg:h-3/4" src={educator} alt="educator"></img>
        </div>
      </section>
    </>
  )
}
export default App;
