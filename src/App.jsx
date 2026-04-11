
import './App.css'
import { Route, Routes } from "react-router-dom";
import RootLayout from './components/layout/RootLayout';
import Home from './components/pages/Home';
import { Error } from './components/pages/Error';
import About from './components/pages/About';
import Shope from './components/pages/Shop';
import Contact from './components/pages/Contact';

function App() {

  return (
    <>
   <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/ About" element={<About />} />
          <Route path="/ Shop" element={<Shope />} />
          <Route path="/ Contact" element={<Contact />} />
          <Route />
        </Route>
      </Routes>
    </>
  )
}

export default App
