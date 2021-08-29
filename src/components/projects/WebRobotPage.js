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
                <h2>Description</h2>
                <p>
                    A two-wheeled robot chassis controlled by a 
                    Raspberry Pi Zero using Flask and a user interface 
                    created with React.
                </p>
                <h2>Purpose</h2>
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
                <h2>List of Parts</h2>
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
                <h2>Raspberry Pi Zero</h2>
                <p>
                    The Raspberry Pi Zero is a small and inexpensive
                    single board computer that can be used in many 
                    projects. It features a set of pins that can be 
                    used to output voltages or communicate with other 
                    devices through various protocols. For my robot, 
                    I have connected it to a power bank and a wireless 
                    adapter to control it remotely.
                </p>
                <h2>L298N DC Motor Driver</h2>
                <p>
                    This board is commonly used in small projects and can 
                    control up to two DC motors. There are four pins to control 
                    each motor's direction and two additional pins to change their speed.
                </p>
                <h2>Robot Chassis Kit</h2>
                <p>
                    The robot chassis kit that I have chosen for this project 
                    contains an acrylic frame, two geared motors, a battery box,
                    and three wheels. Two of the wheels are attached to the motors
                    while the third one is unpowered and is connected to a swivel 
                    that allows the robot to turn left and right.
                </p>
                <h2>Wiring Diagram</h2>
                <img 
                    src={wiringDiagram} 
                    className="projectImg" 
                    height="600em" width="600em" 
                    alt="WebRobot Wiring Diagram"
                />
                <h2><a href="https://github.com/jlrzhen/webRobot-Server">webRobot-Server</a></h2>
                <h2><a href="https://github.com/jlrzhen/webRobot-UI">webRobot-UI</a></h2>
                <br/>
            </main>
            </div>
        </div>
    );
}

export default WebRobotPage;