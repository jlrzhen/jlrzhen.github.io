import React from 'react';
import './HomePage.css';
import logo from '../logo.svg';
import logo_vite from '../images/Vitejs-logo.svg.png';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    startHomePageClock() {
        let delay = 1000;
        this.homePageClock = setInterval(() => {
            this.setState({ date: new Date() });
        }, delay);
    } 
    render() {
        return (
            <div className="App">
                <header className="App-header">
                <h1>Welcome to Jeffrey's Personal Website!</h1>
                <div className="homeDate">
                    <p>Today's date: {this.state.date.toDateString()}</p>
                    <p>It is now {this.state.date.toTimeString()}</p>
                </div>
                <div className="container">
                    <img src={logo_vite} className="App-logo-vite" alt="logo_vite" />
                    <p>Made with<br></br>
                        <a
                            className="App-link"
                            href="https://vitejs.dev/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            https://vitejs.dev/
                        </a>
                    </p>
                </div>
                
                <div className="container">
                <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Previously made with <br></br> 
                        <code>Create React App</code>
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </div>
                </header>
            </div>
        );
    }
    componentDidMount() {
        this.startHomePageClock();
    }
    componentWillUnmount() {
        clearInterval(this.homePageClock);
    }
}
export default HomePage;