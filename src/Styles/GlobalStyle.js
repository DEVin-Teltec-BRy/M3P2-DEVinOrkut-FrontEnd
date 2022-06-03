import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    :root {
        --blue-header: #779dcd;
        --blue-body: #93bde6;
        --pink: #e01989;
        --white: #ffffff;
        --black: #000000;
        --lemon: #DDD92A;
        --button: #c9d8eb;
        --button-hover: #f8fafd;
        --border-button: #6a6969;
        --card: #ebebed;
    }

    body{
        background-color: var(--blue-body)
    }
`;
