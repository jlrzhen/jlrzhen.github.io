import { Link } from 'react-router-dom';
import './Pages.css';
import websiteIcon from '../images/websiteIcon192.png'
import nameGenIcon from '../images/nameGenIcon192.png'
import robotIcon from '../images/robotIcon192.png'
import icon from '../functions/GenerateIcons'

function ProjectsPage() {  
    return (
        <div className="page">
            <div className="pageContent">
            <main>
                {/* 
                TODO: 
                - clean up project files
                - add css animations
                - add back button for project pages
                - add images for robot parts
                */}
                <h1>Projects</h1> 
                <p>This page shows a collection of my 
                    completed and ongoing projects, as well as
                    the programming languages, frameworks and
                    tools that I've used to create them.
                </p>

                <h2 style={{textDecoration: 'none'}}>Ongoing</h2> 

                <br/><div className="lineDiv"/>
                <a href="https://jlrzhen.github.io">
                    <img src={websiteIcon} height="20em" width="20em" alt="Website Icon"/>
                </a><span> </span>
                <h3><a href="https://github.com/jlrzhen/jlrzhen.github.io">Personal Website</a></h3>
                <span> - {icon(["JS", "React"])} </span><br/>
                <p>The purpose of this site is to show a collection 
                    of my personal projects, while allowing me to 
                    demonstrate concepts I've learned from front-end 
                    web development using React.
                </p>
                <a href="https://jlrzhen.github.io/">View deployed site</a>
                <br/>    

                <br/><div className="lineDiv"/>
                <a href="https://github.com/jlrzhen/webRobot-UI/">
                <img src={robotIcon} height="20em" width="20em" alt="webRobot-UI Icon"/>
                </a><span> </span>
                <h3><a href="https://github.com/jlrzhen/webRobot-UI/">Webpage Controlled Robot</a></h3>
                <span> - {icon(["Python", "Flask", "JS", "React"])}</span><br/>
                <p>
                    A two-wheeled robot chassis controlled by a 
                    Raspberry Pi Zero using Flask and a user interface
                    created with React.
                </p>
                <Link to="/projects/WebRobot">Read more...</Link><br/>
                
                <h2 style={{textDecoration: 'none'}}>Completed</h2> 

                <div className="lineDiv"/>
                <a href="https://jlrzhen.github.io/name-generator">
                    <img src={nameGenIcon} height="20em" width="20em" alt="name-generator Icon"/>
                </a><span> </span>
                <h3><a href="https://github.com/jlrzhen/name-generator">name-generator</a></h3>
                <span> - {icon(["JS", "React"])}</span><br/>
                <p>name-generator is a web app I made that creates 
                    usernames for users based on a specific theme. 
                    The app is dependent on the 
                    <span> <a href="https://www.datamuse.com/api/">Datamuse API</a> </span>
                    and generates usernames by running queries with
                    specific parameters.
                </p>
                <a href="https://jlrzhen.github.io/name-generator">View deployed app</a>
                <br/><br/>
            </main>
            </div>    
        </div>   
    );
}

export default ProjectsPage;