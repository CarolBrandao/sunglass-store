import React from 'react'
import * as themes from './themes'

import { GlobalStyles } from './global-styles'
import { ThemeProvider } from 'emotion-theming'
import { PageNavigation } from './page-navigation'
import { ProductOverview } from './product-overview'
import { Footer } from './footer'

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={themes.main}>
        <GlobalStyles />
        <PageNavigation />
        <ProductOverview />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App
