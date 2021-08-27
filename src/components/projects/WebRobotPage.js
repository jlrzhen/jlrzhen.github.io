import '../Pages.css';
import icon from '../../functions/GenerateIcons'
import robotIcon from '../../images/robotIcon192.png'
import wiringDiagram from '../../images/projectImages/wiringDiagram.png'

function WebRobotPage() {
    return(
        <div className="page">
            <div className="pageContent">
            <main>
                <h1>Webpage Controlled Robot</h1>                
                <a href="https://github.com/jlrzhen/webRobot-UI/">
                    <img src={robotIcon} height="20em" width="20em" alt="webRobot-UI Icon"/>
                </a><span> </span>               
                <span> - {icon(["Python", "Flask", "JS", "React"])}</span><br/>
                <div className="lineDiv"/>
                <p>
                    A two-wheeled robot chassis controlled by a 
                    Raspberry Pi Zero using Flask and a user interface 
                    created with React.
                </p>
                <img 
                    src={wiringDiagram} 
                    className="projectImg" 
                    height="600em" width="600em" 
                    alt="WebRobot Wiring Diagram"
                />
                <br/>
                <span className="caption">Wiring Diagram</span>
                <br/>
                <br/>
            </main>
            </div>
        </div>
    );
}

export default WebRobotPage;