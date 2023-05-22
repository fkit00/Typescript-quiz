import styled, { createGlobalStyle } from "styled-components"
import bgImage from "./images/bgImage.jpg"

export const GlobalStyle = createGlobalStyle`

html{
    height:100%;
}

body{   
    background-image: url(${bgImage});
    background-size: cover;
    margin:0;
    padding: 0 20px;
    display:flex;
    justify-content:center;

}

*{
    box-sizing: border-box; 
    font-family:"arial";
    
}

`

export const Wrapper = styled.div`

    display:flex;
    flex-direction: column:
    align-items: center;


> p {
    color: white;
}

.score{
    color: black;
    font-size: 2rem;
    margin: 0;
}

.h1{
background-image: linear-gradient(180deg,#fff,#87f1ff  );
background-size: 100%;
background-clip: text;
-webkit-bacground-clip: text; 


}


`