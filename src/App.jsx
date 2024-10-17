import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Page/Home.jsx';
import About from './Page/About.jsx';
import Contact from './Page/Contact.jsx';
import { Login } from './Page/Login.jsx';
import { Registration } from './Page/Registration.jsx';
import { Services } from './Page/Services.jsx';
import Logout from './Page/Logout.jsx';
import Creative from './Page/Creative.jsx';
import Navbar from './Components/Navbar.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <main style={{ minHeight: 'calc(100vh - 120px)' }}>
          {' '}
          {/* Adjust height based on header and footer height */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='/services' element={<Services />} />
            <Route path='/logout' element={<Logout />} />
            <Route path='/creative' element={<Creative />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
