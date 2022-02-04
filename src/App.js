import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/" element={<ProtectedRoutes />}> 
          <Route path="home" element={<Dashboard />} />
        </Route>
        <Route />
      </Routes>
    </div>
  );
}

export default App;
