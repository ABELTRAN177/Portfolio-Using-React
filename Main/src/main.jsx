import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { contactMe } from '../src/components/pages/ContactMe.jsx';
import { myBio } from '../src/components/pages/MyBio.jsx';
import { myWork } from '../src/components/pages/MyWork.jsx';
import { Resume } from '../src/components/pages/Resume.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                index: true,
                element: <myBio />
            },
            {
                path: '/MyWork',
                element: <myWork />
            },
            {
                path: '/ContactMe',
                element: <ContactMe />
            },
            {
                path: '/Resume',
                // Rest of your code...
            }
        ]
    },
]);

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);