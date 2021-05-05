import React, { Component } from 'react';
import axios from 'axios/index';
import Message from './Message';
import ChatbotWrapper from './Chatbot.style';
import Cookies from 'universal-cookie';
import { v4 as uuid } from 'uuid';
import MediaCard from './Card';
import QuickReplies from './QuickReplies';

import launcherIcon from '../assets/logo-no-bg.svg';
import launcherIconActive from '../assets/close-icon.png';
import closeIcon from '../assets/close.svg';


const cookies = new Cookies();


class Chatbot extends Component {

    messagesEnd;
    talkInput;

    constructor(props) {
        super(props);

        this.handleInputKeyPress = this.handleInputKeyPress.bind(this);
        this.handleQuickReplyPayload = this.handleQuickReplyPayload.bind(this);

        this.hide = this.hide.bind(this);
        this.show = this.show.bind(this);

        this.state = {
            messages: [],
            showBot: false,
            shopWelcomeSent: false,
            isActive: false 
        };

        if (cookies.get('userID') === undefined) {
            cookies.set('userID', uuid(), { path: '/' });
        }
       
    }
   
    async df_text_query (queryText) {
        let says = {
            speaks: 'user',
            msg: {
                text : {
                    text: queryText
                }
            }
        }
        this.setState({ messages: [...this.state.messages, says]});
        const res = await axios.post('https://harvard-capstone.herokuapp.com/api/df_text_query',  {text: queryText, userID: cookies.get('userID')});

        for (let msg of res.data.fulfillmentMessages) {
            //console.log(JSON.stringify(msg));
            says = {
                speaks: 'bot',
                msg: msg
            }
            this.setState({ messages: [...this.state.messages, says]});
        }
    };


    async df_event_query(eventName) {

        const res = await axios.post('https://harvard-capstone.herokuapp.com/api/df_event_query',   {event: eventName, userID: cookies.get('userID')});

        for (let msg of res.data.fulfillmentMessages) {
            let says = {
                speaks: 'bot',
                msg: msg
            }

            this.setState({ messages: [...this.state.messages, says]});
        }
    };

    resolveAfterXSeconds(x) {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(x);
            }, x * 1000);
        })
    }

    async componentDidMount() {
        this.df_event_query('Welcome');
    }

    componentDidUpdate() {
        this.messagesEnd.scrollIntoView({ behavior: "smooth" });
        this.talkInput.focus();
    }


    renderCards(cards) {
        return cards.map((card, i) => <MediaCard key={i} payload={card.structValue}/>);
    }

    renderOneMessage(message, i) {

        if (message.msg && message.msg.text && message.msg.text.text) {
            return <Message key={i} speaks={message.speaks} text={message.msg.text.text}/>;
        } else if (message.msg && message.msg.payload && message.msg.payload.fields.listings) { //message.msg.payload.fields.cards.listValue.values

            return <div key={i}>
                    <div className="cards-panel">
                        <div className="cards-title-container">
                            <h3 href="/" className="card-title">Featured Listings</h3>
                        </div>
                        <div className="cards-conatiner">
                            <div s className="cards" style={{ width:message.msg.payload.fields.listings.listValue.values.length * 270}}>
                                {this.renderCards(message.msg.payload.fields.listings.listValue.values)}
                            </div>
                        </div>
                    </div>
                 </div>
        } else if (message.msg &&
            message.msg.payload &&
            message.msg.payload.fields &&
            message.msg.payload.fields.quick_replies
        ) {
            return <QuickReplies
            text={message.msg.payload.fields.text ? message.msg.payload.fields.text : null}
            key={i}
            replyClick={this.handleQuickReplyPayload}
            speaks={message.speaks}
            payload={message.msg.payload.fields.quick_replies.listValue.values}/>;
        }
    }

    renderMessages(returnedMessages) {
        if (returnedMessages) {
                return returnedMessages.map((message, i) => {
                    return this.renderOneMessage(message, i)
                }
            )
        } else {
            return null;
        }
    }

    handleInputKeyPress(e) {
        if (e.key === 'Enter') {
            this.df_text_query(e.target.value);
            e.target.value = '';
        }
    }


    show(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({showBot: true})     
       
    }

    hide(e) {
        e.preventDefault();
        e.stopPropagation();
        this.setState({showBot: false});
        
    }

    handleToggle = () => {
        this.setState({ showBot: !this.state.showBot });
      };

    handleQuickReplyPayload(event, payload, text) {
        event.preventDefault();
        event.stopPropagation();

        //this.df_text_query(text);
        switch (payload) {
           /* case 'firsttime_yes':
                this.df_event_query('FIRST-TIME');
            case 'agent_yes':
                this.df_event_query('AGENT-YES');
            case 'journey':
                this.df_event_query('JOURNEY');
            case 'type':
                this.df_event_query('TYPE');
            case 'price':
                this.df_event_query('PRICE');
            case 'zipcode':
                this.df_event_query('ZIPCODE');
            case 'send-link':
                this.df_event_query('LINK');*/
            default:
                this.df_text_query(text);
            break;
        }

    }
    

    render() {
        return (
            <div>
        
            <ChatbotWrapper id="chatbot">
            <div>Chat here</div>
            <div className="chat-launcher">
                   <img className={"open-icon"} src={launcherIconActive} alt="open" />
                    <img className={"closed-icon"} src={launcherIcon} alt="close icon"/>
            </div>
            <div className={`chat-launcher ${this.state.showBot ? "opened" : "closed"}`}
                onClick={this.handleToggle}>
                   <img className={"open-icon"} src={launcherIconActive} alt="open" />
                    <img className={"closed-icon"} src={launcherIcon} alt="close icon"/>
            </div>
           
            <div className={`chat-window ${this.state.showBot ? "opened" : "closed"}`}>
                <div className="chat-header">
                    <h2 className="chat-header-title">Agent Dash</h2>
                    <a className="chat-header-close-button" onClick={this.hide}>
                        <img className={"close-icon"} src={closeIcon} alt="close icon"/>
                    </a>
                </div>
                


                <div className="chat-content" height="520px">
                       {this.renderMessages(this.state.messages)}
                       <div className="message-end" ref={(el) => { this.messagesEnd = el; }}>

                       </div>
                </div>

                <div className="chat-footer">
                    <input type="text" className="chat-input" placeholder="Type the message ..." onKeyPress={this.handleInputKeyPress} ref={(input) => { this.talkInput = input; }}/>
                    <button className="chat-submit-button" disabled="">
                        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 500 500"><g><g><polygon points="0,497.25 535.5,267.75 0,38.25 0,216.75 382.5,267.75 0,318.75"></polygon></g></g>
                        </svg>
                    </button>
                </div>
            </div>
            </ChatbotWrapper>
            </div>
           
        )

    }

}

export default Chatbot;

