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
                <h2 style={{textDecoration: 'none'}}>Ongoing</h2> 
                <br/>
                <h3><a href="https://github.com/jlrzhen/jlrzhen.github.io">Personal Website</a></h3>
                <span> - JavaScript, React</span><br/>
                <p>The purpose of this site is to show a collection 
                    of my personal projects, while allowing me to 
                    demonstrate concepts I've learned from front-end 
                    web development using React.</p>
                <h3><a href="https://github.com/jlrzhen/name-generator">name-generator</a></h3>
                <span> - JavaScript, React</span><br/>
                <h2 style={{textDecoration: 'none'}}>Completed</h2> 
                <br/>
            </main>
            </div>    
        </div>   
    );
}

export default ProjectsPage;