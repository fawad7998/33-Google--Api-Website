import './App.css';
import Googlenext from './googlenext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Googlenext />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
