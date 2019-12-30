import React from 'react'
import { Route, Redirect, Switch, BrowserRouter as Router } from 'react-router-dom'

import * as themes from './themes'

import { GlobalStyles } from './global-styles'
import { ThemeProvider } from 'emotion-theming'
import { PageNavigation } from './page-navigation'
import { ProductDetails } from './product-details'
import { ProductOverview } from './product-overview'

export function App() {
  return (
    <Router>
      <ThemeProvider theme={themes.main}>
        <GlobalStyles />
        <Route path="/" component={PageNavigation} />
        <Switch>
          <Redirect exact from="/" to="/product-overview" />
          <Route path="/product-details/:id" component={ProductDetails} />
          <Route path="/product-overview" component={ProductOverview} />
        </Switch>
    </ThemeProvider>
  </Router>
  )
}
