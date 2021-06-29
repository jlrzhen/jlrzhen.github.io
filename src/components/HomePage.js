import './HomePage.css';
import logo from '../logo.svg';

function HomePage() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="container">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            <p>
                Made with <code>Create React App</code>
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
                Learn React
            </a>
            </header>
        </div>
    );
}
export default HomePage;