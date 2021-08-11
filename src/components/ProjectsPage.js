import './Pages.css';
import websiteLogo from '../images/websiteLogo192.png'
import nameGenLogo from '../images/nameGenLogo192.png'
import flaskLogo from '../images/flaskIcon.svg'

function ProjectsPage() {  
    return (
        <div className="page">
            <div className="pageContent">
            <main>
                {/* 
                TODO: 
                - clean up project files
                - create function to input list of tools 
                    and output icons and text
                - add css animations
                - add separate pages for projects 
                */}
                <h1>Projects</h1> 
                <p>This page shows a collection of my 
                    completed and ongoing projects, as well as
                    the programming languages, frameworks and
                    tools that I've used to create them.</p>
                <h2 style={{textDecoration: 'none'}}>Ongoing</h2> 
                
                <br/><div className="lineDiv"/>
                <a href="https://jlrzhen.github.io">
                    <img src={websiteLogo} height="20em" width="20em" alt="Website Logo"/>
                </a><span> </span>
                <h3><a href="https://github.com/jlrzhen/jlrzhen.github.io">Personal Website</a></h3>
                <span> - {icon("JS")}, {icon("React")} </span><br/>
                <p>The purpose of this site is to show a collection 
                    of my personal projects, while allowing me to 
                    demonstrate concepts I've learned from front-end 
                    web development using React.
                </p>
                <a href="https://jlrzhen.github.io/">View deployed site</a>
                <br/>
                
                <br/><div className="lineDiv"/>
                <a href="https://jlrzhen.github.io/name-generator">
                    <img src={nameGenLogo} height="20em" width="20em" alt="name-generator Logo"/>
                </a><span> </span>
                <h3><a href="https://github.com/jlrzhen/name-generator">name-generator</a></h3>
                <span> - {icon("JS")}, {icon("React")}</span><br/>
                <p>name-generator is a web app I made that creates 
                    usernames for users based on a specific theme. 
                    The app is dependent on the 
                    <span> <a href="https://www.datamuse.com/api/">Datamuse API</a> </span>
                    and generates usernames by running queries with
                    specific parameters.
                </p>
                <a href="https://jlrzhen.github.io/name-generator">View deployed site</a>
                <br/>

                <br/><div className="lineDiv"/>
                <h3>Webpage Controlled Robot</h3>
                <span> - {icon("Python")}, {icon("Flask")}, {icon("JS")}, {icon("React")}</span><br/>
                <p>
                    A two-wheeled robot chassis controlled by a 
                    Raspberry Pi Zero using Flask and a user interface
                    created with React.
                </p>
                
                <br/><div className="lineDiv"/>
                <h2 style={{textDecoration: 'none'}}>Completed</h2> 
                <br/>
            </main>
            </div>    
        </div>   
    );
}

function icon (name) {
    switch(name) {
        case "JS":
            return (<span><i class="fab fa-js"></i> JavaScript</span>);
        case "React":
            return (<span><i class="fab fa-react"></i> React</span>);
        case "Python":
            return (<span><i class="fab fa-python"></i> Python</span>);
        case "Flask":
            return(<span>
                <img src={flaskLogo} alt="Flask Icon"
                    style={{
                        height: "1em",
                    }}
                /> Flask</span>)
        default: return null;
    }
}

export default ProjectsPage;