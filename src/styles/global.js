import { createGlobalStyle } from 'styled-components';
import BackgroundImage from '../assets/CityLights.jpg';

const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: 'Lora', serif;
  font-weight: 500;
  font-size: 20px;
  color: #e7e8d1;
  button{
    font-family: inherit;
  }
}

:root{
    --main-color: #ffbc00;
    --base-color: #fffefc;
    --light-color: #e7e8d1;
    --primary-color: #f4f4f4;
    --medium-color: #c2c4cb;
    --dark-color: #333;
    --darkless-color: #444;
}


a,
  a:visited {
    text-decoration: none;
    color: inherit;
  }


html{
    background: url(${BackgroundImage}) no-repeat center fixed;
    --webkit-background-size:cover;
    --moz-background-size: cover;
    --o-background-size:cover;
    background-size:cover ;
    overflow-x: hidden ;
    scroll-behavior:smooth;
}

svg{
    fill:#f4f4f4;
}

.react-icons {
  /* vertical-align: middle; */
  color: var(--main-color);
}

.swiper-button-next, .swiper-button-prev { 
  color: var(--main-color);
  width: 50px;
  height: 50px; 
}

.swiper-pagination-bullet-active{
  background:var(--main-color) ;
}


.gallery-modal{
  width: 100%;
  max-width: 1064px;
  min-height: 100vh;
  outline: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  &-overlay{
    z-index: 9999;
    position: fixed;
    inset: 0px;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 0;
  }
}
`;

export default GlobalStyle;
