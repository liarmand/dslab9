
import { Button } from "antd";
import React from "react";
import { withRouter } from 'react-router-dom'

const MainPage = ({history}) => {

    const onClick = (path) => {
        history.push(path);
    };

    return (
        <header className="App-header">
            <img src={'/penni.jpeg'} className="App-logo" alt="logo" />
            <div style={{margin:'5vh'}}>
                <p>
                    Do you want to see something interesting here? <br/>
                    Click red buttons, if you are not afraid!
                </p>
            </div>
            <div>
                <Button type="danger" style={{marginRight: '2vw'}} onClick={()=>{onClick('/left/')}}>Left button</Button>
                <Button type="danger" style={{marginLeft: '2vw'}} onClick={()=>{onClick('/right/')}}>Right button</Button>
            </div>

        </header>
    )
};

export default withRouter(MainPage);
