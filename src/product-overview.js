import React from 'react'
import styled from '@emotion/styled'
import { ProductCard } from './product-card'
import { Line } from './common'
import { Footer } from './footer'
import * as products from './products'
import { Filters } from './filters'

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

  const [color, setColor] = React.useState(undefined)

  const filter = color && {color: color}

  const myProducts = products.getProducts(filter)

  return (
    <React.Fragment>
      <Line />
      <Filters onFilter={setColor} color={color} />
      <Line />
      <Grid>
        {myProducts.map(product => <ProductCard 
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