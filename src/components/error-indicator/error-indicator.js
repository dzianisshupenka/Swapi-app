import React from "react";

import './error-indicator.css';

const ErrorIndicator = () => {
    return (
        <div className='main-error'>
            <span className='error'>
                Uuuuups...
            </span>
            <span className='error-message'>
                Something is not so good!!!
            </span>
        </div>
    )
}

export default ErrorIndicator;