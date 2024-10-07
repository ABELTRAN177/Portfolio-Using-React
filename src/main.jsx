import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { ContactMe } from './components/pages/ContactMe.jsx';
import { MyBio } from './components/pages/MyBio.jsx';
import { MyWork } from './components/pages/MyWork.jsx';
import { Resume } from './components/pages/Resume.jsx';

createRoot(document.getElementById("root")).render(
  <Router>
    <Nav />
    <Routes>
      <Route path="/" element={<MyBio />} />
      <Route path="/mywork" element={<MyWork />} />
      <Route path="/contactme" element={<ContactMe />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    <Footer />
  </Router>
);