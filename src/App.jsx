import './style/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from "@mui/material/styles";
import {Header} from "./components/Header";
import MainPage from "./pages/MainPage";
import {Location} from "./pages/Location";

export const darkPurpleTheme = createTheme({
  palette: {
      primary: {
        main: "#ffdd20",
        light: "#ffffff",
        dark: "#a548eb",
        contrastText: "#ffdd20"
      }
    },
});

function App() {
  return (
      <ThemeProvider theme={darkPurpleTheme}>
          <Header/>
          <BrowserRouter>
              <Routes>
                  <Route index path="/" element={<MainPage />}/>
                  <Route path="/location" element={<Location />} />
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
