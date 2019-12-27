import React from 'react'
import * as themes from './themes'

import { GlobalStyles } from './global-styles'
import { ThemeProvider } from 'emotion-theming'
import { PageNavigation } from './page-navigation'
import { ProductOverview } from './product-overview'

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={themes.main}>
      <GlobalStyles />
      <PageNavigation />
      <ProductOverview />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
