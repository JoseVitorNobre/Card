import { ThemeProvider } from 'styled-components'
import { GlobalStyles, theme } from 'ui'
import { PageRoutes } from './routes'

export const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme[0]}>
      <GlobalStyles />
      <PageRoutes />
    </ThemeProvider>
  )
}
