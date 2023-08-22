import styled from 'styled-components'


export type ButtonVariant = 'primary' | 'secundary' | 'danger' | 'success'

interface ButtonConainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secundary: 'yellowgreen',
  danger: 'red',
  success: 'green'
}


export const ButtonConatiner = styled.button <ButtonConainerProps>`
  width: 100px;
  height: 40px;

  ${props => {
    return `background-color: ${buttonVariants[props.variant]}`
  }}
`