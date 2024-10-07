import { Nav } from '../src/components/Navbar';
import { Footer } from '../src/components/Footer';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer> </Footer>
    </>
  );
}

export default App;