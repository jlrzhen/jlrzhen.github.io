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
            <div className="container">
                <ul>
                    <li><Link to="/home">My Website</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/projects">Projects</Link></li>
                    <li><Link to="/learnmore">Learn More</Link></li>
                </ul> 
            </div>                     
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

export default Navbar;