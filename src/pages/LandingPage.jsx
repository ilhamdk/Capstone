import React, { useEffect } from 'react';
import '../Landing.css'

import Dot from "../images/4-dots.png";
import About from "../images/about-img.png";
import Banner2 from "../images/banner-2-img.png";
import CloseIcon from "../images/close-icon.png";
import Doc1 from "../images/doc-1.png";
import Doc2 from "../images/doc-2.png";
import Doc3 from "../images/doc-3.png";
import HamMenu from "../images/ham-menu-icon.png";
import Header from "../images/header.png";
import Logo from "../images/logo.png";
import Post1 from "../images/post-1.jpg";
import Post2 from "../images/post-2.jpg";
import Post3 from "../images/post-3.jpg";
import Service1 from "../images/service-icon-1.png";
import Service2 from "../images/service-icon-2.png";
import Service3 from "../images/service-icon-3.png";
import Service4 from "../images/service-icon-4.png";

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

  return (
    <main>
      <header className="header bg-blue">
      <nav className="navbar bg-blue">
        <div className="container flex">
          <a href="index.html" className="navbar-brand">
            <img src={Logo} alt="site logo" />
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
                <a href="#" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Doctors
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

        <div className="header-inner text-white text-center">
          <div className="container grid">
            <div className="header-inner-left">
              <h1>
                your most trusted
                <br /> <span>health partner</span>
              </h1>
              <p className="lead">the best match services for you</p>
              <p className="text text-md">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam,
                nulla odit esse necessitatibus corporis voluptatem?
              </p>
              <div className="btn-group">
                <a href="#" className="btn btn-white">
                  Learn More
                </a>
                <a href="#" className="btn btn-light-blue">
                  Sign In
                </a>
              </div>
            </div>
            <div className="header-inner-right">
              <img src={Header} />
            </div>
          </div>
        </div>
      </header>

      <main>
        <section id="about" className="about py">
          <div className="about-inner">
            <div className="container grid">
              <div className="about-left text-center">
                <div className="section-head">
                  <h2>About Us</h2>
                  <div className="border-line"></div>
                </div>
                <p className="text text-lg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae molestias delectus facilis, temporibus eum
                  consectetur, a debitis exercitationem quae distinctio aliquid
                  ea ipsam vitae esse amet soluta maxime dolorem? Inventore ut
                  maiores illo ipsum nisi, nulla eligendi unde reiciendis quod
                  voluptas velit sit voluptate perferendis cum pariatur
                  molestiae tenetur repellat!
                </p>
                <a href="#" className="btn btn-white">
                  Learn More
                </a>
              </div>
              <div className="about-right flex">
                <div className="img">
                  <img src={About} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="banner-one" className="banner-one text-center">
          <div className="container text-white">
            <blockquote className="lead">
              <i className="fas fa-quote-left"></i> When you are young and healthy,
              it never occurs to you that in a single second your whole life
              could change. <i className="fas fa-quote-right"></i>
            </blockquote>
            <small className="text text-sm">- Anonim Nano</small>
          </div>
        </section>

        <section id="services" className="services py">
          <div className="container">
            <div className="section-head text-center">
              <h2 className="lead">The Best Doctor gives the least medicines</h2>
              <p className="text text-lg">
                A perfect way to show your hospital services
              </p>
              <div className="line-art flex">
                <div></div>
                <img src={Dot} />
                <div></div>
              </div>
            </div>
            <div className="services-inner text-center grid">
              <article className="service-item">
                <div className="icon">
                  <img src={Service1} />
                </div>
                <h3>Cardio Monitoring</h3>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis possimus doloribus facilis velit, assumenda
                  tempora quas mollitia quos voluptatibus consequatur!
                </p>
              </article>

              <article className="service-item">
                <div className="icon">
                  <img src={Service2} />
                </div>
                <h3>Medical Treatment</h3>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis possimus doloribus facilis velit, assumenda
                  tempora quas mollitia quos voluptatibus consequatur!
                </p>
              </article>

              <article className="service-item">
                <div className="icon">
                  <img src={Service3} />
                </div>
                <h3>Emergency Help</h3>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis possimus doloribus facilis velit, assumenda
                  tempora quas mollitia quos voluptatibus consequatur!
                </p>
              </article>

              <article className="service-item">
                <div className="icon">
                  <img src={Service4} />
                </div>
                <h3>First Aid</h3>
                <p className="text text-sm">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perspiciatis possimus doloribus facilis velit, assumenda
                  tempora quas mollitia quos voluptatibus consequatur!
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="banner-two" className="banner-two text-center">
          <div className="container grid">
            <div className="banner-two-left">
              <img src={Banner2} />
            </div>
            <div className="banner-two-right">
              <p className="lead text-white">
                When you are young and healthy, it never occurs to you that in a
                single second your whole life could change.
              </p>
              <div className="btn-group">
                <a href="#" className="btn btn-white">
                  Learn More
                </a>
                <a href="#" className="btn btn-light-blue">
                  Sign In
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="doc-panel" className="doc-panel py">
          <div className="container">
            <div className="section-head">
              <h2>Our Doctor Panel</h2>
            </div>

            <div className="doc-panel-inner grid">
              <div className="doc-panel-item">
                <div className="img flex">
                  <img src={Doc1} alt="doctor image" />
                  <div className="info text-center bg-blue text-white flex">
                    <p className="lead">samuel goe</p>
                    <p className="text-lg">Medicine</p>
                  </div>
                </div>
              </div>

              <div className="doc-panel-item">
                <div className="img flex">
                  <img src={Doc2} alt="doctor image" />
                  <div className="info text-center bg-blue text-white flex">
                    <p className="lead">elizabeth ira</p>
                    <p className="text-lg">Cardiology</p>
                  </div>
                </div>
              </div>

              <div className="doc-panel-item">
                <div className="img flex">
                  <img src={Doc3} alt="doctor image" />
                  <div className="info text-center bg-blue text-white flex">
                    <p className="lead">tanya collins</p>
                    <p className="text-lg">Medicine</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="posts" className="posts py">
          <div className="container">
            <div className="section-head">
              <h2>Latest Post</h2>
            </div>
            <div className="posts-inner grid">
              <article className="post-item bg-white">
                <div className="img">
                  <img src={Post1} />
                </div>
                <div className="content">
                  <h4>
                    Inspiring stories of person and family centered care during
                    a global pandemic.
                  </h4>
                  <p className="text text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolor voluptas eius recusandae sunt obcaecati esse facere
                    cumque. Aliquid, cupiditate debitis.
                  </p>
                  <p className="text text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis quia ipsam, quis iure sed nulla.
                  </p>
                  <div className="info flex">
                    <small className="text text-sm">
                      <i className="fas fa-clock"></i> October 27, 2021
                    </small>
                    <small className="text text-sm">
                      <i className="fas fa-comment"></i> 5 comments
                    </small>
                  </div>
                </div>
              </article>

              <article className="post-item bg-white">
                <div className="img">
                  <img src={Post2} />
                </div>
                <div className="content">
                  <h4>
                    Inspiring stories of person and family centered care during
                    a global pandemic.
                  </h4>
                  <p className="text text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolor voluptas eius recusandae sunt obcaecati esse facere
                    cumque. Aliquid, cupiditate debitis.
                  </p>
                  <p className="text text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis quia ipsam, quis iure sed nulla.
                  </p>
                  <div className="info flex">
                    <small className="text text-sm">
                      <i className="fas fa-clock"></i> October 27, 2021
                    </small>
                    <small className="text text-sm">
                      <i className="fas fa-comment"></i> 5 comments
                    </small>
                  </div>
                </div>
              </article>

              <article className="post-item bg-white">
                <div className="img">
                  <img src={Post3} />
                </div>
                <div className="content">
                  <h4>
                    Inspiring stories of person and family centered care during
                    a global pandemic.
                  </h4>
                  <p className="text text-sm">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Dolor voluptas eius recusandae sunt obcaecati esse facere
                    cumque. Aliquid, cupiditate debitis.
                  </p>
                  <p className="text text-sm">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Nobis quia ipsam, quis iure sed nulla.
                  </p>
                  <div className="info flex">
                    <small className="text text-sm">
                      <i className="fas fa-clock"></i> October 27, 2021
                    </small>
                    <small className="text text-sm">
                      <i className="fas fa-comment"></i> 5 comments
                    </small>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>

      <footer id="footer" className="footer text-center">
        <div className="container">
          <div className="footer-inner text-white py grid">
            <div className="footer-item">
              <h3 className="footer-head">about us</h3>
              <div className="icon">
                <img src={Logo} />
              </div>
              <p className="text text-md">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Debitis saepe incidunt fugiat optio corporis ea!
              </p>
              <address>
                Medic Clinic <br />
                69 Deerpark Rd, Mount Merrion <br />
                Co. Dublin, A94 E9D3 <br />
                Ireland
              </address>
            </div>

            <div className="footer-item">
              <h3 className="footer-head">tags</h3>
              <ul className="tags-list flex">
                <li>medical care</li>
                <li>emergency</li>
                <li>therapy</li>
                <li>surgery</li>
                <li>medication</li>
                <li>nurse</li>
              </ul>
            </div>

            <div className="footer-item">
              <h3 className="footer-head">Quick Links</h3>
              <ul>
                <li>
                  <a href="#" className="text-white">
                    Our Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Our Plan
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-white">
                    Appointment Schedule
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer-item">
              <h3 className="footer-head">make an appointment</h3>
              <p className="text text-md">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatum, omnis.
              </p>
              <ul className="appointment-info">
                <li>8:00 AM - 11:00 AM</li>
                <li>2:00 PM - 05:00 PM</li>
                <li>8:00 PM - 11:00 PM</li>
                <li>
                  <i className="fas fa-envelope"></i>
                  <span>revomedic@gmail.com</span>
                </li>
                <li>
                  <i className="fas fa-phone"></i>
                  <span>+003 478 2834(00)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default LandingPage;
