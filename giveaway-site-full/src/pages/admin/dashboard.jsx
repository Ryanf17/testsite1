import React from 'react';
import { Link } from 'react-router-dom';
export default function Dashboard() {
  return (
    <div>
      <h1>Admin Dashboard</h1>
      <Link to="/admin/bar-menu-edit">Edit Bar Menu</Link><br />
      <Link to="/admin/giveaway-code">Edit Giveaway Access Code</Link>
    </div>
  );
}
