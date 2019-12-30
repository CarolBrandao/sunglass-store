import PropTypes from 'prop-types'
import React from 'react'

import styled from '@emotion/styled'

export const Line = styled.hr`
  border: 0.6px solid #E5E5E5;
  margin: 0px 20px;
  ${props => props.wide && `margin: 0`};
  ${props => 
    `${props.theme.mq[2]}{
      margin: 0px;
     }`
  }
`

export const ColorOptions = styled.div`
  margin: 0 auto;
  padding: ${props => props.theme.space[0]}px 0px;
`

export const Color = styled.div`
  width: 15px;
  height: 15px;
  background-color: ${props => props.theme.colors[props.color]};
  border-radius: 9999px;
  margin-right: 2px;
  border:  ${props => props.checked? 'double 3px #fff' : 'none'};
`
export const ColorWrapper = styled.div`
  display: inline-flex;
  padding-right: 10px;
`

export const Button = styled.button`
  color: ${props => props.theme.colors.button};
  background-color: transparent;
  border: 1px solid ${props => props.theme.colors.button};
  width: fit-content;
  padding: 10px;
  ${props => props.stretch && `width: 100%`};
  cursor: pointer;
  text-transform: uppercase;
`

export const PrimaryButton = styled.button`
  color: white;
  background-color: ${props => props.disabled? props.theme.colors.disabled : props.theme.colors.primaryButton};
  border: 0;
  width: fit-content;
  padding: 10px;
  ${props => props.stretch && `width: 100%`};
  cursor: ${props => props.disabled? 'not-allowed' : 'pointer' };
  text-transform: uppercase;


  &:hover:enabled, &:focus {
    opacity: 0.5;
  }
`


const Input = styled.input`
  display: none;
`

const Label = styled.label`
  ${props => (props.disabled ? `cursor: not-allowed;` : `cursor: pointer;`)};
`

export function RadioButton(props) {
  return (
    <Label disabled={props.disabled}>
      <Input
        name={props.name}
        type="radio"
        disabled={props.disabled}
        checked={props.checked}
        value={props.value}
        onChange={props.onChange}
      />
      {props.children}
    </Label>
  )
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
}