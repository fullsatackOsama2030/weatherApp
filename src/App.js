import './App.css';
import { createTheme, ThemeProvider} from '@mui/material';
import Topic from './Topic';
const theme=createTheme({
  typography:{
    fontFamily:['myfont']
  },
})
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
<Topic/>
    </div>
    </ThemeProvider>
  );
}

export default App;
