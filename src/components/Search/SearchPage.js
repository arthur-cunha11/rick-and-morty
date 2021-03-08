import "../../styles/search.css";
import logo from "../../images/Logo.svg";
import logoMobile from "../../images/Logo-mobile.svg";
import React from "react";
import SearchBar from "./SearchBar";

// This components renders the main page
const SearchPage = () => {
  return (
    <div className="background">
      <picture>
        <source media="(max-width: 767px)" srcSet={logoMobile} />
        <img alt="Rick and Morty logo" className="logo" src={logo} />
      </picture>
      <SearchBar />
    </div>
  );
};

export default SearchPage;
