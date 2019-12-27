import React from 'react'
import styled from '@emotion/styled'

const Product = styled.div`
	border: solid 1px white;
`

const Sunglass = styled.div`
	height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
	background-image:${props => `url(${props.src})`} ;

	${props => 
  	`${props.theme.mq[1]}{
      height: 650px;
     }`
  }
  ${props => 
  	`${props.theme.mq[0]}{
      height: 400px;
     }`
  }

`

const Title = styled.span`
	font-weight: bold;
	text-transform: uppercase;
	color: ${props => props.theme.colors.title};
	padding-top: ${props => `${props.theme.space[1]}px`};
	display: block;
`

const Description = styled.div`
	display: flex;
  justify-content: space-between;
  text-transform: uppercase;
  color: ${props => props.theme.colors.text};
`



export function ProductCard(props){
	return (
		<Product>
			<Sunglass src={`thumbnails/${props.title}.jpg`} />
				<Title>{props.title}</Title>
				<Description>
					<span>{props.description}</span>
					<span>{props.price}</span>
				</Description>
		</Product>
	)
}