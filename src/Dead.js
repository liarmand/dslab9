import {Carousel} from 'antd';
import React from "react";

const Dead = () => {

    const onChange = (a, b, c) => {
        console.log(a, b, c);
    };

    return (
        <div style={{background: 'black', height: '120vh'}}>
            <Carousel>
                <div style={{height:'80vh'}}>
                    <img src={'/1.jpg'} className="App-logo"
                         alt="Dead"
                         style={{width:'60vw',height:'100vh', margin:'0 20vw'}}/>
                </div>
                <div>
                    <img src={'/2.jpg'} className="App-logo"
                         alt="Dead"
                         style={{width:'60vw',height:'100vh', margin:'0 20vw'}}/>
                </div>
                <div>
                    <img src={'/3.jpg'} className="App-logo"
                         alt="Dead"
                         style={{width:'60vw',height:'100vh', margin:'0 20vw'}}/>
                </div>
                <div>
                    <img src={'/4.jpg'} className="App-logo"
                         alt="Dead"
                         style={{width:'60vw',height:'100vh', margin:'0 20vw'}}/>
                </div>
            </Carousel>
        </div>
    )
};

export default Dead;
