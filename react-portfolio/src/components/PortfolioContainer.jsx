import { useState } from "react";



import Header from "../components/pages/Header";
import Navbar from "../components/pages/Navbar";
import Project from "../components/pages/Project";
import Footer from "../components/pages/Footer";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('About');

    const renderPage = () => {
        if(currentPage === 'About') {
            return <Home />;
        }
        if(currentPage === '') {
            return <Home />;
        }
        
    }
}

