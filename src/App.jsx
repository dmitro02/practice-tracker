import { ThemeProvider, createTheme } from '@mui/material/styles'
import Trackers from './components/Trackers'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <Trackers />
    </ThemeProvider>
  )
}

export default App
