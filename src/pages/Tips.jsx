import Meditation from "../images/meditation.png";
import Foods from "../images/Foods.png";
import Friends from "../images/Friends.png";
import Musix from "../images/Musix.png";
import CloseIcon from "../images/close-icon.png";
import HamMenu from "../images/ham-menu-icon.png";
import navicon from "../images/nav-icon.png";
import Support from "../images/support.png"
/* eslint-disable */

import { SiGmail } from "react-icons/si"
import { FiMapPin } from "react-icons/fi"
import { FaRegCopyright } from "react-icons/fa"

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Tips = () => {

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
        <div className="section-head">
          <h2 className='Sts'>Stress Release Tips</h2>
        </div>
        <div className="about-inner">
          <div className="section-head"></div>
          <div className="container grid">
            <div className="about-right flex">
              <div className="img">
                <img className='img-consul' src={Meditation} alt="Meditation" />
              </div>
            </div>
            <div className="about-left text-center">
              <div className="pt">
                <h2 className='flex'>Meditasi</h2>
                <p className="text text-center">
                  Selama meditasi, Anda memusatkan perhatian dan menenangkan aliran pikiran campur aduk yang mungkin memenuhi pikiran Anda dan menyebabkan stres. Meditasi dapat menanamkan rasa tenang, damai, dan seimbang yang dapat bermanfaat bagi kesejahteraan emosional dan kesehatan Anda secara keseluruhan.Meditasi terpandu, citra terpandu, visualisasi, dan bentuk meditasi lainnya dapat dipraktikkan di mana saja kapan saja, baik saat Anda berjalan-jalan, naik bus ke tempat kerja, atau menunggu di kantor dokter. Anda juga dapat mencoba bernapas dalam-dalam di mana saja.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="about pt">
        <div className="about-inner">
          <div className="section-head"></div>
          <div className="container grid">
            <div className="about-left text-center">
              <div className="pt">
                <div className="pt"></div>
                <h2 className='flex'>Terhubung dengan yang lain</h2>
                <p className="text text-center">
                  Mendengarkan atau memainkan musik merupakan pereda stres yang baik karena dapat memberikan gangguan mental, mengurangi ketegangan otot dan menurunkan hormon stres. Naikkan volume dan biarkan pikiran Anda terserap oleh musik. Jika musik bukan salah satu minat Anda, alihkan perhatian Anda ke hobi lain yang Anda sukai, seperti berkebun, menjahit, membuat sketsa — apa pun yang mengharuskan Anda untuk fokus pada apa yang Anda lakukan daripada apa yang menurut Anda seharusnya Anda lakukan.
                </p>
              </div>
            </div>
            <div className="about-right flex">
              <div className="img">
                <img className='img-telepon' src={Friends} alt="Friends" />
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
                <img src={Musix} alt="Musix" />
              </div>
            </div>
            <div className="about-left text-center">
              <div className="pt">
                <div className="pt">
                  <h2 className='flex'>Dengarkan Musik</h2>
                  <p className="text text-center">
                    Mendengarkan atau memainkan musik merupakan pereda stres yang baik karena dapat memberikan gangguan mental, mengurangi ketegangan otot dan menurunkan hormon stres. Naikkan volume dan biarkan pikiran Anda terserap oleh musik. Jika musik bukan salah satu minat Anda, alihkan perhatian Anda ke hobi lain yang Anda sukai, seperti berkebun, menjahit, membuat sketsa — apa pun yang mengharuskan Anda untuk fokus pada apa yang Anda lakukan daripada apa yang menurut Anda seharusnya Anda lakukan.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="about pt">
        <div className="about-inner">
          <div className="section-head"></div>
          <div className="container grid">
            <div className="about-left text-center">
              <div className="pt">
                <div className="pt"></div>
                <h2 className='flex'>Makan</h2>
                <p className="text text-center">
                Makan makanan sehat sangat penting bagi individu yang mengalami depresi karena nutrisi yang tepat dapat mempengaruhi kesehatan mental. Pola makan yang sehat, seperti mengonsumsi makanan yang kaya nutrisi, dapat memberikan dukungan bagi keseimbangan kimia otak dan neurotransmiter yang mempengaruhi suasana hati dan fungsi kognitif. Makanan sehat yang mengandung vitamin, mineral, asam lemak omega-3, dan protein dapat membantu mengurangi peradangan, meningkatkan energi, memperbaiki suasana hati, dan mempromosikan kesehatan mental secara keseluruhan.
                </p>
              </div>
            </div>
            <div className="about-right flex">
              <div className="img">
                <img className='img-telepon' src={Foods} alt="Makan" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <footer id="footer" className="footer text-center">
        <div className="container">
          <div className="footer-inner text-white grid">
              <div className="icon">
                <img src={navicon} alt="bnd" />
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
              <img src={Support} alt="bnd" />
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
  );
};

export default Tips;
