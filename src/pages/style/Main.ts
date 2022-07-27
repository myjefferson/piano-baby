import React from 'react'
import styled from 'styled-components'
import background from '../../images/background.png';


const Main = styled.main`
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



export default Main