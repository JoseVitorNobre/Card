import { ThemeProvider } from 'styled-components'
import { Button, GlobalStyles, theme } from 'ui'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Button text='Testando' />
      <Button text='Testando 2' />
      <Button />
    </ThemeProvider>
  )
}
