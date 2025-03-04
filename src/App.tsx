import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import GalleryPage from "./pages/GalleryPage";
import ComingSoon from "./components/ComingSoon";
import Header from "./components/Header";
import Footer from "./components/Footer";

// Toggle maintenance mode
const MAINTENANCE_MODE = false;

export default function App() {
  return (
    <Router>
      {MAINTENANCE_MODE ? (
        // TODO: Coming Soon should be switched with a Maintenance component
        <ComingSoon />
      ) : (
        <>
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </Router>
  );
}
