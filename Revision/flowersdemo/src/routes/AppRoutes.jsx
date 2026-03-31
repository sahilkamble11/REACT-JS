import NavBar from '../layouts/NavBar';
import { Routes, Route } from 'react-router-dom';    
import About from '../pages/About';
import Footer from '../layouts/Footer';
import Contact from '../pages/Contacts';
import Products from '../pages/Products';
import Home from '../pages/Home';


const AppRoutes = () => {
    return (
        <div>
            <NavBar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/products" element={<Products />} />
            </Routes>
            <Footer />

        </div>
    );
};

export default AppRoutes;