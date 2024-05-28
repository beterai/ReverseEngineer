
import { Link } from "react-router-dom";

import ParticlesComponent from '../components/pb';

import './ll.css';
import WhiteCircle from '../components/WC';


const Home = () => {
    const handleMouseMove = () => {
        document.getElementById("cd").onmousemove = e => {
            for(const card of document.getElementsByClassName("card")) {
              const rect = card.getBoundingClientRect(),
                    x = e.clientX - rect.left,
                    y = e.clientY - rect.top;
          
              card.style.setProperty("--mouse-x", `${x}px`);
              card.style.setProperty("--mouse-y", `${y}px`);
            }
        }
    }
    
    const handleClick = () => {
        // Navigate to another page by changing the URL
        window.location.href = '/dashboard';
    };


    return (
        <div onMouseMove={handleMouseMove}>
            <div className='bg-[#00000] h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
                <ParticlesComponent id="particles"/>
            </div>


            <div id="cd">
                <div id="cards">
                    
                    <button id="1" className="card" onClick={handleClick}>
                        <div className="card-content">
                            <div className="card-image">
                                <i className="fa-duotone fa-apartment"></i>
                            </div>
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <i className="fa-duotone fa-apartment"></i>
                                    <div className="card-info-title">
                                        <h3>Clarifying Completions</h3>
                                        <h4>Use this mode if you want the prompt to have ChatGPT ask you clarifying questions based on your brain dump to gain insight on gaps in information and then respond with a full and clear completion.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                    

                </div>

                <div id="cards2">
                    <Link>
                    
                    </Link>
                    <button className="card" onClick={handleClick}>
                        <div className="card-content">
                            <div className="card-image">
                                <i className="fa-duotone fa-apartment"></i>
                            </div>
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <i className="fa-duotone fa-apartment"></i>
                                    <div className="card-info-title">
                                        <h3>Step by Step Plan</h3>
                                        <h4>Use this if you think your brain dump was info heavy and you want GPT's response to give you a full step by step plan on how to tackle a problem. GPT will list actionable items out for you to complete.</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>

                <div id="cards3">
                    <button className="card" onClick={handleClick}>
                        <div className="card-content">
                            <div className="card-image">
                                <i className="fa-duotone fa-apartment"></i>
                            </div>
                            <div className="card-info-wrapper">
                                <div className="card-info">
                                    <i className="fa-duotone fa-apartment"></i>
                                    <div className="card-info-title">
                                        <h3>Concise Completion</h3>
                                        <h4>Use this if your brain dump was too much for you to even understand and you want GPT to provide you a summary of all the information you provided as well as give you advice based on what you said. </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
            
        
        </div>
    
    );
}

export default Home;
