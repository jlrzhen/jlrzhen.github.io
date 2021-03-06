import { Link } from 'react-router-dom';
import '../Pages.css';
import icon from '../../functions/GenerateIcons'
import robotIcon from '../../images/robotIcon192.png'
import wiringDiagram from '../../images/projectImages/WebRobot/wiringDiagram.png'
import L298N from '../../images/projectImages/WebRobot/L298N.jpg'
import robotBatteryBox from '../../images/projectImages/WebRobot/robotBatteryBox.jpg'
import robotMotorMount from '../../images/projectImages/WebRobot/robotMotorMount.jpg'
import robotWireless from '../../images/projectImages/WebRobot/robotWireless.jpg'
import robotWiring from '../../images/projectImages/WebRobot/robotWiring.jpg'
import robotDemo from '../../images/projectImages/WebRobot/robotDemo.gif'
import robotServerDemo from '../../images/projectImages/WebRobot/robotServerDemo.gif'

function WebRobotPage() {
    return(
        <div className="page">
            <div className="pageContent">
            <main>
                <br/><br/>
                <Link to="/projects" className="backButton">&lt; Projects</Link>
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
                <img 
                    src={robotDemo} 
                    className="projectImg" 
                    height="95%" width="95%" 
                    alt="Demonstration of User Interface"
                />
                <span className="caption">Demonstration of User Interface</span>
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
                <h2>Programming the Robot</h2>
                <p>
                    In order to control my robot through a web browser, I had to create two separate applications.
                    One of them I called "webRobot-UI", which is a user interface that displays four buttons. These 
                    buttons are used to make the robot move forwards, move backwards, turn left, and turn right. This user 
                    interface was created in React. 
                </p>
                <p>
                    The second application is named "webRobot-Server". It is a Flask 
                    application that recieves commands from the user interface and moves the robot. The two motors on the
                    robot move when the pins on the motor driver board are set to a combination of high and low voltages.
                </p>
                <img 
                    src={robotServerDemo} 
                    className="projectImg" 
                    height="95%" width="95%" 
                    alt="Demonstration of Robot Receiving Movement Commands"
                />
                <span className="caption">Demonstration of Robot Receiving Movement Commands</span>  
                <br/><br/>
                <p>Click on the links below to view the repositories of each application.</p>
                <h2><a href="https://github.com/jlrzhen/webRobot-Server">webRobot-Server</a></h2>
                <h2><a href="https://github.com/jlrzhen/webRobot-UI">webRobot-UI</a></h2>
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
                <h3>Raspberry Pi Zero</h3>
                <p>
                    The Raspberry Pi Zero is a small and inexpensive
                    single board computer that can be used in many 
                    projects. It features a set of pins that can be 
                    used to output voltages or communicate with other 
                    devices through various protocols. For my robot, 
                    I have connected it to a power bank and a wireless 
                    adapter to control it remotely.
                </p>
                <img 
                    src={robotWireless} 
                    className="projectImg" 
                    height="95%" width="95%" 
                    alt="Wireless Adapter and Power Bank"
                />
                <span className="caption">Wireless Adapter and Power Bank</span>
                <br/>
                <h3>L298N DC Motor Driver</h3>
                <p>
                    This board is commonly used in small projects and can 
                    control up to two DC motors. There are four pins to control 
                    each motor's direction and two additional pins to change their speed.
                </p>
                <img 
                    src={L298N} 
                    className="projectImg" 
                    height="95%" width="95%" 
                    alt="L298N Motor Driver Board"
                />
                <span className="caption">L298N Motor Driver Board</span>
                <br/>
                <h3>Robot Chassis Kit</h3>
                <p>
                    The robot chassis kit that I have chosen for this project 
                    contains an acrylic frame, two geared motors, a battery box,
                    and three wheels. Two of the wheels are attached to the motors
                    while the third one is unpowered and is connected to a swivel 
                    that allows the robot to turn left and right.
                </p>
                <h2>Building the Robot</h2>
                <ol className="projectSteps">
                    <h3><li>Robot Chassis</li></h3>
                    <p>
                        The robot kit that I used was easy to assemble with a few screws 
                        and nuts securing the three wheels, two motors, and battery box to 
                        the acrylic platform. One issue that I encountered while doing this 
                        was that one of the small pieces that connected the motor to the chassis 
                        broke in half. I was able to create a replacement part using popsicle sticks 
                        and hot glue.
                    </p>
                    <img 
                        src={robotBatteryBox} 
                        className="projectImg" 
                        height="95%" width="95%" 
                        alt="Battery Box with Four AA Batteries"
                    />
                    <span className="caption">Battery Box with Four AA Batteries</span>
                    <br/><br/>
                    <img 
                        src={robotMotorMount} 
                        className="projectImg" 
                        height="95%" width="95%" 
                        alt="Attaching Motors with Popsicle Sticks"
                    />
                    <span className="caption">Attaching Motors with Popsicle Sticks</span>
                    <br/>
                    <h3><li>Wiring</li></h3>
                    <p>
                        After assembling the robot chassis, I connected the Raspberry Pi to the motor 
                        driver board with six jumper wires. I also connected a power bank and a wireless 
                        adapter to allow the robot to move freely without connecting it to my computer with 
                        a physical connection. Finally, I connected the two motors and battery box to the 
                        motor driver board using the onboard screw terminals. 
                    </p>
                    <img 
                        src={robotWiring} 
                        className="projectImg" 
                        height="95%" width="95%" 
                        alt="L298N connected to Raspberry Pi Zero"
                    />
                    <span className="caption">L298N connected to Raspberry Pi Zero</span>
                    <p>For more information, see the wiring diagram in the image below.</p>
                </ol>
                <h2>Wiring Diagram</h2>
                <img 
                    src={wiringDiagram} 
                    className="projectImg" 
                    height="95%" width="95%" 
                    alt="WebRobot Wiring Diagram"
                />
                <span className="caption">WebRobot Wiring Diagram</span>
                <h2>Improvements to Make and Features to Add</h2>
                <ul className="projectList">
                    <li>Acceleration to ramp up and ramp down speed 
                        when moving robot (replaces constant speed)
                    </li>
                    <li>Arm and disarm switch</li>
                    <li>ultrasonic sensor for auto collision avoidance</li>
                    <li>Login interface to authenticate users</li>
                    <li>Script to host server on any robot</li>
                    <li>Camera attachment</li>
                </ul>
            </main>
            </div>
        </div>
    );
}

export default WebRobotPage;