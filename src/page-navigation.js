import React from 'react'
import styled from '@emotion/styled'

const NavWrapper = styled.nav`
	display: inline-flex;
	width: 100%;
	padding: 16px;
`
const Line = styled.hr`
	border: 0.6px solid #E5E5E5;
	margin: 0px 20px;
`

const Items = styled.div`
	display: flex;
	margin: auto;
`

const Item = styled.a`
  padding: 20px 10px;
  text-transform: uppercase;
`

export function PageNavigation() {
	return (
		<React.Fragment>
			<NavWrapper>
				<img src="logo.svg" alt="logo" />
				<Items>
					<Item> Ladies </Item>
					<Item> Gents </Item>
					<Item> Children </Item>
					<Item> Trends </Item>
					<Item> Sale </Item>
				</Items>
				<div>
					<Items>
						<Item> Login </Item>
						<Item> Help </Item>
						<Item><img src="images/search.svg" alt="search" /></Item>
						<Item><img src="images/cart.svg" alt="cart" /></Item>
					</Items>
				</div>
			</NavWrapper>
			<Line />
		</React.Fragment>
	)
}
