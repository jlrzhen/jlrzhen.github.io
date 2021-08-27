import { 
    HashRouter as Router, 
    Route, 
    Switch, 
    Link,
    Redirect 
} from 'react-router-dom';
import './NavBar.css'
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import LearnMorePage from './LearnMorePage';
import HomePage from './HomePage';
import WebRobotPage from './projects/WebRobotPage';

function Navbar() {
    return (
        <Router>
            
            <ul className="navbar">
                <li><Link to="/home" style={linkStyle}><p className="nav">My Website</p></Link></li>
                <li><Link to="/about" style={linkStyle}><p className="nav">About</p></Link></li>
                <li><Link to="/projects" style={linkStyle}><p className="nav">Projects</p></Link></li>
                <li><Link to="/learnmore" style={linkStyle}><p className="nav">Learn More</p></Link></li>
            </ul>   
                    
            < Switch>
                <Route exact path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home">
                    <HomePage/>
                </Route>
                <Route path="/about">
                    <AboutPage/>
                </Route>
                <Route path="/learnmore">
                    <LearnMorePage/>
                </Route>
                <Route exact path="/projects">
                    <ProjectsPage/>
                </Route>
                <Route path="/projects/WebRobot">
                    <WebRobotPage/>
                </Route>
            </Switch>
        </Router>
    );
}

const linkStyle = {
    textDecoration: 'none' 
};

export default Navbar;