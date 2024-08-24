import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Artwork from './pages/Artwork';
import Blog from './pages/Blog';
import Home from './pages/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/artwork" element={<Artwork />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
