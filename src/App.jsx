import './style/App.css';
import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {Header} from "./components/Header";
import MainPage from "./pages/MainPage";
import Location from "./pages/Location";

const queryClient = new QueryClient()

function App() {
  return (
      <QueryClientProvider client={queryClient}>
          <Header/>
              <Routes>
                  <Route index path="/" element={<MainPage />}/>
                  <Route path="/location" element={<Location />} />
              </Routes>
      </QueryClientProvider>
  );
}

export default App;
