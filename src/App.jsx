// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeMain from './components/HomeMain'
import ContactMain from './components/ContactMain'
import AboutMain from "./components/AboutMain"
import PlayersMain from "./components/PlayersMain";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomeMain />
                </>
              }
            />
            <Route path="/contact" element={<ContactMain />} />
            <Route path="/about" element={<AboutMain />} />
            <Route path="/players" element={<PlayersMain />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;