import React from 'react'
import PropTypes from 'prop-types'
import styled from '@emotion/styled'
import { Line } from './common'


const Wrapper = styled.footer`
  ${props => props.bottom && `width: 100%; position: absolute; bottom: 0;`};
  ${props => 
    `${props.theme.mq[2]}{
      position: unset;
      bottom: unset;
     }`
  }
`

const Content = styled.div`
  display: flex;
  margin: 10px 20px 40px 20px;
  ${props => props.bottom && `margin-bottom: 0;`};
  ${props => 
    `${props.theme.mq[2]}{
      flex-direction: column;
      text-align: center;
     }`
  }
`

const Link = styled.a`
  padding-right: ${props => props.theme.space[1]}px;
  font-size: ${props => props.theme.fontSizes[0]}px;
  ${props => 
    `${props.theme.mq[2]}{
      display: block;
      font-size: ${props.theme.fontSizes[1]}px;
      padding: ${props.theme.space[0]}px;
     }`
  }
`

const SocialNetworks = styled.div`
  flex-grow: 3;
`

const Help = styled.div`
  flex-grow: 1;
`

const About = styled.div`
  flex-grow: 0;
`

//TODO: Create pages
const notAvailable = () => alert('Page not found')

export function Footer(props){
  return (
    <Wrapper bottom={props.bottom}>
      <Line wide />
      <Content bottom={props.bottom}>
        {
          props.showSocialNetworks && (
            <SocialNetworks>
              <Link onClick={notAvailable}>Facebook</Link>
              <Link onClick={notAvailable}>Instagram</Link>
            </SocialNetworks>
          )
        }
        <Help>
          <Link onClick={notAvailable}>Help</Link>
          <Link onClick={notAvailable}>Delivery & Returns</Link>
        </Help>
        <About onClick={notAvailable}>
          <Link>About Eoll</Link>
        </About>
      </Content>
    </Wrapper>
  )
}

Footer.propTypes = {
  bottom: PropTypes.bool,
  showSocialNetworks: PropTypes.bool,
}