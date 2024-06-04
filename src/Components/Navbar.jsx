import React, { useState, useEffect } from "react";
import { IoSearchSharp } from "react-icons/io5";
import logo from "/logo.png";
import { FaBars, FaCaretDown, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const savedLanguage = localStorage.getItem("selectedLanguage") || "en";
    i18n.changeLanguage(savedLanguage);
  }, [i18n]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguage = () => {
    setIsToggle(!isToggle);
  };

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language, (err, t) => {
      if (err) return console.log('something went wrong loading', err);
      console.log('language changed to', language);
    });
    localStorage.setItem("selectedLanguage", language);
    setIsToggle(false); 
    navigate("/");
  };

  const navItems = [
    { title: t('nav.jewelry'), path: "/" },
    { title: t('nav.clothing'), path: "/" },
    { title: t('nav.home'), path: "/" },
    { title: t('nav.wedding'), path: "/" },
    { title: t('nav.toys'), path: "/" },
    { title: t('nav.art'), path: "/" },
    { title: t('nav.craft'), path: "/" },
  ];

  return (
    <header className="max-w-screen-2xl mx-auto xl:px-28 px-4 absolute top-0 right-0 left-0">
      <div className="relative inline-block text-left">
        <div>
          <button
            type="button"
            className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-black bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={toggleLanguage}
          >
            {i18n.language === "en" ? "English" : "Việt Nam"}
            <FaCaretDown className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
          </button>
        </div>

        {isToggle && (
          <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div
              className="py-1"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="options-menu"
            >
              <button
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleLanguageChange("en")}
              >
                English
              </button>
              <button
                className="block w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                role="menuitem"
                onClick={() => handleLanguageChange("vi")}
              >
                Việt Nam
              </button>
            </div>
          </div>
        )}
      </div>

      <nav className="flex justify-between items-center container md:py-4 pt-6 pb-3">
        <IoSearchSharp className="text-black w-5 h-5 cursor-pointer hidden md:block" aria-label="Search" />
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>

        <div className="text-lg text-black sm:flex items-center gap-4 hidden">
          <a href="/" className="flex items-center gap-2">
            <FaUser />
            {t('nav.account')}
          </a>
          <a href="/" className="flex items-center gap-2">
            <FaShoppingBag />
            {t('nav.shopping')}
          </a>
        </div>
        <div className="sm:hidden">
          <button onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? (
              <FaTimes className="w-5 h-5 text-black" />
            ) : (
              <FaBars className="w-5 h-5 text-black" />
            )}
          </button>
        </div>
      </nav>
      <hr />
      <div className="pt-4">
        <ul className="lg:flex items-center justify-between text-black hidden">
          {navItems.map(({ title, path }) => (
            <li key={title} className="hover:text-orange-600">
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ul
          className={`bg-black text-white px-4 py-2 rounded ${
            isMenuOpen ? "" : "hidden"
          }`}
        >
          {navItems.map(({ title, path }) => (
            <li
              key={title}
              className="hover:text-orange-600 my-3 cursor-pointer"
            >
              <Link to={path}>{title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
