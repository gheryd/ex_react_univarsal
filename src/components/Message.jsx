import React from 'react';


const Message = ({message}) => {
    message = message || "no message passed into component"
    return (
        <div className="message">
            <span className="comp">component 'Message'</span>
            <p>{message}</p>
        </div>
        
    );
}

export default Message;