import styled, { createGlobalStyle } from "styled-components"
import bgImage from "./images/bgImage.jpg"

export const GlobalStyle = createGlobalStyle`

html{
    height:100%;
}

body{   
    background-image: url(${bgImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;

}

*{
    box-sizing: border-box; 
    font-family:"arial";
    
}

`

export const Wrapper = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;


> p {
    color: black;
}

.score {
    color: black;
    font-size: 2rem;
    margin: 0;
}

h1 {

-webkit-bacground-clip: text; 

-moz-background-clip: text;
-moz-text-fill-color: transparent;

font-size: 70px;
font-weighr: 400;
text-align: center;
margin: 20px;
color: black;


}

.start, .next {
cursor: pointer;
border: 2px solid black;
box-shadow: 0px 5px 10px rgba(0,0,0,0.25);
border-radius: 10px;
height: 40px;
margin: 20px 0;
padding: 0 40px;

}

.start {

    max-width: 200px; 
}


`