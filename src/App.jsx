import { ThemeProvider, createTheme } from '@mui/material/styles';
import TrackerCard from "./components/TrackerCard"

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <TrackerCard />
    </ThemeProvider>
  );
}

export default App;
