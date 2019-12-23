import React from 'react'
import styled from '@emotion/styled'
import { GlobalStyles } from './global-styles'
import { ThemeProvider } from 'emotion-theming'
import * as themes from './themes'
import { PageNavigation } from './page-navigation'

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: black;
`

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={themes.main}>
      <GlobalStyles />
      <PageNavigation />
      <Body>
        <img src="logo.svg" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Body>
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
