//Import necessary dependencies

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import About from './pages/About/About';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact/Contact';
import Resume from './pages/Resume/Resume';
import Footer from './Footer/Footer';

function App() {
    return (
        //Router wrapper for navigation functionality
        <Router>
        <div className="app-container">
            {/* Header appears on all pages */}
            <main>
                <Routes>
                    {/* Default route redirects to About */}
                    <Route path="/" element={<About />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/resume" element={<Resume />} />
                </Routes>
            </main>

            {/* Footer appears on all pages */} 
            <Footer />
            </div>
            </Router>
    );
}

export default App;