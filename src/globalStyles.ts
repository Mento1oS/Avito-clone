import { createGlobalStyle } from 'styled-components';
import { NavLink } from 'react-router-dom';
export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  @font-face {
    font-family: "StratosSkyeng";
    src: local("StratosSkyeng"), local("StratosSkyeng"),
      url("../fonts/StratosSkyeng.woff2") format("woff2"),
      url("../fonts/StratosSkyeng.woff") format("woff");
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: "Roboto";
    src: local("Roboto-Black"), local("Roboto-BlackItalic"), local("Roboto-Bold"), local("Roboto-BoldItalic"),
      local("Roboto-Italic"), local("Roboto-Light"), local("Roboto-LightItalic"), local("Roboto-Medium"),
      local("Roboto-MediumItalic"), local("Roboto-Regular"), local("Roboto-Thin"), local("Roboto-ThinItalic"), 
      url("../fonts/Roboto-Black.ttf") format("ttf"),
      url("../fonts/Roboto-BlackItalic.ttf") format("ttf"),
      url("../fonts/Roboto-Bold.ttf") format("ttf"),
      url("../fonts/Roboto-BoldItalic.ttf") format("ttf"),
      url("../fonts/Roboto-Italic.ttf") format("ttf"),
      url("../fonts/Roboto-Light.ttf") format("ttf"),
      url("../fonts/Roboto-LightItalic.ttf") format("ttf"),
      url("../fonts/Roboto-Medium.ttf") format("ttf"),
      url("../fonts/Roboto-MediumItalic.ttf") format("ttf"),
      url("../fonts/Roboto-Regular.ttf") format("ttf"),
      url("../fonts/Roboto-Thin.ttf") format("ttf"),
      url("../fonts/Roboto-ThinItalic.ttf") format("ttf");
    font-weight: 400;
    font-style: normal;
  }
  a,
  a:visited,
  NavLink:visited, 
  NavLink {
    text-decoration: none;
    font-family: 'StratosSkyeng', sans-serif;
    cursor: pointer;
  }
  button,
  ._btn {
    cursor: pointer;
  }
  ul li {
    list-style: none;
  }
  html,
  body {
    width: 100%;
    height: 100%;
    font-family: 'Roboto', sans-serif;
    color: #000000;
  }
  div,
  button,
  a, NavLink {
    font-family: 'Roboto', sans-serif;
  }
`;
