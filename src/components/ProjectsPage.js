import './Pages.css';

function ProjectsPage() {
    return (
        <div className="page">
            <div className="pageContent">
            <main>
                <h1>Ongoing Projects</h1> 
                <p>This page shows a collection of my 
                    completed and ongoing projects.</p>
                <h2><a href="https://github.com/jlrzhen/jlrzhen.github.io">Personal Website</a></h2>
                <span> - JavaScript, React</span><br/>
                <h2><a href="https://github.com/jlrzhen/name-generator">name-generator</a></h2>
                <span> - JavaScript, React</span><br/>
            </main>
            {/* TODO: 
                - reformat to projects > ongoing > completed  
            */}
            </div>    
        </div>   
    );
}

export default ProjectsPage;