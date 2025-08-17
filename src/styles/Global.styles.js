import { createGlobalStyle } from "styled-components";
import { pxToRem } from "@/utils/pxToRem";

export const GlobalStyleBox = createGlobalStyle`
:root{
    --col-10: #ffffff;
    --col-20: #ffd700;
    --col-30: #800020;
    --col-40: #141414;
    --col-50: #E5B21A;
    --col-60: #001F3F;
    --max-w: ${pxToRem(1200)};
    --centered: 0 auto;
}
*,*::after,*::before{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Poppins', sans-serif;
    font-size: ${pxToRem(16)};
}

ul{
    list-style: none;
}
a{
    color: unset;
    text-decoration: none;
}
button{
    cursor: pointer;
    background: none;
    border: none;
}

h1,h2,h3,p{
    line-height: auto;
}
p,li{
    line-height: 150%;
}
span{
    color: var(--col-20);
}

input, textarea {
    outline: none;
    border: none;
    border-bottom: ${pxToRem(1)} solid var(--col-40);
    border-radius: ${pxToRem(12)};
    width: 100%;
    padding: ${pxToRem(10)};
    resize: none; 
}
p{
    opacity: 80%;
}

 
  
`;
