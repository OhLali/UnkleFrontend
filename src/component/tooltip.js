import React, {useState} from 'react';
import { Tooltip, Whisper } from 'rsuite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import "rsuite/dist/rsuite.min.css";
import { Button } from 'reactstrap'

function TooltipToDisplay() {

    
    let colorInfo = {color: '#2b9dfe',cursor:'pointer'}

    const tooltip = (
        <Tooltip style={{ background : "#08224c" , color : "white", borderRadius : 10 , borderWidth : 10 , borderTopLeftRadius : 2 , fontSize: '14px', width: 420 }} >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Tooltip>
      ); 
    
    
    let iconInfo = (<FontAwesomeIcon icon={faCircleInfo} style={colorInfo} />)

    return (
        <div>
            <div style={{
                display: 'block', width: 700, paddingLeft: 30
            }}>
               
                <Whisper placement="rightStart" trigger="hover" speaker={tooltip}>
                    <Button className="buttonTooltipInfo" ><FontAwesomeIcon icon={faCircleInfo} style={colorInfo} /></Button>
                </Whisper>

            </div>
          
        </div>   
        
    )

}

export default TooltipToDisplay