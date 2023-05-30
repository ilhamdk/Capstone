import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
/* eslint-disable */

import CloseIcon from "../images/close-icon.png";
import HamMenu from "../images/ham-menu-icon.png";
import navicon from "../images/nav-icon.png";
import Support from "../images/support.png"

import { SiGmail } from "react-icons/si"
import { FiMapPin } from "react-icons/fi"
import { FaRegCopyright } from "react-icons/fa"

import Abouts from "../images/about-images.png";


const Aboutus = () => {

  useEffect(() => {
    // navbar toggling
    const navbarShowBtn = document.querySelector('.navbar-show-btn');
    const navbarCollapseDiv = document.querySelector('.navbar-collapse');
    const navbarHideBtn = document.querySelector('.navbar-hide-btn');

    navbarShowBtn.addEventListener('click', function(){
        navbarCollapseDiv.classList.add('navbar-show');
    });
    navbarHideBtn.addEventListener('click', function(){
        navbarCollapseDiv.classList.remove('navbar-show');
    });

    // stopping all animation and transition
    let resizeTimer;
    window.addEventListener('resize', () =>{
        document.body.classList.add('resize-animation-stopper');
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            document.body.classList.remove('resize-animation-stopper');
        }, 400);
    });
  }, []);

  //dropdown
  
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    setIsActive(!isActive);
  };

  return (
    <>
    <nav className="navbar bg-white">
        <div className="container flex">
          <a href="/landing" className="navbar-brand">
            <img src={navicon} alt="site logo" />
          </a>
          <button type="button" className="navbar-show-btn">
            <img src={HamMenu} alt="bnd" />
          </button>

          <div className="navbar-collapse bg-white">
            <button type="button" className="navbar-hide-btn">
              <img src={CloseIcon} alt="bnd" />
            </button>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a href="/landing" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                    <div
                      className={`dots ${isActive ? 'active' : ''}`}
                      onClick={toggleMenu}
                    >
                      <a href="#" className='nav-link'>Features</a>
                      <div className="shadow"></div>
                      <div className="container-dropdown cut">
                        <div className="drop"></div>
                      </div>
                      <div className="list">
                        <ul>
                          <li><Link to="/login">Consultation</Link></li>
                          <li><Link to="/tips">Stress Release Tips</Link></li>
                          <li><Link to="/quizz">Depressed Test</Link></li>
                        </ul>
                      </div>
                    </div>
                    <div className="cursor" onClick={toggleMenu}></div>
              </li>
              <li className="nav-item">
                <a href="/aboutus" className="nav-link">
                  About us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section id="about" className="about pt">
         <div className="about-inner">
          <div className="section-head">
                  <h2 className='Sts'>About Us</h2>
          </div>
            <div className="container grid">
              <div className="about-left text-center">
                <p className="text">
                "Beyond the darkness" secara harfiah dapat diterjemahkan sebagai "melebihi kegelapan" atau "lebih dari kegelapan" dalam Bahasa Indonesia. Dalam konteks kesehatan mental, frasa ini dapat memiliki beberapa arti atau konotasi, tergantung pada konteks dan interpretasi individu. Beberapa mungkin mengartikan "beyond the darkness" sebagai pencapaian keadaan pikiran yang sehat dan positif setelah melewati masa-masa sulit atau pengalaman traumatis dalam hidup mereka, sedangkan yang lain mungkin mengartikannya sebagai proses penyembuhan diri dari kondisi kesehatan mental yang mengganggu, seperti depresi atau gangguan kecemasan. Secara umum, "beyond the darkness" dapat diartikan sebagai kemampuan untuk menemukan cahaya dan harapan di tengah masa-masa sulit atau pengalaman yang menantang dalam hidup kita, dan untuk berkembang dan menjadi pribadi yang lebih kuat dan sehat secara emosional.
                </p>
              </div>
              <div className="about-right flex">
                <div className="img">
                  <img src={Abouts} alt='bnd'/>
                </div>
              </div>
            </div>
          </div>
      </section>
      <footer id="footer" className="footer text-center">
        <div className="container">
          <div className="footer-inner text-white grid">
              <div className="icon">
                <img src={navicon} alt='bnd' />
              </div>


            <div className="footer-item">
              <h3 className="footer-head">Disclaimer !</h3>
                <h2>
                  Jika Anda sedang mengalami krisis psikologis yang mengancam hidup Anda, layanan ini tidak direkomendasikan.
                </h2>
                <h2>
                  Silakan langsung menghubungi <span>119.</span> 
                </h2>
            </div>

            <div className="footer-item">
              <h3 className="footer-head">Didukung Oleh</h3>
              <img src={Support} alt='bnd' />
              <div className="footer-right-content">
                <SiGmail className='footer-icons' size={30} />
                <h4>Beyondthedarkness@gmail.com</h4>
              </div>
              <div className="footer-right-content">
                <FiMapPin className='footer-icons' size={45} />
                <h4>Jl. Semolo Waru No.19, Medokan Semampir, Surabaya.</h4>
              </div>
              <div className="footer-right-content">
                <FaRegCopyright className='footer-icons' size={32} />
                <h4>2023 - BnD, Surabaya .</h4>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Aboutus