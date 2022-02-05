import React from 'react';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  const { userData: { data } } = useAuth();
  return (
    <h1>Welcome {data.user.full_name}!</h1>
  )
}

export default Dashboard;