import React from "react";
import styles from './HomePage.module.css';
// 外部
import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function HomePage() {
  return (
    <>
      {/* <!-- 流れるナビバー --> */}
      <div class={styles.site_container}>
        <div class="home-top-marquee marquee textsize-medium enable-animation">
          <ul class="marquee-content">
            <li>
              <Link to="/SampleMotion">
                <b>
                  1111111111Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Earum, tempore?
                </b>
              </Link>
            </li>
            <li>
              <a href="/">
                <b>
                  22222222222Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Earum, tempore?
                </b>
              </a>
            </li>
            <li>
              <a href="/">
                <b>
                  333333333333Lorem ipsum dolor sit amet consectetur,
                  adipisicing elit. Earum, tempore?
                </b>
              </a>
            </li>
            <li>
              <a href="/">
                <b>
                  44444444444Lorem ipsum dolor sit amet consectetur, adipisicing
                  elit. Earum, tempore?
                </b>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <!-- header --> */}
      <header>
        <div class="nav-bar">
          <div class="title">
            <h1>N-MARU STUDIO</h1>
          </div>
          <div class="nav-bar-icon">
            <ul>
              {/* <!-- MADEBYME --> */}
              <li>
                {/* <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1);transform: msFilter"
                    >
                      <path d="M8.707 19.707 18 10.414 13.586 6l-9.293 9.293a1.003 1.003 0 0 0-.263.464L3 21l5.242-1.03c.176-.044.337-.135.465-.263zM21 7.414a2 2 0 0 0 0-2.828L19.414 3a2 2 0 0 0-2.828 0L15 4.586 19.414 9 21 7.414z"></path>
                    </svg>
                  </a> */}
              </li>
              <li>
                {/* <a href="/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style="fill: rgba(0, 0, 0, 1);transform: msFilter"
                    >
                      <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zM4 12c0-.899.156-1.762.431-2.569L6 11l2 2v2l2 2 1 1v1.931C7.061 19.436 4 16.072 4 12zm14.33 4.873C17.677 16.347 16.687 16 16 16v-1a2 2 0 0 0-2-2h-4v-3a2 2 0 0 0 2-2V7h1a2 2 0 0 0 2-2v-.411C17.928 5.778 20 8.65 20 12a7.947 7.947 0 0 1-1.67 4.873z"></path>
                    </svg>
                </a> */}
              </li>
              <li>
                {/* <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style="fill: rgba(0, 0, 0, 1);transform: msFilter"
                  >
                    <path d="M6 22h15v-2H6.012C5.55 19.988 5 19.805 5 19s.55-.988 1.012-1H21V4c0-1.103-.897-2-2-2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3zM5 8V5c0-.805.55-.988 1-1h13v12H5V8z"></path>
                    <path d="M8 6h9v2H8z"></path>
                  </svg>
                </a> */}
              </li>
              <li>
                {/* <a href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    style="fill: rgba(0, 0, 0, 1);transform: msFilter"
                  >
                    <path d="M19.965 8.521C19.988 8.347 20 8.173 20 8c0-2.379-2.143-4.288-4.521-3.965C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.035C6.138 3.712 4 5.621 4 8c0 .173.012.347.035.521C2.802 9.215 2 10.535 2 12s.802 2.785 2.035 3.479A3.976 3.976 0 0 0 4 16c0 2.379 2.138 4.283 4.521 3.965C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.035C17.857 20.283 20 18.379 20 16c0-.173-.012-.347-.035-.521C21.198 14.785 22 13.465 22 12s-.802-2.785-2.035-3.479zm-9.01 7.895-3.667-3.714 1.424-1.404 2.257 2.286 4.327-4.294 1.408 1.42-5.749 5.706z"></path>
                  </svg>
                </a> */}
              </li>
            </ul>
          </div>
        </div>
      </header>

      {/* <!-- main-contents --> */}
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div cla="swiper mySwiper">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="./assets/forest.jpg" alt="" />
                <div class="site-name">
                  <h2>Forest</h2>
                  <a href="/">
                    <p>www.n-maru-studio/01_LUXCASUAL</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/lavender-field.jpg" alt="" />
          <div class="site-name">
            <h2>Lavender Field</h2>
            <a href="/">
              <p>www.n-maru-studio/Lavender Field</p>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="./assets/wooden-bridge.jpg" alt="" />
          <div class="site-name">
            <h2>Forest</h2>
            <a href="/">
              <p>www.n-maru-studio/Wooden Bridge</p>
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="assets/snow-scenery.jpg" alt="" />
          <div class="site-name">
            <h2>Mountains</h2>
            <a href="/">
              <p>www.n-maru-studio/Mountains</p>
            </a>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* <!-- sub-contents --> */}
      <div class="sub-contents">
        {/* <!-- MADEBYME --> */}
        <div class="sub-contents-in">
          <div class="sub-contents-clm">
            <div class="sub-contents-title">
              <h3>MADEBYME</h3>
            </div>
            <div class="sub-contents-list">
              <ul>
                <li>
                  <a href="/MADEBYME/01_LUXCASUAL/index.html">
                    <p>01_LUXCASUAL</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="sub-contents-search">
              <a href="/">
                <p>SEE ALL..</p>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- WEBCOPY --> */}
        <div class="sub-contents-in">
          <div class="sub-contents-clm">
            <div class="sub-contents-title">
              <h3>WEBCOPY</h3>
            </div>
            <div class="sub-contents-list">
              <ul>
                <li>
                  <a href="/WebCopy/01_WebCopyLearn/">
                    <p>01_WebopyLearn</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="sub-contents-list">
              <ul>
                <li>
                  <a href="/WebCopy/03_Graphpaper/">
                    <p>03_Graphpaper</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="sub-contents-list">
              <ul>
                <li>
                  <a href="/WebCopy/04_OTH_Manner/">
                    <p>04_OTH_Manner</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="sub-contents-search">
              <a href="/">
                <p>SEE ALL..</p>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- PRACTICE --> */}
        <div class="sub-contents-in">
          <div class="sub-contents-clm">
            <div class="sub-contents-title">
              <h3>PRACTICE</h3>
            </div>
            <div class="sub-contents-list">
              <ul>
                <li>
                  <a href="YouTubeLearn/01_Bootstrap5/">
                    <p>01_BootStrap5</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="sub-contents-list">
              <ul>
                <li>
                  <a href="YouTubeLearn/02_RevealScrollAnimation/">
                    <p>02_RevealScrollAnimation</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="sub-contents-list">
              <ul>
                <li>
                  <a href="YouTubeLearn/03_RealSound/">
                    <p>03_RealSound</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="sub-contents-search">
              <a href="/">
                <p>SEE ALL..</p>
              </a>
            </div>
          </div>
        </div>
        {/* <!-- COMFORTABLE --> */}
        <div class="sub-contents-in">
          <div class="sub-contents-clm">
            <div class="sub-contents-title">
              <h3>COMFORTABLE</h3>
            </div>
            <div class="sub-contents-list">
              <ul>
                <li>
                  <a href="/">
                    <p>01_WebopyLearn</p>
                  </a>
                </li>
              </ul>
            </div>
            <div class="sub-contents-search">
              <a href="/">
                <p>SEE ALL..</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- footer --> */}
      <footer id="site-footer" class="footer">
        <div class="footer-contents">
          <nav class="footer-nav">
            <div class="footer-nav-contents">
              <a href="/">Contact</a>
            </div>
            <div class="footer-nav-contents">
              <a href="/">Shipping & Return</a>
            </div>
            <div class="footer-nav-contents">
              <a href="/">FAQ</a>
            </div>
            <div class="footer-nav-contents">
              <a href="/">Careers</a>
            </div>
          </nav>
          <nav class="footer-nav">
            <div class="footer-nav-contents">
              <a href="/">Terms & Conditions</a>
            </div>
            <div class="footer-nav-contents">
              <a href="/">Privacy Policy</a>
            </div>
            <div class="footer-nav-contents">
              <a href="/">Cookie Policy</a>
            </div>
            <div class="footer-nav-contents">
              <a href="/">Cookie Settings</a>
            </div>
          </nav>
          <div class="right-footer">
            <button>NewsLetter</button>
          </div>
        </div>
        <a href="/index.html">
          <h1>N-MARU STUDIO</h1>
        </a>
      </footer>
    </>
  );
}

export default HomePage;
