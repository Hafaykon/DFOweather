import './style/App.css';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {Header} from "./components/Header";
import MainPage from "./pages/MainPage";
import Forecast from "./pages/Forecast";

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
              <Routes>
                  <Route index path="/" element={<MainPage />}/>
                  <Route path="/forecast" element={<Forecast />} />
              </Routes>
      </QueryClientProvider>
  );
}

export default App;
