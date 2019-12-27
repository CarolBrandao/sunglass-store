import React from 'react'
import styled from '@emotion/styled'

const NavWrapper = styled.nav`
	display: inline-flex;
	width: 100%;
	padding: ${props => props.theme.space[1]}px;
	justify-content: space-between;
`

const SideMenu = styled.div`
	cursor: pointer;
	display: none;
	margin: auto 0;
	width: 32px;
	height: 32px;
	background-image: url('images/hamburger.svg');
	${props => 
  	`${props.theme.mq[1]}{
      display: unset;
     }`
  }
	
`
const MainMenu = styled.div`
  width: 100%;
  display: inline-flex;
  ${props => 
  	`${props.theme.mq[1]}{
      display: none;
     }`
  }
`

const Line = styled.hr`
	border: 0.6px solid #E5E5E5;
	margin: 0px 20px;
	${props => 
  	`${props.theme.mq[1]}{
      margin: 0px;
     }`
  }
`

const Items = styled.div`
	display: flex;
	margin: auto;
`

const Item = styled.a`
  padding: 20px 10px;
  text-transform: uppercase;
  
  ${props => 
  	`${props.theme.mq[2]}{
      padding: 20px 5px;
     }`
  }
`

const notAvailable = () => alert('Page not found')

export function PageNavigation() {
	return (
		<React.Fragment>
			<NavWrapper>
				<img src="logo.svg" alt="logo" />
				<SideMenu onClick={notAvailable} />
				<MainMenu>
					<Items>
						<Item onClick={notAvailable}> Ladies </Item>
						<Item onClick={notAvailable}> Gents </Item>
						<Item onClick={notAvailable}> Children </Item>
						<Item onClick={notAvailable}> Trends </Item>
						<Item onClick={notAvailable}> Sale </Item>
					</Items>
					<div>
						<Items>
							<Item onClick={notAvailable}> Login </Item>
							<Item onClick={notAvailable}> Help </Item>
							<Item onClick={notAvailable}><img src="images/search.svg" alt="search" /></Item>
							<Item onClick={notAvailable}><img src="images/cart.svg" alt="cart" /></Item>
						</Items>
					</div>
				</MainMenu>
			</NavWrapper>
			<Line />
		</React.Fragment>
	)
}
