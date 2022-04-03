import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import ProductPage from './pages/ProductPage'
import ProfilePage from './pages/ProfilePage'
import RegisterPage from './pages/RegisterPage'
import PlaceOrderPage from './screens/PlaceOrderPage'

function App() {
  return (
    <Router>
      <Container>
        <Header />
          <div className="px-md-5 main-container shadow-lg">
            <main className='py-3'>
              <Routes>
                <Route path='/' element={<HomePage />} />  
                <Route path='/login' element={<LoginPage />} />
                <Route path='/register' element={<RegisterPage />} />
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/product/:id' element={<ProductPage/>} />
                <Route path='/placeorder' element={<PlaceOrderPage />} />
              </Routes>
          </main>
        </div>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
