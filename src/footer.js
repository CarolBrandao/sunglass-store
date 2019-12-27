import React from 'react'
import styled from '@emotion/styled'
import { Line } from './common'


const Wrapper = styled.footer`
	display: flex;
	margin: 10px 20px 40px 20px;
`

const Link = styled.a`
	text-transform: uppercase;
	padding-right: ${props => props.theme.space[1]}px;
	font-size: ${props => props.theme.fontSizes[0]}px;
`

const SocialNetworks = styled.footer`
	flex-grow: 3;
`

const Help = styled.footer`
	flex-grow: 1;
`

const About = styled.footer`
	flex-grow: 0;
`

//TODO: Create pages
const notAvailable = () => alert('Page not found')

export function Footer(){
	return (
		<React.Fragment>
			<Line />
			<Wrapper>
				<SocialNetworks>
					<Link onClick={notAvailable}>Facebook</Link>
					<Link onClick={notAvailable}>Instagram</Link>
				</SocialNetworks>
				<Help>
					<Link onClick={notAvailable}>Help</Link>
					<Link onClick={notAvailable}>Delivery & Returns</Link>
				</Help>
				<About onClick={notAvailable}>
					<Link>About Eoll</Link>
				</About>
			</Wrapper>
		</React.Fragment>
	)
}