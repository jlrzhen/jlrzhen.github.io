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
                <h3>Description</h3>
                <p>
                    A two-wheeled robot chassis controlled by a 
                    Raspberry Pi Zero using Flask and a user interface 
                    created with React.
                </p>
                <h3>Purpose</h3>
                <p>
                    My main goal for this project was to create a 
                    robot that could be controlled in real time 
                    through a web browser. This project was inspired 
                    by smarthome products, smart kitchen appliances, 
                    and other IoT devices that improve our lives thorugh the use of  
                    computer networks. I wanted to demonstrate my existing 
                    knowledge on Linux-based operating systems, 
                    electronic circuits, and programming frameworks 
                    into a single project. This project also allows
                    me to practice using various tools such as VSCode,
                    Git, and diagram creation software.     
                </p>
                <h3>List of Parts</h3>
                <ul className="projectList">
                    <li>1x Raspberry Pi Zero</li>
                    <li>1x Wireless USB Adapter 
                        (not required if using wireless version of Raspberry Pi)
                    </li>
                    <li>1x Robot Chassis Kit</li>
                        <ul>
                            <li>1x Robot Chassis</li>
                            <li>1x Battery Box (holds 4x AA Batteries)</li>
                            <li>2x DC Gear Motor (1:48 gearing)</li>
                            <li>3x Robot Wheels</li>
                        </ul>
                    <li>1x L298N DC Motor Driver</li>
                    <li>1x USB Power Bank</li>
                </ul>
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