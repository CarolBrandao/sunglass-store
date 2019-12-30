import React from 'react'
import styled from '@emotion/styled'
import { ProductCard } from './product-card'
import { products } from './products'
import { Line } from './common'
import { Footer } from './footer'

const Grid = styled.div`
  padding: ${props => props.theme.space[4]}px;
  padding-bottom: ${props => props.theme.space[5]}px;
  display: grid;
  grid-template-columns: auto auto auto; 
  grid-column-gap: 40px;
  grid-row-gap: 60px;

  ${props => 
    `${props.theme.mq[5]}{
      padding: ${props.theme.space[2]}px;
      grid-column-gap: ${props.theme.space[2]}px;
     }`
  }

  ${props => 
    `${props.theme.mq[4]}{
      grid-template-columns: auto auto;
      padding: ${props.theme.space[2]}px;
     }`
  }
  ${props => 
    `${props.theme.mq[2]}{
      grid-template-columns: auto;
      padding: 0;
      padding-top: ${props.theme.space[2]}px;
     }`
  }
`

export function ProductOverview(){
  return (
    <React.Fragment>
      <Line />
      <Grid>
        {products.map(product => <ProductCard 
          key={product.id} 
          id={product.id} 
          title={product.title} 
          price={product.price} 
          brand={product.brand} 
        />)}
      </Grid>
      <Footer showSocialNetworks />
    </React.Fragment>
  )
}