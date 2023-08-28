/* Takes an array of tools used in projects 
and returns JSX with a list of icons */

import flaskIcon from '../images/flaskIcon.svg'

function icon (nameList) {
    let icons = [];
    for (let i=0; i<nameList.length; i++) {
        switch(nameList[i]) {
            case "JS":
                icons.push(<span><i class="fab fa-js"></i> JavaScript</span>);
                addSeparator(i);
                break;
            case "React":
                icons.push(<span><i class="fab fa-react"></i> React</span>);
                if(i<nameList.length-1) {
                    icons.push(<span>, </span>)
                }
                break;
            case "Python":
                icons.push(<span><i class="fab fa-python"></i> Python</span>);
                addSeparator(i);
                break;
            case "Flask":
                icons.push(<span>
                    <img src={flaskIcon} alt="Flask Icon"
                        style={{
                            height: "1em",
                        }}
                    /> Flask</span>);
                addSeparator(i);
                break;
            default: icons += null;
        }
        
    }
    
    function addSeparator(i) {
        if(i<nameList.length-1) {
            icons.push(<span>, </span>)
        }
    }
    
    return icons    
}

export default icon;