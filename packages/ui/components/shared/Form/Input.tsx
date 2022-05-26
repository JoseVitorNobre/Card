import { InputHTMLAttributes } from 'react'
import styled from 'styled-components'

import { Control, Controller } from 'react-hook-form'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  control: Control<any>
  name: string
}

export const Input: React.FC<Props> = ({ name, control, defaultValue = '', ...props }) => {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
        render={({ field }) => <StyledInput {...field} {...props} />}
      />
    </Container>
  )
}

const Container = styled.div``

const StyledInput = styled.input``
