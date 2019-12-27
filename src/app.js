import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Redirect, Link, BrowserRouter as Router } from 'react-router-dom'

import * as serviceWorker from './serviceWorker'
import * as themes from './themes'

import { GlobalStyles } from './global-styles'
import { ThemeProvider } from 'emotion-theming'
import { PageNavigation } from './page-navigation'
import { Footer } from './footer'
import { ProductDetails } from './product-details'
import { ProductOverview } from './product-overview'

export function App() {
  return (
    <Router>
      <ThemeProvider theme={themes.main}>
        <GlobalStyles />
        <Route path="/" component={PageNavigation} />
        <Route path="/product-details" component={ProductDetails} />
        <Route path="/product-overview" component={ProductOverview} />
      <Footer />
    </ThemeProvider>
  </Router>
  )
}
