import React from 'react';
import './HomePage.css';
import logo from '../logo.svg';

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
                <div className="homeDate">
                    <p>Today's date: {this.state.date.toDateString()}</p>
                    <p>It is now {this.state.date.toTimeString()}</p>
                </div>
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
    componentDidMount() {
        this.startHomePageClock();
    }
    componentDidUnmount() {
        clearInterval(this.homePageClock);
    }
}
export default HomePage;