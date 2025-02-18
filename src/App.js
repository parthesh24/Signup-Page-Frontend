import './App.css';
import AccountDetails from './pages/AccountDetails';
import Header from './components/Header';
import { Footer } from './components/Footer';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import PersonalDetails from './pages/PersonalDetails';
import OrganizationDetails from './pages/OrganizationDetails';
import Credentials from './pages/Credentials';
import Success from './pages/Success';

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account-details" element={<AccountDetails />} />
          <Route path="/personal-details" element={<PersonalDetails />} />
          <Route path="/organization-details" element={<OrganizationDetails />} />
          <Route path="/credentials" element={<Credentials />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
