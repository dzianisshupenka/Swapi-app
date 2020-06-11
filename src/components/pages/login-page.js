import React from "react";
import './../item-details/person-details.css';
import {Redirect} from "react-router-dom";

const LoginPage = ({isLogged, onLogin}) => {

    if(isLogged) {
        return <Redirect to='/'/>
    }

    return (
        <div className='person-details'>
            <p>Please, login to see the secret page</p>
            <button className={"btn btn-primary"} onClick={onLogin}>LOGIN</button>
        </div>
    )
}

export default LoginPage;
