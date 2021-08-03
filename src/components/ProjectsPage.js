import './Pages.css';
import websiteLogo from '../images/websiteLogo192.png'
import nameGenLogo from '../images/nameGenLogo192.png'

function ProjectsPage() {
    return (
        <div className="page">
            <div className="pageContent">
            <main>
                {/* 
                TODO: 
                - clean up project files
                - add css animations
                  - add light and dark theme
                - add image or icons for projects
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
                <span> - JavaScript, React </span><br/>
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
                <span> - JavaScript, React</span><br/>
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

                <br/><div className="lineDiv"/>
                <h2 style={{textDecoration: 'none'}}>Completed</h2> 
                <br/>
            </main>
            </div>    
        </div>   
    );
}

export default ProjectsPage;