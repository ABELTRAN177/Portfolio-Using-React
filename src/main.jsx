import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import { ContactMe } from './components/pages/ContactMe.jsx';
import { MyBio } from './components/pages/MyBio.jsx';
import { MyWork } from './components/pages/MyWork.jsx';
import { Resume } from './components/pages/Resume.jsx';

const container = document.getElementById('root');
createRoot(container).render(
  <Router>
    <Routes>
      <Route path="*" element={<App />}>
        <Route index element={<MyBio />} />
        <Route path="MyWork" element={<MyWork />} />
        <Route path="ContactMe" element={<ContactMe />} />
        <Route path="Resume" element={<Resume />} />
      </Route>
    </Routes>
  </Router>
);