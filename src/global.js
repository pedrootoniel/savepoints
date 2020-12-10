import {createGlobalStyle} from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }


    :root {
      --color-button: #53B4CF;
      --color-background: #ffffff;
      --color-border: #ccc;
      --color-hover: #367DD9;
      --color-text: #000;
      --color-gray-text: #999;
      --color-comments: #333;
      --color-black: black;
    }
`