import styled, { createGlobalStyle } from "styled-components"
import bg_image from "./images/bg-image.jpg"

export const GlobalStyle = createGlobalStyle`

html{
    height:100%;
}

body{
    background-image:url(${bg_image});
    background-size: cover;
    margin:0;
    padding: 0 20px;
    display:flex;
    justify-content:center;

}

*{
    box-sizing: border-box; 
    font-family:"arial"
    
}

`

export const Wrapper = styled.div`

`