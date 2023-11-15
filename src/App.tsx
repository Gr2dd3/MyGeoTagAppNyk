import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Locations from './pages/Locations';
import DetailsPage from './pages/DetailsPage';
import GeoCatch from './pages/GeoCatch';
import Layout from './components/Layout';
// import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/GeoCatch" element={<GeoCatch />} />
            <Route path="/Locations" element={<Locations />} />
            <Route path="/Locations/:id" element={<DetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
