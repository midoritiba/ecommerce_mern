import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Container>
        <Header />
          <div className="px-md-5 main-container shadow-lg">
            <main className='py-3'>
              <Routes>
                <Route path='/' element={<HomePage />} />  
              </Routes>
          </main>
        </div>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
