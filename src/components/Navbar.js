import { 
    BrowserRouter as Router, 
    Route, 
    Switch, 
    Link 
} from 'react-router-dom';
import AboutPage from './AboutPage';
import LearnMorePage from './LearnMorePage';
import HomePage from './HomePage';

function Navbar() {
    return (
        <Router>
            <div>
                <Link to="/home">Home</Link>
            </div>
            <div>
                <Link to="/about">About</Link>
            </div>
            <div>
                <Link to="/learnmore">Learn More</Link>
            </div>           
            <Switch>
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