
import './App.scss';
import { Content } from './components/HomeChart';
import { Toggle } from './components/Toggle';
import { useDarkMode } from './style/DarkMode';
import { GlobalStyles, lightTheme, darkTheme } from './style/globalStyles';
import styled, { ThemeProvider } from 'styled-components';

const Container = styled.div`
  max-width: 50%;
  margin: 8rem auto 0;
`;

function App() {
  const [ theme, toggleTheme ] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>
      <Container>
        <GlobalStyles />
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <Content />
      </Container>
    </ThemeProvider>
  );
}


export default App;
