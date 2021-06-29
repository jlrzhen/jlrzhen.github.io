import { 
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link 
} from 'react-router-dom';
import AboutPage from './AboutPage';
import LearnMorePage from './LearnMorePage';
import HomePage from './HomePage';
import './NavBar.css'

function Navbar() {
    return (
        <Router>
            <div className="container">
                <ul>
                    <li>My Website</li>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/learnmore">Learn More</Link></li>
                </ul> 
            </div>                     
            < Switch>
                <Route path="/home">
                    <HomePage/>
                </Route>
                <Route path="/about">
                    <AboutPage/>
                </Route>
                <Route path="/learnmore">
                    <LearnMorePage/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Navbar;