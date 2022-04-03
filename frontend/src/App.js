import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import HomePage from './pages/HomePage'
import Header from './components/Header';

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
      </Container>
    </Router>
  );
}

export default App;
