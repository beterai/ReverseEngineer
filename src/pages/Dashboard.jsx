// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

import BackgroundCircles from "../components/BackgroundCircles"


import Lottie from 'react-lottie';
import animationData from '../assets/anim2.json'
import animationData2 from '../assets/anim3.json'
import WhiteCircle from '../components/WC';
import { ChatOpenAI } from "@langchain/openai";


const Dashboard = () => {
    const api_key = "sk-proj-VxKnxIOi2ArdnLDwI31fT3BlbkFJAgt4T1W5u7FAoWsNw6kv"
    const [role, setRole] = useState('');
    const [context, setContext] = useState('');
    const [examples, setExamples] = useState('');
    const [specifics, setSpecifics] = useState('');
    const [task, setTask] = useState('');
    const [notes, setNotes] = useState('');












    // const [text, count] = useTypewriter({
    //     words: [
    //         "< Hey there! Welcome to TaxCut! />",
    //         "A product designed to help you minimize ",
    //         "Empowers entrepreneurs to navigate the",
    //     ],
    //     loop: true,
    //     delaySpeed: 1000,
    // });
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        renderer: 'svg'
    }
    const defaultOptions2 = {
        loop: true,
        autoplay: true,
        animationData: animationData2,
        renderer: 'svg'
    
    }

    const [inputString, setInputString] = useState('');
    const [isDisplayed, setIsDisplayed] = useState(true);
    const [cm, setCm] = useState('');
    const toggleDisplay = () => {
        setCm(inputString)

        setIsDisplayed(!isDisplayed);
    };


    
    const handleChange = (event) => {
        setInputString(event.target.value);

    }

    const funcrole = async () => {
        const prompt = "This is a braindump of all the studd someone said:" + inputString + "Please create a role for yourself and answer with your role that will most benefit the user get clarification in their next prompt! only make your response 3 to 4 sentences"

        const model = new ChatOpenAI({
            modelName: "gpt-3.5-turbo",
            temperature: 0.9,
            openAIApiKey: api_key
        });
    
        const response = await model.invoke(prompt);

        setRole(response.content);
    }



    const funccontext = async () => {
        const prompt = "This is a braindump of all the studd someone said:" + inputString + "Please create a context for yourself and answer with context hidden in the braindump that will most benefit the user get clarification in their next prompt! only make your response 3 to 4 sentences"

        const model = new ChatOpenAI({
            modelName: "gpt-3.5-turbo",
            temperature: 0.9,
            openAIApiKey: api_key
        });
    
        const response = await model.invoke(prompt);

        setContext(response.content);
    }




    const functask = async () => {
        const prompt = "This is a braindump of all the studd someone said:" + inputString + "Please create a task for yourself and answer with the task hidden in the braindump that will most benefit the user get clarification in their next prompt! only make your response 3 to 4 sentences"

        const model = new ChatOpenAI({
            modelName: "gpt-3.5-turbo",
            temperature: 0.9,
            openAIApiKey: api_key
        });
    
        const response = await model.invoke(prompt);

        setTask(response.content);
    }




    const funcnotes = async () => {
        const prompt = "This is a braindump of all the studd someone said:" + inputString + "Please create notes for yourself and answer with notes hidden in the braindump that will most benefit the user get clarification in their next prompt! only make your response 3 to 4 sentences"

        const model = new ChatOpenAI({
            modelName: "gpt-3.5-turbo",
            temperature: 0.9,
            openAIApiKey: api_key
        });
    
        const response = await model.invoke(prompt);

        setNotes(response.content);
    }




    const funcexamples = async () => {
        const prompt = "This is a braindump of all the studd someone said:" + inputString + "Please create examples for yourself and answer with examples that you make from the braindump that will most benefit the user get clarification in their next prompt! only make your response 3 to 4 sentences"

        const model = new ChatOpenAI({
            modelName: "gpt-3.5-turbo",
            temperature: 0.9,
            openAIApiKey: api_key
        });
    
        const response = await model.invoke(prompt);

        setExamples(response.content);
    }




    const funcspecifics = async () => {
        const prompt = "This is a braindump of all the studd someone said:" + inputString + "Please create specifics for yourself and answer with specifcs given the braindump that will most benefit the user get clarification in their next prompt!only make your response 3 to 4 sentences "

        const model = new ChatOpenAI({
            modelName: "gpt-3.5-turbo",
            temperature: 0.9,
            openAIApiKey: api_key
        });
    
        const response = await model.invoke(prompt);

        setSpecifics(response.content);
    }



    return (
        <div className='relative bg-[#00000] h-screen w-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            {/* c2eefc */}

            <BackgroundCircles />


            {/* <img
                className='relative rounded-full h-32 w-32  object-cover'
                src={taxCutImage}
                alt="profile pic"
            /> */}
            <div className='absolute mt-[20rem] z-1'>
                <Lottie
                    
                    options={defaultOptions}
                    height={300}
                    width={300}
                    loop={true}
                    
                />

            </div>
            {/* <div className='absolute z-1'>
                <WhiteCircle diameter="500px">
                    <div className='relative z-10 bottom-[40rem] left-100'>
                        <textarea
                            className="contactInput bg-black placeholder-gray-500 rounded-xl w-[45rem] h-[10rem] text-black"
                            onChange={handleChange}
                            value={inputString}
                            placeholder="Before your conversation with your financial advisor begins, submit any additional information you think is important to your financial situation."
                        />
                    </div>

                    
                </WhiteCircle>

            </div> */}
            <button 
                className='absolute w-[10rem] h-[10rem] top-[40rem] left-[5rem]'
                onClick={toggleDisplay}
            >
                    Toggle Text Area</button>
            <div className='z-20'>

                {isDisplayed && (
                    <textarea
                        className="bg-white placeholder-gray-500 rounded-xl w-[45rem] h-[40rem] text-black z-20 opacity-1 p-5"
                        onChange={handleChange}
                        value={inputString}
                        placeholder="Brain dump all you want to prompt ChatGPT!"
                    />
                )}
            </div>



            {/* THIS IS THE MODAL FOR THE ROLE */}

            <div className='absolute top-[2rem] left-[2rem]'>
                <button
                    //make sure to add an onClick function for each of these buttons to open up modals
                    onClick={() => {funcrole(); document.getElementById("create_modal").showModal()}}
                    className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#cff3ff] rounded-lg hover:bg-[#a6d4e3]"
                >
                    Role
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>

                <dialog
                    id="create_modal"
                    className="absolute p-10 rounded-lg border border-dashed bg-black-200 w-[40rem] bottom-[2rem]"
                >
                    {role}
                    <button
                    type="button"
                    onClick={() => {
                        document.getElementById("create_modal").close();
                    }}
                    className="absolute top-[1rem] right-[1rem]"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    </button>
            
                    <div className="modal-action">
                
                    </div>

                </dialog>
            </div>







            {/* THIS IS THE MODAL FOR CONTEXT */}

            <div className='absolute top-[5rem] left-[2rem]'>
                <button
                    //make sure to add an onClick function for each of these buttons to open up modals
                    onClick={() => {funccontext(); document.getElementById("create_modal2").showModal()}}
                    className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#cff3ff] rounded-lg hover:bg-[#a6d4e3]"
                >
                    Context
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>

                <dialog
                    id="create_modal2"
                    className="absolute p-10 rounded-lg border border-dashed bg-black-200 w-[40rem] bottom-[2rem]"
                >
                    {context}
                    <button
                    type="button"
                    onClick={() => {
                        document.getElementById("create_modal2").close();
                    }}
                    className="absolute top-[1rem] right-[1rem]"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    </button>
            
                    <div className="modal-action">
                
                    </div>

                </dialog>
            </div>



            {/* THIS IS FOR THE TASK */}

            <div className='absolute top-[8rem] left-[2rem]'>
                <button
                    //make sure to add an onClick function for each of these buttons to open up modals
                    onClick={() => {functask(); document.getElementById("create_modal3").showModal()}}
                    className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#cff3ff] rounded-lg hover:bg-[#a6d4e3]"
                >
                    Task
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>

                <dialog
                    id="create_modal3"
                    className="absolute p-10 rounded-lg border border-dashed bg-black-200 w-[40rem] bottom-[2rem]"
                >
                    {task}
                    <button
                    type="button"
                    onClick={() => {
                        document.getElementById("create_modal3").close();
                    }}
                    className="absolute top-[1rem] right-[1rem]"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    </button>
            
                    <div className="modal-action">
                
                    </div>

                </dialog>
            </div>



            {/* THIS IS FOR THE SPECIFICS */}

            <div className='absolute top-[11rem] left-[2rem]'>
                <button
                    //make sure to add an onClick function for each of these buttons to open up modals
                    onClick={() => {funcspecifics(); document.getElementById("create_modal4").showModal()}}
                    className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#cff3ff] rounded-lg hover:bg-[#a6d4e3]"
                >
                    Specifics
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>

                <dialog
                    id="create_modal4"
                    className="absolute p-10 rounded-lg border border-dashed bg-black-200 w-[40rem] bottom-[2rem]"
                >
                    {specifics}
                    <button
                    type="button"
                    onClick={() => {
                        document.getElementById("create_modal4").close();
                    }}
                    className="absolute top-[1rem] right-[1rem]"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    </button>
            
                    <div className="modal-action">
                
                    </div>

                </dialog>
            </div>
            

            {/* THIS IS FOR EXAMPLES */}

            <div className='absolute top-[14rem] left-[2rem]'>
                <button
                    //make sure to add an onClick function for each of these buttons to open up modals
                    onClick={() => {funcexamples(); document.getElementById("create_modal5").showModal()}}
                    className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#cff3ff] rounded-lg hover:bg-[#a6d4e3]"
                >
                    Examples
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>

                <dialog
                    id="create_modal5"
                    className="absolute p-10 rounded-lg border border-dashed bg-black-200 w-[40rem] bottom-[2rem]"
                >
                    {examples}
                    <button
                    type="button"
                    onClick={() => {
                        document.getElementById("create_modal5").close();
                    }}
                    className="absolute top-[1rem] right-[1rem]"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    </button>
            
                    <div className="modal-action">
                
                    </div>

                </dialog>
            </div>


            {/* THIS IS FOR NOTES */}

            <div className='absolute top-[17rem] left-[2rem]'>
                <button
                    //make sure to add an onClick function for each of these buttons to open up modals
                    onClick={() => {funcnotes(); document.getElementById("create_modal6").showModal()}}
                    className="inline-flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-black bg-[#cff3ff] rounded-lg hover:bg-[#a6d4e3]"
                >
                    Notes
                    <svg
                        className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </button>

                <dialog
                    id="create_modal6"
                    className="absolute p-10 rounded-lg border border-dashed bg-black-200 w-[40rem] bottom-[2rem]"
                >
                    {notes}
                    <button
                    type="button"
                    onClick={() => {
                        document.getElementById("create_modal6").close();
                    }}
                    className="absolute top-[1rem] right-[1rem]"
                    >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6"
                    >
                        <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                    </svg>
                    </button>
            
                    <div className="modal-action">
                
                    </div>

                </dialog>
            </div>









        </div>
    );
}

export default Dashboard;
