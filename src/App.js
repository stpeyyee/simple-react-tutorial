// import logo from './logo.svg';
import './App.css';

// for example components
import BasicTextFields from './components/BasicTextFields';
// import BasicButtons from './components/BasicButtons';

// for layout and responsive
// import BasicGrids from './components/BasicGrids';

// for component work with objects and hooks 
// import { Grid } from '@mui/material';
// import ProfilePage from './pages/ProfilePage';

// for theme and style 
// import BasicButtons from './components/BasicButtons';
// import { ThemeProvider } from '@mui/styles';
// import { lightTheme } from './theme/theme';

function App() {
  return (
    <div className="App">
      {/* for example components */}
      <BasicTextFields></BasicTextFields>
      {/* <BasicButtons></BasicButtons> */}

      {/* for layout and responsive */}
      {/* <BasicGrids></BasicGrids> */}

      {/* for component work with objects and hooks */}
      {/* <Grid item container lg={12} spacing={1}>
        <ProfilePage></ProfilePage> 
      </Grid> */}

      {/* for theme and style */}
      {/* <ThemeProvider theme={lightTheme}>
        <BasicButtons></BasicButtons>
      </ThemeProvider> */}
    </div>
  );
}

export default App;
