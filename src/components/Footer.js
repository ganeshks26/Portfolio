import React from "react";
import {
    FaDiscord,
    FaTwitter,
    FaGithub,
    FaLinkedinIn,
    FaMailBulk,
} from "react-icons/fa";

function Footer() {
    return (
        <div>
            <div className="footer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#28005f" fill-opacity="1" d="M0,256L60,234.7C120,213,240,171,360,165.3C480,160,600,192,720,208C840,224,960,224,1080,197.3C1200,171,1320,117,1380,90.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                </svg>

                <div className="row justify-content-center footer-content">
                    <div className="col-md-6">
                        <div className="div">
                            <hr />
                            <div className="d-flex justify-content-between px-2 ficons">
                                <a href="https://twitter.com/Ganesh73325547" target="_blank" rel="noopener noreferrer" ><FaTwitter className="footer-icons"/></a>
                                <a href="mailto: ganeshks2611@gmail.com" target="_blank" rel="noopener noreferrer" ><FaMailBulk className="footer-icons"/></a>
                                <a href="https://discord.com/channels/@me" target="_blank" rel="noopener noreferrer" ><FaDiscord className="footer-icons"/></a>
                                <a href="https://www.linkedin.com/in/ganesh-k-s-7bb435228/" target="_blank" rel="noopener noreferrer" ><FaLinkedinIn className="footer-icons"/></a>
                                <a href="https://github.com/ganeshks26" target="_blank" rel="noopener noreferrer" ><FaGithub className="footer-icons"/></a>

                            </div>

                            <hr />

                            <br />

                            <p style={{ fontSize: "25px", marginTop: "-30px" }}>Created by Ganesh K S</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;