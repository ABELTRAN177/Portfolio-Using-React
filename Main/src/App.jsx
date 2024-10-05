import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Main from './Main';
import { useLocation } from 'react-router-dom';

function App() {
    const location = useLocation().pathname;

    return (
        <div>
            <Header>
            <Nav currentPage={currentPage} />
            </Header>
            <Main>
                <Page currentPage={currentPage} />
            </Main>
            <Footer />
        </div>
    );
}

export default App;