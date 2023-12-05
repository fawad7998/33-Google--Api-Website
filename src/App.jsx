import './App.css'
import Google from './google';
import Googlenext from './googlenext';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Google />} />
        <Route path="/search" element={<Googlenext/>} />
        {/* <Route path="/users/*" element={<UserApp />} /> */}
      </Routes>
    </BrowserRouter>
    {/* <Googlenext/> */}

    </>
  )
}

export default App
