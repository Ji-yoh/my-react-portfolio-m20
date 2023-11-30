// created separate file for portfolio that will conditionally render other components

import React, { useState } from 'react';
import Nav_ from './Nav';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Project from './pages/Project';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Footer from './pages/Footer';
import Writing from './pages/Writing';

export default function PortfolioPage() {
    const [currentPage, setCurrentPage] = useState('About Me');

    const renderPage = () => {
        if (currentPage === 'About Me') {
            return <AboutMe />;
        }
        if (currentPage === 'Projects') {
            return <Project />;
        }
        if (currentPage === 'Contact Me') {
            return <Contact />;
        }
        if (currentPage === 'Resume') {
            return <Resume />;
        }
        if (currentPage === 'Writing') {
            return <Writing />;
        }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            <Header/>
            <Nav_ currentPage={currentPage} handlePageChange={handlePageChange}/>
            {renderPage()}
            <Footer/>
        </div>
    )
}