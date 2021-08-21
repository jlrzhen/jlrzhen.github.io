import './Pages.css';
import websiteIcon from '../images/websiteIcon192.png'
import nameGenIcon from '../images/nameGenIcon192.png'
import flaskIcon from '../images/flaskIcon.svg'
import robotIcon from '../images/robotIcon192.png'

function ProjectsPage() {  
    return (
        <div className="page">
            <div className="pageContent">
            <main>
                {/* 
                TODO: 
                - clean up project files
                - add css animations
                - add separate pages for projects
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
                <a href="https://jlrzhen.github.io/name-generator">View deployed site</a>
                <br/><br/>
            </main>
            </div>    
        </div>   
    );
}

/* Takes an array of tools used in projects 
    and returns JSX with a list of icons */
function icon (nameList) {
    let icons = [];
    for (let i=0; i<nameList.length; i++) {
        switch(nameList[i]) {
            case "JS":
                icons.push(<span><i class="fab fa-js"></i> JavaScript</span>);
                addSeparator(i);
                break;
            case "React":
                icons.push(<span><i class="fab fa-react"></i> React</span>);
                if(i<nameList.length-1) {
                    icons.push(<span>, </span>)
                }
                break;
            case "Python":
                icons.push(<span><i class="fab fa-python"></i> Python</span>);
                addSeparator(i);
                break;
            case "Flask":
                icons.push(<span>
                    <img src={flaskIcon} alt="Flask Icon"
                        style={{
                            height: "1em",
                        }}
                    /> Flask</span>);
                addSeparator(i);
                break;
            default: icons += null;
        }
        
    }
    
    function addSeparator(i) {
        if(i<nameList.length-1) {
            icons.push(<span>, </span>)
        }
    }
    
    return icons    
}

export default ProjectsPage;