import './Pages.css';

function ProjectsPage() {
    return (
        <div className="page">
            <div className="pageContent">
            <main>
                <h1>Projects</h1> 
                <p>This page shows a collection of my 
                    completed and ongoing projects, as well as
                    the programming languages, frameworks and
                    tools that I've used to create them.</p>
                <h1>Ongoing</h1> 
                <h2><a href="https://github.com/jlrzhen/jlrzhen.github.io">Personal Website</a></h2>
                <span> - JavaScript, React</span><br/>
                <h2><a href="https://github.com/jlrzhen/name-generator">name-generator</a></h2>
                <span> - JavaScript, React</span><br/>
                <h1>Completed</h1> 
            </main>
            </div>    
        </div>   
    );
}

export default ProjectsPage;