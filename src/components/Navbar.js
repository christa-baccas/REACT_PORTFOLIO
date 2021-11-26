import React, { useState } from "react";
import Body from "./Body";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";

function Navbar() {
  const [currentPage, setCurrentPage] = useState("About");

  const renderPage = () => {
    if (currentPage === "About") {
      return <About />;
    }
    if (currentPage === "Contact") {
      return <Contact />;
    }
    if (currentPage === "Resume") {
      return <Resume />;
    }
    if (currentPage === "Portfolio") {
      return <Portfolio />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
       <div>
          <div className="nav-bar">
            <Body
              currentPage={currentPage}
              handlePageChange={handlePageChange}
            />
          </div>
          <div>
          {renderPage()}
          </div>
        </div>
  );
}

export default Navbar;