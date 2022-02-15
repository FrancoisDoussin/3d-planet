import { ThemeProvider } from "styled-components";
import Planet from './components/Planet/Planet';
import Presentation from './components/Presentation/Presentation';
import theme from "./theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Planet />
    <Presentation />
  </ThemeProvider>
);

export default App;
