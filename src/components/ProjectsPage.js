import './Pages.css';

function ProjectsPage() {
    return (
        <div className="page">
            <div className="pageContent">
            <main>
                {/* 
                TODO: 
                - add projects page dividers to css
                - clean up project files
                - add css animations
                - add image or icons for projects 
                */}
                <h1>Projects</h1> 
                <p>This page shows a collection of my 
                    completed and ongoing projects, as well as
                    the programming languages, frameworks and
                    tools that I've used to create them.</p>
                <h2 style={{textDecoration: 'none'}}>Ongoing</h2> 
                
                <br/><div style={{height: 1, backgroundColor: "Indigo", margin: '20px 0px'}}/>
                <h3><a href="https://github.com/jlrzhen/jlrzhen.github.io">Personal Website</a></h3>
                <span> - JavaScript, React </span><br/>
                <p>The purpose of this site is to show a collection 
                    of my personal projects, while allowing me to 
                    demonstrate concepts I've learned from front-end 
                    web development using React.
                </p>
                <a href="https://jlrzhen.github.io/">View deployed site</a>
                <br/>
                
                <br/><div style={{height: 1, backgroundColor: "Indigo", margin: '20px 0px'}}/>
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
                
                <br/><div style={{height: 1, backgroundColor: "Indigo", margin: '20px 0px'}}/>
                <h2 style={{textDecoration: 'none'}}>Completed</h2> 
                <br/>
            </main>
            </div>    
        </div>   
    );
}

export default ProjectsPage;