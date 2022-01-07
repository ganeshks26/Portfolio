import React from 'react'
import Header from '../components/Header'
import { IoDownloadOutline } from "react-icons/io5";
import 'animate.css';


function Home() {
    return (
        <>
            <div>
                <Header />
                <div className="introduction flex-with-center"
                    style={{ backgroundImage: `url("./home.jpg")` }}>
                    <div>
                        <h1 className="animate__animated animate__fadeInLeft">GANESH</h1>
                        <h3>Front End Enthusiast</h3>
                        <div className="intro-content d-flex justify-content-between">
                            <button className="primary-button1 font-bold animate__animated animate__fadeIn">Hire Me</button>

                            <button className="primary-button font-bold animate__animated animate__fadeIn"><a href="https://bit.ly/ganeshks-resume" download>Resume <IoDownloadOutline /></a></button>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path
                        fill="#001220"
                        fill-opacity="1"
                        d="M0,224L21.8,197.3C43.6,171,87,117,131,101.3C174.5,85,218,107,262,144C305.5,181,349,235,393,240C436.4,245,480,203,524,160C567.3,117,611,75,655,64C698.2,53,742,75,785,96C829.1,117,873,139,916,176C960,213,1004,267,1047,240C1090.9,213,1135,107,1178,85.3C1221.8,64,1265,128,1309,176C1352.7,224,1396,256,1418,272L1440,288L1440,0L1418.2,0C1396.4,0,1353,0,1309,0C1265.5,0,1222,0,1178,0C1134.5,0,1091,0,1047,0C1003.6,0,960,0,916,0C872.7,0,829,0,785,0C741.8,0,698,0,655,0C610.9,0,567,0,524,0C480,0,436,0,393,0C349.1,0,305,0,262,0C218.2,0,175,0,131,0C87.3,0,44,0,22,0L0,0Z"
                    ></path>
                </svg>
            </div> */}

            <div className="who-is-ganesh flex-with-center"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
                style={{ backgroundImage: `url('/blob.svg')` }}>

                <div>
                    <h3>Hi , Hello , Namste</h3>
                    <hr />
                    <p data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0"><pre>{JSON.stringify({
                            name: "Ganesh K S",
                            place: "Belagavi,Karnataka",
                            age: 24,
                            education:"Bachelor of Engg."
                        }, null, 2)}</pre></p>
                </div>

            </div>


        </>
    )
}

export default Home
