import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/index';
import HouseRules from './pages/house-rules';
import BarMenu from './pages/bar-menu';
import FAQ from './pages/faq';
import Giveaway from './pages/giveaway';
import Login from './pages/login';
import Dashboard from './pages/admin/dashboard';
import BarMenuEdit from './pages/admin/bar-menu-edit';
import GiveawayCode from './pages/admin/giveaway-code';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/house-rules" element={<HouseRules />} />
        <Route path="/bar-menu" element={<BarMenu />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/giveaway" element={<Giveaway />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/bar-menu-edit" element={<BarMenuEdit />} />
        <Route path="/admin/giveaway-code" element={<GiveawayCode />} />
      </Routes>
    </Router>
  );
}

export default App;
