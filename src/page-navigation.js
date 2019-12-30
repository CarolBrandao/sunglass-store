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
	background-image: url('/images/hamburger.svg');
	${props => 
  	`${props.theme.mq[2]}{
      display: unset;
     }`
  }
	
`
const MainMenu = styled.div`
  width: 100%;
  display: inline-flex;
  ${props => 
  	`${props.theme.mq[2]}{
      display: none;
     }`
  }
`

const Items = styled.div`
	display: flex;
	margin: auto;
`

const Item = styled.a`
  padding: 20px 10px;
  
  ${props => 
  	`${props.theme.mq[3]}{
      padding: 20px 5px;
     }`
  }
`

const Basket = styled(Item)`
	position: relative;
`

const BasketNumber = styled.div`
  color: white;
  background-color: ${props => props.theme.colors.blueBackground};
  width: fit-content;
  height: fit-content;
  border-radius: 9999px;
  text-align: center;
  padding: 1px 6px;
  position: absolute;
  bottom: 14px;
  right: -3px;
`

//TODO: Create pages
const notAvailable = () => alert('Page not found')

export function PageNavigation(props) {

	const basketNumber = 22
	return (
		<React.Fragment>
			<NavWrapper>
				<a href="/"><img src="/logo/logo.svg" alt="logo" /></a>
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
							<Item onClick={notAvailable}><img src="/images/search.svg" alt="search" /></Item>
							<Basket onClick={notAvailable}>
								<img src="/images/cart.svg" alt="cart" />
								{basketNumber && <BasketNumber>{basketNumber}</BasketNumber>}
							</Basket>
						</Items>
					</div>
				</MainMenu>
			</NavWrapper>
		</React.Fragment>
	)
}
