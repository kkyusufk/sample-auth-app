import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';
import { ProvideAuth } from './context/AuthContext';

function App() {
  return (
    <ProvideAuth>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/" element={<ProtectedRoutes />}> 
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route />
        </Routes>
      </div>
    </ProvideAuth>
  );
}

export default App;
