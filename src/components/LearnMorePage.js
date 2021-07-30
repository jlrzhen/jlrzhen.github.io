import './Pages.css';
import GitHubMark from '../images/GitHub-Mark-120px-plus.png';

function LearnMorePage() {
    return (
        <div className="page">
            <div className="pageContent">
            <main>
                <h1>Learn More</h1>
                <p>This page contains all miscellaneous information
                    related to this website and myself.
                </p>
                
                <a href="https://github.com/jlrzhen/jlrzhen.github.io">
                    <img src={GitHubMark}  alt="GitHub Mark" style={{height:"1.5em",width:"1.5em"}}/>
                </a>
                <span> </span>
                <h2><a href="https://github.com/jlrzhen/jlrzhen.github.io">GitHub repository</a></h2>
                <br/>

                <a href="https://github.com/jlrzhen">
                    <img src={GitHubMark} alt="GitHub Mark" style={{height:"1.5em",width:"1.5em"}}/>
                </a>
                <span> </span>
                <h2><a href="https://github.com/jlrzhen">GitHub profile</a></h2><br/>
                <h1>About Me</h1>
                <p>I am currently a student who is planning to study Computer
                    Engineering at the University of Waterloo. My main interests
                    are robotics and technology. I am always looking forward
                    to connect with, help out, and learn from like-minded people.  
                </p>
            </main>
            </div>
        </div>
    );
}
export default LearnMorePage;