import React from 'react'
import styled from 'styled-components'
import background from '../../images/background.png';


export const Main = styled.main`
    background: url(${background}) no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
    fontFamily: "-apple-system, Roboto, sans-serif, serif";
    position: absolute;
    width: 100vw;
    height: 100vh;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Piano = styled.div`
    width: 480px;

    .note-buttons{
        display: flex;
        background: #FFF;
        box-shadow: 0 6px 0 #613200;
        border-radius: 0 0 30px 30px;
        border: 3px solid #613200;
        padding: 0 0 10px 0;
    }
    
    button{
        flex: 1;
        position: relative;
        cursor: pointer;
        padding: 25px 10px 14px 10px;
        margin: 0 3px 0 3px;
        border-radius: 0 0 23px 23px;
        border: none;
        height: 10em;

        box-shadow: 0 4px 0px rgba(97,50,0,.8);
    }

    button.pressed{

    }

    button:nth-child(1){
        background: linear-gradient(#00F118, #00890E);
    }

    button:nth-child(2){
        background: linear-gradient(#05D2FF, #0063AA);
    }

    button:nth-child(3){
        background: linear-gradient(#6E3CFF, #3315EB);
    }

    button:nth-child(4){
        background: linear-gradient(#C500E5, #730086);
    }

    button:nth-child(5){
        background: linear-gradient(#F10707, #6C0000);
    }

    button:nth-child(6){
        background: linear-gradient(#FF772B, #A01D00);
    }
    
    button:nth-child(7){
        background: linear-gradient(#FFC226, #A65000);
    }

    button:nth-child(8){
        background: linear-gradient(#FF1B96, #750046);
    }

    /*Notes Style*/
    p.note{
        position: absolute;
        display: flex;
        vertical-align: center;
        align-items: center;
        background: rgba(255,255,255,0.7);
        border-radius: 100px;
        padding: 5px;
        width: 24px;
        height: 24px;
        bottom: 0;
        font-size: 1.20em;
    }

    p.keyButton{
        top: 0;
        left: 0;
        width: 100%;
        text-align: center;
        position: absolute;
    }

    /*Images*/
    .imageHeadPiano{
        margin: 0 0 -7px 0;
        position: relative;
        z-index: 1;
        width: 100%;
        filter: drop-shadow(0 9px 5px rgba(0,0,0,0.6));
    }
`;