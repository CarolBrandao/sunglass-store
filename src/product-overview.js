import React from 'react'
import styled from '@emotion/styled'
import { ProductCard } from './product-card'
import { products } from './products'

const Grid = styled.div`
	padding: ${props => props.theme.space[4]}px;
	display: grid;
	grid-template-columns: auto auto auto; 
  grid-column-gap: 40px;
  grid-row-gap: 60px;

  ${props => 
  	`${props.theme.mq[4]}{
      padding: ${props.theme.space[2]}px;
      grid-column-gap: ${props.theme.space[2]}px;
     }`
  }

  ${props => 
  	`${props.theme.mq[3]}{
      grid-template-columns: auto auto;
      padding: ${props.theme.space[2]}px;
     }`
  }
  ${props => 
  	`${props.theme.mq[1]}{
      grid-template-columns: auto;
      padding: 0;
      padding-top: ${props.theme.space[2]}px;
     }`
  }
`

export function ProductOverview(){
	return (
		<Grid>
			{products.map(product => <ProductCard 
				key={product.id} 
				title={product.title} 
				price={product.price} 
				description={product.description} 
			/>)}
		</Grid>
	)
}