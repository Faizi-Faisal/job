import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';
import WorkHistory from './pages/WorkHistory';
import Payments from './pages/Payments';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/work-history" element={<WorkHistory />} />
        <Route path="/payments" element={<Payments />} />
        <Route
          path="*"
          element={
            <div>
              <h2>404: Page Not Found</h2>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;

