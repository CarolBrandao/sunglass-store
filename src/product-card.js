import React from 'react'
import styled from '@emotion/styled'
import PropTypes from 'prop-types'

const Product = styled.a`
	cursor: pointer;
`

const Sunglass = styled.div`
	height: 400px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
	background-image: ${props => `url(${props.src})`};
	position: relative;
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

const Overlay = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  transition: .5s ease;
  background-color: rgba(255, 255, 255, 0.8);

  &:hover {
    opacity: 1;
  }
`

const TextOverlay = styled.div`
	color: rgba(0, 0, 0, 0.5);;
  font-size: ${props => props.theme.fontSizes[1]}px;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  text-align: center;
  text-transform: uppercase;
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
  padding-top: 10px;
`



export function ProductCard(props){
	return (
		<Product>
			<Sunglass src={`thumbnails/${props.title}.jpg`}>
				<Overlay><TextOverlay>Available in </TextOverlay></Overlay>
			</Sunglass>
			<Title>{props.title}</Title>
			<Description>
				<span>{props.description}</span>
				<span>{props.price}</span>
			</Description>
		</Product>
	)
}

ProductCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	price: PropTypes.string,
}