import React from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Dashboard from '../components/Dashboard';
import MainComponent from '../components/MainComponent';

const Home = () => {
  return (
    <div className="   min-w-full lg:overflow-hidden">
      <Navbar />
      <MainComponent />
    </div>
  );
}

export default Home