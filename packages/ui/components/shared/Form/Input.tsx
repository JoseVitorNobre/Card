import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

import { Control, Controller, FieldError } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<any>
  name: string
  error?: FieldError
}

export const Input: React.FC<Props> = ({ name, control, defaultValue = '', error, ...props }) => {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => <StyledInput autoComplete='off' {...field} {...props} />}
      />
      {error && <MessageError>{error.message}</MessageError>}
    </Container>
  )
}

const Container = styled.div`
  padding: 4px;
  width: 100%;
`

const StyledInput = styled.input`
  width: 100%;
  background: none;
  display: block;
  border: 0;
  border-bottom: solid 1px #fff7;
  background-color: #fff3;
  padding: 14px;
  border-radius: 4px;
  color: #fff;
`

const MessageError = styled.span`
  font-size: 0.8rem;
  color: #f55;
  display: block;
  padding: 4px;
`
