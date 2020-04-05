import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Nunito:300,400,600&display=swap');


*{
    margin:0;
    padding:0;
    box-sizing:border-box;

}
html{
    font-size:62.5%;
    

}
body{
    font-family: 'Nunito', sans-serif;
    font-size:1.4rem;
   
}
`;
