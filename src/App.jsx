import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Articles from './pages/Articles';
import Premium from './pages/Premium';
import ArticleDetail from './pages/ArticleDetail';

function App() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-white">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/premium" element={<Premium />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
