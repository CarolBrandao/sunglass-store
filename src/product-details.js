import React from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import querystring from 'querystring'

import styled from '@emotion/styled'
import { getProductById } from './products'
import { Line, PrimaryButton , Button, RadioButton, Color, ColorOptions, ColorWrapper } from './common'
import { Footer } from './footer'

const Wrapper = styled.div`
  display: flex;

  ${props => 
    `${props.theme.mq[3]}{
      flex-direction: column;
     }`
  }
`

const Product = styled.div`
  background-image: url(${props => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  flex-grow: 1.5;
  padding-bottom: 700px;
  ${props => 
    `${props.theme.mq[4]}{
      padding-bottom: 500px;
     }`
  }
  ${props => 
    `${props.theme.mq[1]}{
      padding-bottom: 400px;
     }`
  }
  ${props => 
    `${props.theme.mq[0]}{
      padding-bottom: 300px;
     }`
  }
`
const Details = styled.div`
  flex-grow: 1;
  padding: 10% ${props => props.theme.space[3]}px ${props => props.theme.space[3]}px;
  display: flex;
  flex-direction: column;
  max-width: 50%;
  ${props => 
    `${props.theme.mq[4]}{
      max-width: 40%;
     }`
  }
  ${props => 
    `${props.theme.mq[3]}{
      max-width: 100%;
     }`
  }
  ${props => 
    `${props.theme.mq[0]}{
      padding: ${props.theme.space[1]}px;
     }`
  }

`

const Title = styled.div`
  font-weight: bold;
  color: ${props => props.theme.colors.title};
  padding-bottom: ${props => props.theme.space[0]}px;
`

const BrandAndPrice = styled.div`
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  padding-bottom: ${props => props.theme.space[2]}px;

`

const SelectColor = styled.span`
  padding: ${props => props.theme.space[0]}px;
  text-align: center;
`

const ButtonWrapper= styled.div`
  padding: ${props => props.theme.space[2]}px 0px;
  text-align: center
`

const Description = styled.span`
  max-width: 500px;
  text-transform: initial;
  padding: ${props => props.theme.space[2]}px 0px;
`

const Space = styled.div`
  padding: ${props => props.theme.space[0]}px 0px;
  display: flex;
  flex-direction: column;
`

const Property = styled.span`
  color: ${props => props.theme.colors.text};
  
`
const Value = styled.span`
  color: ${props => props.theme.colors.textDarker};
`

const SeeMore = styled.div`
  text-align: right;
  padding-bottom: 50px;

  ${props => 
    `${props.theme.mq[3]}{
      text-align: center;
      padding-top: 10px;
     }`
  }
`

const FooterWrapper = styled.div`
  height: 100%;
  position: relative;
`

export function ProductDetails(props){

  const [color, setColor] = React.useState('')

  const id = props.match.params.id
  const product = getProductById(id)
  const history = useHistory()
  const location = useLocation()
  const basketAmount = parseInt(querystring.parse(location.search.substr(1)).basket) || 0

  if(!id || !product){
    return null
  }

  return (
    <Wrapper>
      <Product src={`/thumbnails/${product.title}.jpg`} />
      <Details>
        <Title>{product.title}</Title>
        <BrandAndPrice>
          <span>{product.brand}</span>
          <Value>{product.price}</Value>
        </BrandAndPrice>
        <Line wide />
        <SelectColor>Select color</SelectColor>
        <ColorOptions>
          {
            product.colors.map(value => <RadioButton 
              name="select-color" 
              value={value} 
              key={value}
              onChange={() => setColor(value)} 
            >
              <ColorWrapper>
                <Color color={value} checked={value===color} />
                {value}
              </ColorWrapper>
            </RadioButton>
          )
          }
        </ColorOptions>
        <Line wide />
        <ButtonWrapper>
          <PrimaryButton 
            disabled={!Boolean(color)} 
            onClick={() => history.replace(`${location.pathname}?basket=${basketAmount + 1}`)}
          > 
            ADD TO BAG 
          </PrimaryButton>
        </ButtonWrapper>
        <Description>{product.description}</Description>
        <Space>
          <Property>Material</Property>
          <Value>{product.material}</Value>
        </Space>
        <Space>
          <Property>Shape</Property>
          <Value>{product.shape}</Value>
        </Space>
        <Space>
          <Property>Dimensions</Property>
          <Value>{product.dimensions}</Value>
        </Space>
        <SeeMore>
          {/* TODO: implement similar products page */}
          <Button onClick={() => alert('Not Implemented yet')}> See Similar Products </Button>
        </SeeMore>
        <FooterWrapper>
          <Footer bottom />
        </FooterWrapper>
      </Details>
    </Wrapper>
  )
}