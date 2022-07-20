import styled from 'styled-components'

export const Main = styled.main`
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
    width: max-content;

    button{
        cursor: pointer;
        padding: 25px 10px 20px 10px;
        margin: 0 3px 0 3px;
        border-radius: 10px;
        border: none;
    }

    button:nth-child(1){
        background: red;
    }

    button:nth-child(2){
        background: green;
    }

    button:nth-child(3){
        background: blue;
    }

    button:nth-child(4){
        background: red;
    }

    button:nth-child(5){
        background: red;
    }

    button:nth-child(6){
        background: red;
    }
    
    button:nth-child(7){
        background: red;
    }

    button:nth-child(8){
        background: red;
    }
`;