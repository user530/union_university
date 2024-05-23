import { CurriculumPage } from './pages';
import { CssReset, GlobalStyles } from './components/styles';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssReset />
      <GlobalStyles />

      <CurriculumPage />
    </ThemeProvider>
  );
}

export default App;
