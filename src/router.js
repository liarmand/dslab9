import React from 'react';
import {Route} from "react-router-dom";
import MainPage from "./Main";
import Dead from "./Dead";
import Ugly from "./Ugly";


const DeadRouter = () => {

    return (
        <div>
            <Route exact path='/' component={MainPage} />
            <Route exact path='/left/' component={Dead} />
            <Route exact path='/right/' component={Ugly} />
        </div>
    )
};

export default DeadRouter;