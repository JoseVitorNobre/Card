import { useState } from 'react'

interface Props {
  text?: string
}

export const Button: React.FC<Props> = ({ text = 'send' }) => {
  const [count, setCount] = useState(0)

  return (
    <button onClick={() => setCount(o => ++o)}>
      {text} - {count}
    </button>
  )
}
