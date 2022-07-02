import { BrowserRouter } from "react-router-dom"
import { GlobalStyle } from './styles/Global';
import Routes from './routes';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </>
  );
}

export default App;
