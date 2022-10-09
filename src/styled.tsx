import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');
  
  :root {
    --white-1: #FFFFFF;
    --white-2: #C9D1D9;
    --white-3: #8E97A2;

    --white-3-20: #8E97A233;
    --white-3-5: #8E97A211;

    --black-1: #0D1117;
    --black-2: #161B22;
    --black-3: #333941;

    --black-1-80: #0D1117CC;


    --blue-1: #1F6FEB;
    --blue-2: #58A6FF;
    
    --default-font-family: 'Montserrat', sans-serif;
    
    --font-size-1: 1.5rem;
    --font-size-2: 1.25rem;
    --font-size-3: 1rem;
    --font-size-4: 0.875rem;
    --font-size-5: 0.75rem;
    --font-size-6: 0.625rem;
  }
  
  body {
    margin: 0;
    font-family: var(--default-font-family);
    font-size: var(--font-size-5);
    background: var(--black-1);
    color: var(--white-2);
  }
  
  h1 {
    font-size: var(--font-size-1);
  }

  h2 {
    font-size: var(--font-size-2);
  }

  h3 {
    font-size: var(--font-size-3);
  }

  h4 {
    font-size: var(--font-size-4);
  }

  h5, p {
    font-size: var(--font-size-5);
  }

  h6 {
    font-size: var(--font-size-6);
  }
  
  a {
    all: unset;
  }
  
  svg {
    display: block;
    flex-shrink: 0;
  }
`;

export default GlobalStyle;
