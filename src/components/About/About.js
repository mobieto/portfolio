import React from 'react'
import { Link } from 'react-scroll'
import './About.css'
import downloadIcon from '../../assets/download.png'
import contactIcon from '../../assets/contact.png'
import discordIcon from '../../assets/discord.png'
import githubIcon from '../../assets/github.png'
import instagramIcon from '../../assets/instagram.png'
import linkedinIcon from '../../assets/linkedin.png'

const About = () => {
    return (
        <div className="content">
            <span className="aboutText">
                <span className="introText">Hey! My name is</span>
                <span className="nameText accent"> Mobin.<span className="pronounceText"> (mo - bean)</span></span>
                <br/>
                <span className="aboutInfoText"> 
                    I'm a 2nd year student at the University of Leicester, studying <span className="accent">Computer Science. </span>
                    <br/>
                    I'm interested in <span className="accent">machine learning</span> and <span className="accent">robotics.</span>
                </span>
            </span>

            <div className="buttonsHolder">
                <Link><button className="downloadCVButton"><img className="downloadCVImg" src={ downloadIcon } alt="Download CV"/>Download CV</button></Link>
                <Link><button className="contactButton"><img className="contactImg" src={ contactIcon } alt="Contact me"/>Contact me</button></Link>
            </div>

            <div className="socialPlatforms">
                <span className="socialText">Check me out on these platforms!</span>

                <div className="socialsContainer">
                    <Link><button className="githubButton"><img className="githubIcon" src={ githubIcon } alt="GitHub"/></button></Link>
                    <Link><button className="discordButton"><img className="discordIcon" src={ discordIcon } alt="Discord"/></button></Link>
                    <Link><button className="instagramButton"><img className="instagramIcon" src={ instagramIcon } alt="Instagram"/></button></Link>
                    <Link><button className="linkedinButton"><img className="linkedinIcon" src={ linkedinIcon } alt="LinkedIn"/></button></Link>
                </div>
            </div>
        </div>
    )
}

export default About