import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        transition-duration:.3s;
        font-family:'Inter', sans-serif;
    }

    body{
        position:relative;
        background: ${({ theme }) => theme.bg};
        padding:50px;

        :after{
            content:'';
            position:absolute;
            top:0;
            left:0;
            width:100%;
            height:270px;
            background: ${({ theme }) => theme.topbg};
            z-index:-1;
        }

        @media(max-width:767px){
            padding:50px 25px;
        }
    }

    main{
        margin:auto;
        width:100%;
        max-width:1440px;
    }
`

export default GlobalStyle
