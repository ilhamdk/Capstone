import React, { useEffect, useState } from 'react';
import '../Landing.css'
import { Link } from 'react-router-dom';
/* eslint-disable */

import Dot from "../images/4-dots.png";
import About from "../images/about-images.png";
import CloseIcon from "../images/close-icon.png";
import Doc1 from "../images/doc-1.png";
import Doc2 from "../images/doc-2.png";
import Doc3 from "../images/doc-3.png";
import HamMenu from "../images/ham-menu-icon.png";
import Header from "../images/header.png";
import navicon from "../images/nav-icon.png";
import Consul from "../images/consul.png";
import Tes from "../images/tes.png";
import Sts from "../images/Sts.png";
import Vector from "../images/Vector.png"
import Circle from "../images/circle-hero.png"
import Support from "../images/support.png"

import { BsInstagram, BsTwitter } from "react-icons/bs";
import { CiFacebook } from "react-icons/ci"
import { IoMdChatboxes } from "react-icons/io"
import { MdOutlineTipsAndUpdates } from "react-icons/md"
import { HiDocumentCheck } from "react-icons/hi2"
import { SiGmail } from "react-icons/si"
import { FiMapPin } from "react-icons/fi"
import { FaRegCopyright } from "react-icons/fa"

const LandingPage = () => {

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
    <main>
      <header className="header bg-white">
      <nav className="navbar bg-white">
        <div className="container flex">
          <a href="/landing" className="navbar-brand">
            <img src={navicon} alt="site logo" />
          </a>
          <button type="button" className="navbar-show-btn">
            <img src={HamMenu} />
          </button>

          <div className="navbar-collapse bg-white">
            <button type="button" className="navbar-hide-btn">
              <img src={CloseIcon} />
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

        <div className="header-inner text-white text-center">
          <div className="container grid">
              <div className="color"></div>
              <div className="color"></div>
              <div className="color"></div>
            <div className="header-inner-left">
              <h1>
              Beyond the Darkness
              </h1>
              <p className="text text-md">
              platform layanan dukungan kesehatan mental dan pengembangan pribadi yang bertujuan untuk membantu Anda mewujudkan kesehatan mental dan berkembang secara optimal.
              </p>
              <div className="btn-group">
                <a href="https://www.instagram.com/bnd.cafe/" className="btn btn-light-blue">
                  <BsInstagram size={30}/>
                </a>
                <a href="https://www.facebook.com/profile.php?id=100051840548321" className="btn btn-light-blue">
                  <CiFacebook  size={30}/>
                </a>
                <a href="https://twitter.com/BNDmag" className="btn btn-light-blue">
                  <BsTwitter  size={30}/>
                </a>
              </div>
            </div>
            <div className="header-inner-right">
              <img src={Header} />
            </div>
          </div>
          <img src={Vector} className='vector-hero' />
          <img src={Circle} className='circle-hero'/>
        </div>
      </header>

      <main>
        <section id="about" className="about pt">
          <div className="about-inner">
          <div className="section-head">
                  <h2>About Us</h2>
          </div>
            <div className="container grid">
              <div className="about-left text-center">
                <p className="text">
                "Beyond the darkness" secara harfiah dapat diterjemahkan sebagai "melebihi kegelapan" atau "lebih dari kegelapan" dalam Bahasa Indonesia. Dalam konteks kesehatan mental, frasa ini dapat memiliki beberapa arti atau konotasi, tergantung pada konteks dan interpretasi individu. Beberapa mungkin mengartikan "beyond the darkness" sebagai pencapaian keadaan pikiran yang sehat dan positif setelah melewati masa-masa sulit atau pengalaman traumatis dalam hidup mereka, sedangkan yang lain mungkin mengartikannya sebagai proses penyembuhan diri dari kondisi kesehatan mental yang mengganggu, seperti depresi atau gangguan kecemasan. Secara umum, "beyond the darkness" dapat diartikan sebagai kemampuan untuk menemukan cahaya dan harapan di tengah masa-masa sulit atau pengalaman yang menantang dalam hidup kita, dan untuk berkembang dan menjadi pribadi yang lebih kuat dan sehat secara emosional.
                </p>
              </div>
              <div className="about-right flex">
                <div className="img">
                  <img src={About} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="services">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="lead">BnD Features</h2>
              <div className="line-art flex">
                <div></div>
                <img src={Dot} />
                <div></div>
              </div>
            </div>
            <div className="services-inner text-center grid">
              <Link to="/login">
              <article className="service-item">
                <div className="icon">
                  <IoMdChatboxes className='pinks' size={75} />
                </div>
                <h3>Consultation</h3>
              </article>
              </Link>

              <Link to="/tips">
              <article className="service-item">
                <div className="icon">
                  <MdOutlineTipsAndUpdates className='pinks' size={75} />
                </div>
                <h3>Stress Release Tips</h3>
              </article>
              </Link>

              <Link to="/quizz">
              <article className="service-item">
                <div className="icon">
                  <HiDocumentCheck className='pinks' size={75} />
                </div>
                <h3>Depressed Test</h3>
              </article>
              </Link>
            </div>
          </div>
        </section>

        <section id="about" className="about pt">
          <div className="about-inner">
          <div className="section-head">
          </div>
            <div className="container grid">
            <div className="about-right flex">
                <div className="img">
                  <div className="colors"></div>
                  <img className='img-consul' src={Consul} />
                </div>
              </div>
              <div className="about-left text-center">
              <div className="pt">
              <h2 className='flex'>Consultation</h2>
                <p className="text text-center">
                Chatting dengan psikolog atau terapis, ini adalah fitur utama dari website BnD yang memberikan kesempatan bagi pengguna untuk berbicara secara online dengan psikolog atau terapis yang bersertifikat. Pengguna dapat memilih psikolog atau terapis yang sesuai dengan kebutuhan dan preferensi mereka.
                </p>
              </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about pt">
          <div className="about-inner">
          <div className="section-head">
          </div>
            <div className="container grid">
            <div className="about-left text-center">
              <div className="pt">
                <div className="pt"></div>
                <h2 className='flex'>Stress Release Tips</h2>
                <p className="text text-center">
                Tips dan trick untuk mengurangi stres. Stress Release Tips adalah memberikan pengguna dengan saran dan teknik yang dapat membantu mereka mengurangi stres dan meningkatkan kesehatan mental mereka.
                </p>
              </div>
              </div>
              <div className="about-right flex">
                <div className="img">
                  <div className="colorx"></div>
                  <img className='img-telepon' src={Sts} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about pt">
          <div className="about-inner pt">
            <div className="container grid">
              <div className="about-right flex">
                <div className="img">
                  <div className="colorz"></div>
                  <img src={Tes} />
                </div>
              </div>
              <div className="about-left text-center">
               <div className="pt">
               <div className="pt">
                 <h2 className='flex'>Depressed Test</h2>
                 <p className="text text-center">
                   Kuis atau tes online lainnya yang dapat membantu pengguna memahami lebih baik kondisi kesehatan mental mereka dan menemukan cara untuk mengatasi masalah kesehatan mental lainnya.                </p>
               </div>
               </div>
              </div>
            </div>
          </div>
        </section>

        <section id="banner-one" className="banner-one text-center">
          <div className="container text-white">
            <blockquote className="lead">
              <i className="fas fa-quote-left"></i>"The greatest gift you can give yourself is a little bit of your own attention." 
              <i className="fas fa-quote-right"></i>
            </blockquote>
            <small className="text text-sm">- Anthony J. D'Angelo</small>
          </div>
        </section>

        <section id="doc-panel" className="doc-panel py">
          <div className="container">
            <div className="section-head flex">
              <h2>Our Psychiatrist</h2>
            </div>

            <div className="doc-panel-inner grid">

              <div className="doc-panel-item">
                <div className="img flex">
                  <img src={Doc2} alt="doctor image" />
                  <div className="info text-center bg-pink text-white flex">
                    <p className="lead">Elizabeth Ira</p>
                  </div>
                </div>
              </div>

              <div className="doc-panel-item">
                <div className="img flex">
                  <img src={Doc1} alt="doctor image" />
                  <div className="info text-center bg-pink text-white flex">
                    <p className="lead">Anthony D'Angelo</p>
                  </div>
                </div>
              </div>

              <div className="doc-panel-item">
                <div className="img flex">
                  <img src={Doc3} alt="doctor image" />
                  <div className="info text-center bg-pink text-white flex">
                    <p className="lead">Tanya Collins</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer text-center">
        <div className="container">
          <div className="footer-inner text-white grid">
              <div className="icon">
                <img src={navicon} />
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
              <img src={Support} />
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
    </main>
  );
};

export default LandingPage;
