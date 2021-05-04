import React, { Component } from 'react';
import QuickReply from './QuickReply';
import chatIcon from '../assets/chatbot-image.svg';


class QuickReplies extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, payload, text) {
        this.props.replyClick(event, payload, text);
    }

    
    renderQuickReply(reply, i) {
        return <QuickReply key={i} click={this.handleClick} reply={reply} />;
    }

   
    
    renderQuickReplies(quickReplies) {
        if (quickReplies) {
            return quickReplies.map((reply, i) => {
                    return this.renderQuickReply(reply, i);
                }
            )
        } else {
            return null;
        }
    }

    render() {
        return (
            <React.Fragment>
            <div className="message-wrapper">
                <div className="chat-bot">
                    <div className="chat-image-container">
                        <img className="chat-image" src={chatIcon} />
                    </div>

                <div className="chat-bubble">
                    {this.props.text && 
                    <p>{this.props.text.stringValue}</p>
                    }
                </div>       
                </div>
                <div className="quick-reply-container"> {this.renderQuickReplies(this.props.payload)}</div>
  
            </div>
           
            </React.Fragment>
        );
    }
}

export default QuickReplies;