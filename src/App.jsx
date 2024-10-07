import { Routes, Route } from 'react-router-dom';
import { ContactMe } from './components/pages/ContactMe.jsx';
import { MyBio } from './components/pages/MyBio.jsx';
import { MyWork } from './components/pages/MyWork.jsx';
import { Resume } from './components/pages/Resume.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MyBio />} index />
      <Route path="/MyWork" element={<MyWork />} />
      <Route path="/ContactMe" element={<ContactMe />} />
      <Route path="/Resume" element={<Resume />} />
    </Routes>
  );
}

export default App;