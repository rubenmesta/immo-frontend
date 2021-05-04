import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const ChatbotWrapper = styled.div`

    /* Chat button */
    .chat-launcher {
        width: 60px;
        height: 60px;
        background: ${themeGet('primary.0')};
        background-position: center;
        background-repeat: no-repeat;
        position: fixed;
        right: 25px;
        bottom: 25px;
        border-radius: 50%;
        box-shadow: none;
        transition: box-shadow 0.2s ease-in-out;
        cursor: pointer;

            &::before {
                content: '';
                position: relative;
                display: block;
                width: 60px;
                height: 60px;  
                border-radius: 50%;
                transition: box-shadow 0.2s ease-in-out;
            }

            &:hover {
                box-shadow: 0 0px 27px 1.5px rgba(0,0,0,0.2);
            }

            &.opened {

                &::before {
                    box-shadow: 0px 0px 400px 250px rgba(148, 149, 150, 0.2);
                }

                .open-icon {
                    transform: rotate(-90deg);
                    opacity: 1;
                }

                .closed-icon {
                    transform: rotate(-90deg);
                    opacity: 0;
                    }
            }

            .open-icon,  
            .closed-icon {
                width: 60px;
                height: 60px;
                position: fixed;
                right: 25px;
                bottom: 25px;
                transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;
            }

            .closed-icon {
                transition: opacity 100ms ease-in-out, transform 100ms ease-in-out;
                width: 60px;
                height: 60px;
            }
            .open-icon {
                padding: 20px;
                box-sizing: border-box;
                opacity: 0;
            }
    }

    /* Chat Container */
    .chat-window {
        background: rgb(245, 248, 251);
        border-radius: 10px;
        box-shadow: rgb(0 0 0 / 15%) 0px 12px 24px 0px;
        font-family: monospace;
        overflow: hidden;
        position: fixed;
        bottom: 100px;
        top: initial;
        right: 32px;
        left: initial;
        width: 350px;
        height: 520px;
        z-index: 999;
        transform: scale(1);
        transform-origin: right bottom;
        transition: transform 0.3s ease 0s;

        &.closed {
            transform: scale(0);
            transition: transform 0.2s ease 0s;
            bottom: 45px;
            right: 45px;
           

        }

    }
    .chat-header {
        align-items: center;
        background: ${themeGet('primary.0')};
        color: ${themeGet('color.1')};
        display: flex;
        height: 56px;
        justify-content: space-between;
        padding: 0px 10px;
        fill: ${themeGet('color.1')};
        


        .chat-header-title {
            margin: 0px;
            font-size: 1rem;
            font-weight: 600;
            color:  ${themeGet('color.1')};
        }

        .chat-header-close-button {
            width: 40px;
            align-self: center;
            height: 40px;
            margin-right: 10px;
            box-sizing: border-box;
            cursor: pointer;
            border-radius: 5px;

            img {
                width: 100%;
                height: 100%;
                padding: 13px;
                box-sizing: border-box;
            }
        }
    }
    .chat-content {
        height: calc(408px);
        overflow-y: scroll;
        margin-top: 2px;
        padding-top: 6px;

        .message-wrapper {
           
            .chat-bot {
                align-items: flex-end;
                display: flex;
                justify-content: flex-start;

            .chat-image-container {
                display: inline-block;
                order: 0;
                padding: 6px;

                .chat-image {
                    animation: 0.3s ease 0s 1 normal forwards running bubble;
                    border-radius: 50% 50% 0px;
                    box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px 0px;
                    height: 40px;
                    min-width: 40px;
                    padding: 3px;
                    transform: scale(0);
                    transform-origin: right bottom;
                }
                
            }

            .chat-bubble {
                animation: 0.3s ease 0s 1 normal forwards running bubble;
                background: ${themeGet('color.17')};
                border-radius: 18px 18px 18px 0px;
                box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px 0px;
                color: ${themeGet('color.1')};
                display: inline-block;
                font-size: 14px;
                font-weight: 500;
                max-width: 50%;
                margin: 0px 0px 10px;
                overflow: hidden;
                position: relative;
                padding: 12px;
                transform: scale(0);
                transform-origin: left bottom;
            }
        }

        .chat-user {
            align-items: flex-end;
            display: flex;
            justify-content: flex-end;

            .chat-user-image-container {
                display: inline-block;
                order: 1;
                padding: 6px;
                
                .chat-user-image {
                    animation: 0.3s ease 0s 1 normal forwards running bubble;
                    border-radius: 50% 50% 50% 0px;
                    box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px 0px;
                    height: 40px;
                    min-width: 40px;
                    padding: 3px;
                    transform: scale(0);
                    transform-origin: left bottom;
                }
            }
                .chat-user-bubble {
                    animation: 0.3s ease 0s 1 normal forwards running bubble;
                    background: rgb(255, 255, 255);
                    border-radius: 18px 18px 0px;
                    box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px 0px;
                    color: rgb(74, 74, 74);
                    display: inline-block;
                    font-size: 14px;
                    max-width: 50%;
                    margin: 0px 0px 10px;
                    overflow: hidden;
                    position: relative;
                    padding: 12px;
                    transform: scale(0);
                    transform-origin: right bottom;
                }
            }
        }
        
    }

    .chat-footer {
        position: relative;

        .chat-input {
            border-width: 1px 0px 0px;
            border-right-style: initial;
            border-bottom-style: initial;
            border-left-style: initial;
            border-right-color: initial;
            border-bottom-color: initial;
            border-left-color: initial;
            border-image: initial;
            border-radius: 0px 0px 10px 10px;
            border-top-style: solid;
            border-top-color: rgb(238, 238, 238);
            box-shadow: none;
            box-sizing: border-box;
            font-size: 16px;
            opacity: 0.8;
            outline: none;
            padding: 16px 52px 16px 10px;
            width: 100%;
            appearance: none;
            color: -internal-light-dark(black, white);

                &:disabled {
                    background: rgb(255, 255, 255);
                }
            }

            .chat-submit-button {
                background-color: transparent;
                border: 0px;
                border-bottom-right-radius: 10px;
                box-shadow: none;
                cursor: pointer;
                fill: rgb(74, 74, 74);
                opacity: 1;
                outline: none;
                padding: 14px 16px 12px;
                position: absolute;
                right: 0px;
                top: 0px;
                
                &::before {
                    content: "";
                    position: absolute;
                    width: 23px;
                    height: 23px;
                    border-radius: 50%;
                }
            }
        }
    }
    /* Cards Styles */
    .cards-panel {
        overflow: hidden;
        margin-top: 10px;

        .cards-title-container {
            margin-left: 20px;
        }

        .cards-conatiner {
            overflow: auto;
            overflowY: scroll; 
            margin-ottom: 10px;
        }

        .cards {
            display: flex;
            height: 300px;

        }
    }

    .quick-reply-container {

        display: flex;
        flex-wrap: wrap;
        justify-cointent: center;
        margin-left: 35px;
        margin-bottom: 1em;
        padding: 0px 6px;

        .quick-reply {
            display: flex;
            flex: 1 1 45%;
            animation: 0.3s ease 0s 1 normal forwards running bubble;
            cursor: pointer;
            margin: 6px;
            transform: scale(0);

            .quick-reply-item {
                background: ${themeGet('color.1')};
                border-radius: 18px 18px;
                box-shadow: rgb(0 0 0 / 15%) 0px 1px 2px 0px;
                color: ${themeGet('color.0')};
                font-size: .875rem;
                padding: .5em;
                text-decoration: none;
                text-align: center;
                flex:1;
                border: 1px solid  ${themeGet('primary.0')};
                
            }
        }
    }

    .message-end {
        display: flex;
    }


 @keyframes bubble {
    100% {
        transform: scale(1);
    }
 }

`;

export default ChatbotWrapper;