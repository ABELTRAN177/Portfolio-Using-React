// Import necessary components from their respective files
import { Nav } from '../src/components/Navbar';
import { Footer } from '../src/components/Footer';
// Import the Outlet component from react-router-dom
// Outlet is a placeholder component that renders the child route's element
import { Outlet } from 'react-router-dom';

// Define the App component
function App() {
  return (
    // Use a React fragment to group multiple elements
    <>
      {/* // Render the Nav component */}
      <Nav />
      {/* // Render the Outlet component
      // When a parent route is matched, the Outlet component renders the child route's element */}
      <Outlet />
      {/* // Render the Footer component */}
      <Footer> </Footer>
    </>
  );
}

// Export the App component as the default export
export default App;