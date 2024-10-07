// Import necessary modules from their respective files
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Nav } from './components/Navbar.jsx';
import { Footer } from './components/Footer.jsx';
import { ContactMe } from './components/pages/ContactMe.jsx';
import { MyBio } from './components/pages/myBio.jsx';
import { MyWork } from './components/pages/MyWork.jsx';
import { Resume } from './components/pages/Resume.jsx';

// Create a root React component and render it into the DOM element with the id "root"
createRoot(document.getElementById("root")).render(
  // Use the Router component to enable routing
  <Router>
    {/* // The Nav component is always displayed because it's outside the Routes component */}
    <Nav />
    {/* // The Routes component is where you define your routes */}
    <Routes>
      {/* // Each Route component represents a single route
      // The path prop is the URL path, and the element prop is the component to render when the path matches the current URL */}
      <Route path="/" element={<MyBio />} />
      <Route path="/mywork" element={<MyWork />} />
      <Route path="/contactme" element={<ContactMe />} />
      <Route path="/resume" element={<Resume />} />
    </Routes>
    {/* // The Footer component is always displayed because it's outside the Routes component */}
    <Footer />
  </Router>
);v