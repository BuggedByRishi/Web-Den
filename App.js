// App.js
import React, { useState, useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Attendance from './components/Attendance';
import StudentDetail from './components/StudentDetail';
import Events from './components/Events';
import Seminar from './components/Seminar';
import InnovationHub from './components/InnovationHub';
import StudentPerformancePage from './components/StudentPerformancePage';
import NoticesAndCircularsPage from './components/NoticesAndCircularsPage';
import NoticeDetailsPage from './components/NoticeDetailsPage';
import GradeCardList from './components/GradeCardList';
import './components/dashboard.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className={menuOpen ? 'menu-open' : ''}>
      <Navbar toggleMenu={toggleMenu} />
      {menuOpen && <Sidebar />}
      <div className="content-container">
        <Routes>
          <Route path="/" element={<Content />} />
          <Route path="/attendance" element={<Attendance />} />
          <Route path="/student-details" element={<StudentDetail />} />
          <Route path="/events" element={<Events />} />
          <Route path="/seminars" element={<Seminar />} />
          <Route path="/innovation-hub" element={<InnovationHub />} />
          <Route path="/student-performance" element={<StudentPerformancePage />} />
          <Route path="/notices-circulars" element={<NoticesAndCircularsPage />} />
          <Route path="/notices-circulars/:id" element={<NoticeDetailsPage />} />
          <Route path="/result-sheet" element={<GradeCardList />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
