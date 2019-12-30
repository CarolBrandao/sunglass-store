import React from 'react'
import styled from '@emotion/styled'

import * as products from './products'
import { RadioButton, Color, ColorOptions, ColorWrapper } from './common'

const Filter = styled.div`
  text-align: center;
  font-size: ${props => props.theme.fontSizes[1]}px;
  padding: ${props => props.theme.space[1]}px;
`

export function Filters(props){
  return (
    <Filter>
      <span>Color</span>
      <ColorOptions>
        {
          products.colors.map(value => <RadioButton 
            name="select-color" 
            value={value} 
            key={value}
            onChange={() => props.onFilter(value)} 
          >
            <ColorWrapper>
              <Color color={value} checked={value === props.color} />
              {value}
            </ColorWrapper>
          </RadioButton>
        )
        }
      </ColorOptions>
    </Filter>
  )
}