import './Pages.css';
import { Link } from 'react-router-dom';

function AboutPage() {
    return (
        <div className="page">
            <div className="pageContent">
            <main>
                <h1>About</h1>
                <span className="caption">Website Created on June 28, 2021 by Jeffrey Zhen</span>
                <p>
                    Welcome to Jeffrey's personal website!
                </p>
                <p>
                    The purpose of this site is to show a 
                    collection of my personal projects, while 
                    allowing me to demonstrate concepts I've learned 
                    from front-end web development using React. 
                </p>
                <h1>Overview of Pages</h1>
                <ul className="aboutNav">
                    <li><Link to="/home" style={linkStyle}><p className="aboutNav">My Website</p></Link></li>
                    <li><Link to="/about" style={linkStyle}><p className="aboutNav">About (You are here!)</p></Link></li>
                    <li><Link to="/projects" style={linkStyle}><p className="aboutNav">Projects</p></Link></li>
                    <li><Link to="/learnmore" style={linkStyle}><p className="aboutNav">Learn More</p></Link></li>
                </ul> 
                <Link to="/home" ><h2 className="aboutNav">My Website</h2></Link>
                <p>
                    The "My Website" page is the homepage of this site.
                    This is the default page that users are redirected
                    to upon visiting <a href="jlrzhen.github.io">jlrzhen.github.io</a>.
                </p>
                <p>
                    So far, I have implemented a clock that shows the current time 
                    using React component states and lifecycle methods. 
                </p>
                <Link to="/about" ><h2 className="aboutNav">About</h2></Link>
                <p>
                    This is the page that you are currently viewing.
                    Here you will find an overview of all the pages 
                    on this website, as well as an explanation of the
                    purpose and features of each page.
                </p>
                <Link to="/projects" ><h2 className="aboutNav">Projects</h2></Link>
                <p>
                    The Projects page shows a collection of my 
                    completed and ongoing projects. 
                </p>
                <Link to="/learnmore" ><h2 className="aboutNav">Learn More</h2></Link>
                <p>
                    This page contains all miscellaneous information
                    related to this website and myself, including a link to a GitHub 
                    repository and my GitHub account.
                </p>
            </main>
            </div>
        </div>
    );
}

const linkStyle = {
    textDecoration: 'underline',
    color: "white"
};
export default AboutPage;