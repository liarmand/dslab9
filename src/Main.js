
import { Button } from "antd";
import React from "react";
import { withRouter } from 'react-router-dom'

const MainPage = ({history}) => {

    const onClick = (path) => {
        history.push(path);
    };

    return (
        <header className="App-header">
            <img src={'/penni.jpg'} className="App-logo" alt="logo" />
            <div style={{margin:'5vh'}}>
                <p>
                    <br/>
                    This is my porfolio <br/>
                    Click buttons to see more pictures.
                </p>
            </div>
            <div>
                <Button type="primary" style={{marginRight: '2vw'}} onClick={()=>{onClick('/left/')}}>Syberia</Button>
                <Button type="primary" style={{marginLeft: '2vw'}} onClick={()=>{onClick('/right/')}}>Kazakhstan</Button>
            </div>

        </header>
    )
};

export default withRouter(MainPage);
