import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Page/Home';
import About from './Page/About';
import Contact from './Page/Contact';
import { Login } from './Page/Login';
import { Registration } from './Page/Registration';
import { Services } from './Page/Services';
import Logout from './Page/Logout';
import Creative from './Page/Creative';
import { AdminUsers } from './Page/AdminUsers';
import { AdminContacts } from './Page/AdminContacts';
import Navbar from './Components/Navbar';
import { AdminLayout } from './Page/Admin-Layout';
import AdminUpdate from './Page/AdminUpdate.jsx';
const App = () => {
  return (
    <Router>
      <Navbar />
      <main style={{ minHeight: 'calc(100vh - 120px)' }}>
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
          <Route path='/admin/*' element={<AdminLayout />}>
            <Route path='users' element={<AdminUsers />} />
            <Route path='contacts' element={<AdminContacts />} />
            <Route path='users/:id/edit' element={<AdminUpdate />} />
          </Route>
        </Routes>
      </main>
    </Router>
  );
};

export default App;
