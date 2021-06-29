import { 
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link,
    Redirect 
} from 'react-router-dom';
import AboutPage from './AboutPage';
import ProjectsPage from './ProjectsPage';
import LearnMorePage from './LearnMorePage';
import HomePage from './HomePage';
import './NavBar.css'

function Navbar() {
    return (
        <Router>
            <ul>
                <li><Link to="/home" style={linkStyle}><p>My Website</p></Link></li>
                <li><Link to="/about" style={linkStyle}><p>About</p></Link></li>
                <li><Link to="/projects" style={linkStyle}><p>Projects</p></Link></li>
                <li><Link to="/learnmore" style={linkStyle}><p>Learn More</p></Link></li>
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
                <Route path="/projects">
                    <ProjectsPage/>
                </Route>
            </Switch>
        </Router>
    );
}

const linkStyle = {
    textDecoration: 'none' 
};

export default Navbar;