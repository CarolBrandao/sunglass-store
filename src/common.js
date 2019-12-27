import React from 'react'
import styled from '@emotion/styled'

export const Line = styled.hr`
	border: 0.6px solid #E5E5E5;
	margin: 0px 20px;
	${props => 
  	`${props.theme.mq[1]}{
      margin: 0px;
     }`
  }
`