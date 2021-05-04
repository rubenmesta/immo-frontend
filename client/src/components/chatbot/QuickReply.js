import React from 'react';


const QuickReply = (props) => {
    
    if (props.reply.structValue.fields.payload) {
        return (
          
            <div className="quick-reply"> 
            <a href="/"  className="quick-reply-item"
               onClick={(event) =>
                   props.click(
                       event,
                       props.reply.structValue.fields.payload.stringValue,
                       props.reply.structValue.fields.text.stringValue
                   )
               }>
                {props.reply.structValue.fields.text.stringValue}
            </a>
            </div>
        );
    } else {
        return (
          
            <div className="quick-reply">
            <a href={props.reply.structValue.fields.link.stringValue}
               className="quick-reply-item">
                {props.reply.structValue.fields.text.stringValue}
            </a>
            </div>
        );
    }

};

export default QuickReply;