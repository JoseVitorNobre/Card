import { ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string
}

export const Button: React.FC<Props> = ({ text = 'send', ...props }) => {
  return (
    <Container>
      <StyledButton {...props}>{text}</StyledButton>
    </Container>
  )
}

const Container = styled.div`
  padding: 4px;
`

const StyledButton = styled.button`
  border-radius: 4px;
  padding: 10px;
  border: none;
  color: #f1f1f1;
  background-color: ${props => props.theme.colors.primary};
`
