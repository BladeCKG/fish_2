import { BasciConnect, CustomConnect } from "components/ConnectWallet";
import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import Script from "next/script";
import { useState } from "react";

const Home: NextPage = () => {
  const [style1, setStyle1] = useState(
    "xl:container lg:mt-[32px] transition-width-nav2 lg:m-auto"
  );
  const [style2, setStyle2] = useState(
    "justify-between sm:p-[12px] max-sm:pr-[5px] lg:rounded-[12px] flex items-center min-lg:w-full"
  );
  window.addEventListener("scroll", () => {
    const currentScrollPos = window.scrollY;
    if (currentScrollPos > 0) {
    } else {
    }
  });
  return (
    <div>
      <Head>
        {" "}
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Shardeum | EVM based Sharded Layer 1 Blockchain</title>
        <meta
          name="description"
          content="Shardeum is an EVM-based, linearly scalable network that provides low gas fees forever while maintaining true decentralization and solid security"
        />
        <meta
          name="keywords"
          content="shardeum,blockchain,layer1 blockchain,evm based blockchain"
        />
        <meta
          property="og:title"
          content="EVM Based Sharded Layer 1 Blockchain"
        />
        <meta
          property="og:description"
          content="Shardeum is an EVM-based, linearly scalable smart contract platform that maintains low gas fees while providing true decentralization and solid security"
        />
        <meta property="og:url" content="https://shardeum.org/" />
        <meta
          property="og:image"
          content="https://shardeum.org/html/img/featured-image.png"
        />
        <meta
          name="twitter:title"
          content="EVM Based Sharded Layer 1 Blockchain"
        />
        <meta
          name="twitter:description"
          content="Shardeum is an EVM-based, linearly scalable network that provides low gas fees forever while maintaining true decentralization and solid security"
        />
        <meta
          name="twitter:image"
          content="https://shardeum.org/html/img/featured-image.png"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@shardeum" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="https://shardeum.org/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="https://shardeum.org/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="https://shardeum.org/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://shardeum.org/html/css/icons.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://shardeum.org/html/css/fonts/fonts.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://shardeum.org/html/css/style.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://shardeum.org/html/css/mq.css"
          rel="stylesheet"
          type="text/css"
        />
        <style></style>
        <script
          async
          src="https://www.googletagmanager.com/gtm.js?id=GTM-N6NTB5C"
        ></script>
        <script
          src="https://cdn-cookieyes.com/client_data/08f8687cb2b708c3de5b4b9f/banner.js"
          async
          id="cookieyes-banner"
        ></script>
      </Head>
      <body id="page-home" className="dark">
        <div className="gridline"></div>
        <div className="gridline l"></div>
        <div className="gridline r"></div>
        <div className="gridline ml"></div>
        <div className="gridline mr"></div>

        <div
          id="loader"
          className="on"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "translate(0%, 100%)",
            display: "none",
          }}
        ></div>
        <header id="globalHeader" className="global">
          <div className="cta-header dsk-only">
            <a
              href="https://discord.com/invite/shardeum"
              target="_blank"
              className="cta-btn split has-arr sa"
              data-text="Join Our Discord"
              style={{ display: "inline-flex", opacity: "1" }}
              rel="noreferrer"
            >
              <span className="cta-txt">Join Our Discord</span>
              <span className="cta-arr">
                <span className="arr">
                  <div className="arr-img">
                    <img src="https://shardeum.org/html/img/global/chevron-blue.svg" />
                  </div>
                </span>
              </span>
            </a>
          </div>
        </header>

        <div id="globalMenu" className="global">
          <div className="logo-main">
            <div className="cp">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 218 47"
                xmlSpace="preserve"
              >
                <g>
                  <path d="M11.7,35.6L5.8,46h39.8l-5.8-10.4H11.7z"></path>
                  <path d="M19.9,0L0,35.6h11.7l14.1-25.1L19.9,0z"></path>
                  <path d="M31.6,0l-5.8,10.4l14.1,25.1h11.7L31.6,0z"></path>
                  <path d="M25.7,20.7c3.5,0,6.3,2.9,6.3,6.5s-2.8,6.5-6.3,6.5c-3.5,0-6.3-2.9-6.3-6.5S22.3,20.7,25.7,20.7z"></path>
                </g>
                <path
                  d="M70.8,7.1c5.2,0,8.5,3,8.8,7.8h-3.7c-0.2-2.8-2.1-4.4-5.1-4.4c-3.4,0-5.6,1.8-5.6,4.5c0,2.2,1.2,3.6,3.8,4.2
                l4.5,1.1c4.4,1,6.7,3.5,6.7,7.5c0,5-3.8,8.2-9.5,8.2c-5.5,0-9.2-3-9.4-7.8h3.7c0.1,2.7,2.2,4.4,5.7,4.4c3.6,0,5.9-1.7,5.9-4.5
                c0-2.2-1.2-3.6-3.7-4.2l-4.5-1c-4.4-1-6.7-3.7-6.7-7.7C61.5,10.3,65.2,7.1,70.8,7.1z"
                ></path>
                <path
                  d="M82.2,35.5V7.1h3.5v12.5c1.2-2.1,3.4-3.4,6.2-3.4c4.7,0,6.9,3.1,6.9,7.9v11.6h-3.5V24.8c0-3.8-1.8-5.4-4.4-5.4
                c-3.4,0-5.2,2.6-5.2,5.8v10.3H82.2z"
                ></path>
                <path
                  d="M113.6,27.4v-1l-4.7,0.4c-3.1,0.3-4.4,1.5-4.4,3.4c0,2,1.4,3,3.7,3C111.6,33.2,113.6,31,113.6,27.4z M101,30.3
                c0-3.5,2.5-5.7,6.8-6l5.8-0.5v-0.5c0-3.2-1.8-4.3-4.3-4.3c-3,0-4.6,1.4-4.6,3.6h-3.1c0-3.9,3.1-6.5,7.9-6.5c4.5,0,7.6,2.5,7.6,7.6
                v11.9h-3l-0.4-3.1c-0.9,2.2-3.4,3.5-6.4,3.5C103.3,36,101,33.7,101,30.3z"
                ></path>
                <path
                  d="M130.5,19.8h-1.6c-3.3,0-5.4,2.1-5.4,5.7v10H120V16.7h3.3l0.2,2.9c0.7-2,2.6-3.3,5.1-3.3c0.6,0,1.2,0.1,1.9,0.2
                V19.8z"
                ></path>
                <path
                  d="M145.1,26c0-3.9-2.2-6.7-5.8-6.7s-5.7,2.8-5.7,6.7c0,3.9,2.1,6.7,5.7,6.7S145.1,30,145.1,26z M130,26.2
                c0-5.8,3.3-10.1,8.7-10.1c2.8,0,5.2,1.3,6.4,3.6V7.1h3.5v28.5h-3.1l-0.3-3.4c-1.2,2.6-3.7,3.9-6.6,3.9C133.2,36,130,31.9,130,26.2z"
                ></path>
                <path
                  d="M154.1,24.4h10.6c0-3.1-2-5.2-5.1-5.2C156.5,19.1,154.5,21,154.1,24.4z M150.6,26.1c0-5.9,3.6-10,8.9-10
                c5.2,0,8.6,3.7,8.6,9.3v1.4l-14.2,0c0.3,4,2.3,6.2,5.8,6.2c2.7,0,4.5-1.2,5.1-3.3h3.3c-0.9,4.1-4,6.3-8.5,6.3
                C154.3,36,150.6,32,150.6,26.1z"
                ></path>
                <path
                  d="M186.4,16.6v18.9h-3.1l-0.4-2.9c-1,2-3.5,3.3-6.2,3.3c-4.3,0-6.7-3-6.7-7.6V16.6h3.5v10.6
                c0,4.1,1.7,5.6,4.4,5.6c3.2,0,5-2.1,5-6.2v-10H186.4z"
                ></path>
                <path
                  d="M189.6,35.6V16.6h3.1l0.3,2.5c0.9-1.8,2.9-3,5.5-3c2.8,0,4.9,1.5,5.8,3.8c0.9-2.4,3.1-3.8,5.9-3.8
                c4.2,0,6.7,2.7,6.7,7.1v12.4h-3.4V24.1c0-3-1.6-4.7-4.1-4.7c-2.7,0-4.4,1.9-4.4,5v11.2h-3.5V24c0-3-1.6-4.6-4-4.6
                c-2.7,0-4.4,1.9-4.4,4.9v11.2H189.6z"
                ></path>
              </svg>
              <a href="/" className="full" target="_blank"></a>
            </div>
          </div>
        </div>

        <section
          id="home-hero"
          className="bluebg has-ticker plax-grp"
          data-plax-mov="500"
          data-plax-st="top top"
          data-ticker="0"
          data-tickerw="4593"
        >
          <div className="background top" data-num="1">
            <div className="base auto-sc tc">
              <div
                className="shape-group has-plax"
                data-num="1"
                data-depth="1"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <div
                  className="shape-move"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <div
                    className="bgshape part"
                    data-num="1"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: "1",
                    }}
                  >
                    <img
                      data-src=""
                      className=""
                      style={{ opacity: "1" }}
                      src="https://shardeum.org/html/img/home/hero-shape1@2x.png"
                    />
                  </div>
                  <div className="bgline part" data-num="1">
                    <svg
                      viewBox="0 0 483 312"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="path-draw"
                        d="M1.09735 263.15C208.015 482.072 379.821 -132.415 481.616 28.6476"
                        stroke="black"
                        strokeWidth="2"
                        style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className="shape-group has-plax"
                data-num="2"
                data-depth=".75"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <div
                  className="shape-move"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <div
                    className="bgshape part"
                    data-num="2"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: "1",
                    }}
                  >
                    <img
                      data-src=""
                      className=""
                      style={{ opacity: "1" }}
                      src="https://shardeum.org/html/img/home/hero-shape2@2x.png"
                    />
                  </div>
                  <div
                    className="bgshape part"
                    data-num="4"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: "1",
                    }}
                  >
                    <img
                      data-src=""
                      className=""
                      style={{ opacity: "1" }}
                      src="https://shardeum.org/html/img/home/hero-shape4@2x.png"
                    />
                  </div>
                  <div className="bgline part rev" data-num="2">
                    <svg
                      width="124"
                      height="526"
                      viewBox="0 0 124 526"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="path-draw"
                        d="M1.00256 524.253C301.036 497.39 -74.9974 -18.0819 114.503 1.75207"
                        stroke="black"
                        strokeWidth="2"
                        style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className="shape-group has-plax"
                data-num="3a"
                data-depth="1.5"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <div
                  className="bgshape part"
                  data-num="3"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: "1",
                  }}
                >
                  <img
                    data-src=""
                    className=""
                    style={{ opacity: "1" }}
                    src="https://shardeum.org/html/img/home/hero-shape3@2x.png"
                  />
                </div>
              </div>

              <div
                className="shape-group has-plax"
                data-num="3"
                data-depth=".7"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <div
                  className="shape-move"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <div className="bgline part rev" data-num="3">
                    <svg
                      width="559"
                      height="217"
                      viewBox="0 0 559 217"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="path-draw"
                        d="M547.005 165.593C602.005 -185.838 442.269 121.102 0.412827 215.526"
                        stroke="black"
                        strokeWidth="2"
                        style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
                      ></path>
                    </svg>
                  </div>
                  <div
                    className="bgshape part"
                    data-num="5"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: "1",
                    }}
                  >
                    <img
                      data-src=""
                      className=""
                      style={{ opacity: "1" }}
                      src="https://shardeum.org/html/img/home/hero-shape5@2x.png"
                    />
                  </div>
                  <div className="bgline part" data-num="4">
                    <svg
                      width="494"
                      height="655"
                      viewBox="0 0 494 655"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="path-draw"
                        d="M223.098 1.46152C-521.495 139.697 889.271 343.161 377.499 653.568"
                        stroke="black"
                        strokeWidth="2"
                        style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>

              <div
                className="shape-group has-plax"
                data-num="4"
                data-depth="2"
                style={{
                  translate: "none",
                  rotate: "none",
                  scale: "none",
                  transform: "translate(0px, 0px)",
                }}
              >
                <div
                  className="shape-move"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <div
                    className="bgshape part"
                    data-num="6"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: "1",
                    }}
                  >
                    <img
                      data-src=""
                      className=""
                      style={{ opacity: "1" }}
                      src="https://shardeum.org/html/img/home/hero-shape6@2x.png"
                    />
                  </div>
                  <div
                    className="bgshape part"
                    data-num="7"
                    style={{
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform: "translate(0px, 0px)",
                      opacity: "1",
                    }}
                  >
                    <img
                      data-src=""
                      className=""
                      style={{ opacity: "1" }}
                      src="https://shardeum.org/html/img/home/hero-shape7@2x.png"
                    />
                  </div>
                  <div className="bgline part" data-num="5">
                    <svg
                      width="447"
                      height="499"
                      viewBox="0 0 447 499"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="path-draw"
                        d="M0.9,62.1c71.4-19.4,717.8-250.4,226.6,343.1c-183.2,221.4,244.2-44.8,216.9,92.6"
                        stroke="black"
                        strokeWidth="2"
                        style={{ strokeDashoffset: 0, strokeDasharray: "none" }}
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="max-wrap pad-wrap header">
            <header>
              <div className="logo-text h-open drop dsk-only">
                <img
                  src="https://shardeum.org/html/img/global/logo-textonly.svg"
                  alt="Shardeum"
                  className="word"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: "1",
                  }}
                />
              </div>
              <h1 className="big h-open words splitting" data-splitting="words">
                <span
                  className="word"
                  data-word="Decentralization"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: "1",
                  }}
                >
                  Decentralization
                </span>
                <br />
                <span
                  className="word"
                  data-word="for"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: "1",
                  }}
                >
                  for
                </span>
                <span className="whitespace"> </span>
                <span
                  className="word"
                  data-word="everyone"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                    opacity: "1",
                  }}
                >
                  everyone
                </span>
              </h1>
              <p className="h-open blk" style={{ opacity: "1" }}>
                Fast, scalable, and forever fair, Shardeum is an EVM-based,
                truly decentralized L1.
              </p>
              <div className="cta-group h-open drop">
                <div className="cta-group h-open drop">
                  <CustomConnect
                    normalComp={
                      <a
                        className="cta-btn split has-arr word "
                        data-text="Claim $SHM"
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate(0px, 0px)",
                          opacity: "1",
                        }}
                      >
                        <span className="cta-txt">Claim $SHM</span>
                        <span className="cta-arr">
                          <span className="arr">
                            <div className="arr-img">
                              <img src="https://shardeum.org/html/img/global/chevron-blue.svg" />
                            </div>
                          </span>
                        </span>
                      </a>
                    }
                    clickComp={
                      <a
                        className="cta-btn split has-arr word"
                        data-text="Processing"
                        style={{
                          translate: "none",
                          rotate: "none",
                          scale: "none",
                          transform: "translate(0px, 0px)",
                          opacity: "1",
                        }}
                      >
                        <span className="cta-txt">Processing...</span>
                        <span className="cta-arr">
                          <span className="arr">
                            <div className="arr-img">
                              <img src="https://shardeum.org/html/img/global/chevron-blue.svg" />
                            </div>
                          </span>
                        </span>
                      </a>
                    }
                  />
                </div>
              </div>
            </header>
          </div>

          <div className="ticker-wrap auto-sc tc">
            <div className="ticker-rot">
              <div className="ticker-bar">
                <div className="masker">
                  <div
                    className="scroll-mover"
                    style={{
                      width: "9186px",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform:
                        "translate(-26.6329%, 0%) translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="scroll-group"
                      data-num="1"
                      style={{ width: "4593px" }}
                    >
                      <div className="ticker-text">
                        <p>800,000+ Community Members</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="ticker-text">
                        <p>Est. 100,000+ TPS</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="ticker-text">
                        <p>Est. $0.01 Transaction Cost</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="ticker-text">
                        <p>1280 validators</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="end-spacer"></div>
                    </div>
                    <div
                      className="scroll-group"
                      data-num="2"
                      style={{ width: "4593px", left: "4593px" }}
                    >
                      <div className="ticker-text">
                        <p>800,000+ Community Members</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="ticker-text">
                        <p>Est. 100,000+ TPS</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="ticker-text">
                        <p>Est. $0.01 Transaction Cost</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="ticker-text">
                        <p>1280 validators</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="end-spacer"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ticker-bar">
                <div className="masker">
                  <div className="bdr-lt"></div>
                  <div
                    className="scroll-mover"
                    style={{
                      width: "9186px",
                      translate: "none",
                      rotate: "none",
                      scale: "none",
                      transform:
                        "translate(-26.6329%, 0%) translate3d(0px, 0px, 0px)",
                    }}
                  >
                    <div
                      className="scroll-group"
                      data-num="1"
                      style={{ width: "4593px" }}
                    >
                      <div className="ticker-text">
                        <p>800,000+ Community Members</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="ticker-text">
                        <p>Est. 100,000+ TPS</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="ticker-text">
                        <p>Est. $0.01 Transaction Cost</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="ticker-text">
                        <p>1280 validators</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="end-spacer"></div>
                    </div>
                    <div
                      className="scroll-group"
                      data-num="2"
                      style={{ width: "4593px", left: "4593px" }}
                    >
                      <div className="ticker-text">
                        <p>800,000+ Community Members</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="ticker-text">
                        <p>Est. 100,000+ TPS</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="ticker-text">
                        <p>Est. $0.01 Transaction Cost</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="ticker-text">
                        <p>1280 validators</p>
                      </div>
                      <div className="ticker-sep">
                        <img src="https://shardeum.org/html/img/global/icon-shardeum.svg" />
                      </div>
                      <div className="end-spacer"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="ticker-top">
                <div className="shadow">
                  <img src="https://shardeum.org/html/img/global/ticker-shadow.svg" />
                </div>
                <div className="notch">
                  <img src="https://shardeum.org/html/img/global/ticker-notch.svg" />
                </div>
              </div>
            </div>
          </div>

          <div className="max-wrap pad-wrap intro">
            <div className="background bot" data-num="2">
              <div className="base auto-sc tc">
                <div
                  className="bgshape part has-plax"
                  data-num="8"
                  data-depth=".85"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <img
                    data-src=""
                    className=""
                    src="https://shardeum.org/html/img/home/hero-shape8@2x.png"
                  />
                </div>
                <div
                  className="bgline part has-plax"
                  data-num="6"
                  data-depth=".5"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <img src="https://shardeum.org/html/img/home/hero-path6.svg" />
                </div>
                <div
                  className="bgshape part has-plax"
                  data-num="9"
                  data-depth="1.25"
                  style={{
                    translate: "none",
                    rotate: "none",
                    scale: "none",
                    transform: "translate(0px, 0px)",
                  }}
                >
                  <img
                    data-src=""
                    className=""
                    src="https://shardeum.org/html/img/home/hero-shape9@2x.png"
                  />
                </div>
                <div className="bgline part" data-num="7">
                  <img src="https://shardeum.org/html/img/home/hero-path7.svg" />
                </div>
              </div>
            </div>

            <div className="intro-content">
              <div className="intro-img auto-sc tc">
                <div className="shad">
                  <img src="https://shardeum.org/html/img/home/hero-tri-shad.svg" />
                </div>
                <img
                  data-src=""
                  className=""
                  src="https://shardeum.org/html/img/home/hero-tri@2x.png"
                />
              </div>
              <p className="big">
                Welcome to the Layer 1 blockchain where the community runs the
                nodes, and linear scalability means exponential growth.
              </p>
              <a
                href="https://discord.com/invite/shardeum"
                target="_blank"
                className="cta-btn split has-arr"
                data-text="Join Our Discord"
                rel="noreferrer"
              >
                <span className="cta-txt">Join Our Discord</span>
                <span className="cta-arr">
                  <span className="arr">
                    <div className="arr-img">
                      <img src="https://shardeum.org/html/img/global/chevron-blue.svg" />
                    </div>
                  </span>
                </span>
              </a>
            </div>
          </div>

          <div className="bgline mob part" data-num="7">
            <img src="https://shardeum.org/html/img/home/hero-path7-mob.svg" />
          </div>
        </section>

        <div className="news-callout dsk-only">
          <div className="inner">
            <p>
              Explore the Future of Web3:{" "}
              <a
                href="https://shardeum.org/Shardeum_Whitepaper.pdf"
                target="_blank"
                className="ul-btn"
                rel="noreferrer"
              >
                Shardeum&apos;s Whitepaper
              </a>{" "}
              Released!
            </p>
          </div>
        </div>

        <footer
          id="globalFooter"
          className="global bluebg nopad pt-120 has-form"
        >
          <div className="max-wrap pad-wrap max-14">
            <div className="row spaced">
              <div className="col left">
                <div className="newsletter-callout bdr">
                  <div className="https://shardeum.org/html/img">
                    <img
                      src="https://shardeum.org/html/img/global/callout-shard@2x.png"
                      alt="The Shardian"
                      style={{
                        width: "100%",
                        height: "auto",
                        maxWidth: "476.5px",
                      }}
                    />
                  </div>
                  <div className="max-wrap">
                    <h3>Sign up for The Shardian community newsletter</h3>
                    <p>Stay updated on major developments about Shardeum.</p>
                  </div>

                  <div className="subscribe-wrap">
                    <form
                      id="subscribe-form"
                      className="subscribe-form global-form"
                      action="https://9194b1e0.sibforms.com/serve/MUIFAMr0lEYSCr0c0ITE8lIOVOsDLxe8zCV7tGwFLE9-TtjLajICVbrEUZrBhTgL1iYh8Vodoc72cTSZ9ySAwYw-mrWZNl9T_kBXuCRS6QRdEI9oWy2bWz3aNb0URi_yKxOLy_-ILYo8YERv7pF5ixL1VmM9K-6fMsF0O7c_ONhEa_atQ0zw3ivhND5J3huPLJnocicL8dMNyZTZ"
                      method="post"
                    >
                      <div className="email-wrap field-wrap cta-btn">
                        <div className="input-wrap">
                          <input
                            type="email"
                            name="EMAIL"
                            data-type="req"
                            placeholder="Your Email"
                          />
                        </div>
                        <button type="submit" className="has-arr">
                          <span className="arr">
                            <div className="arr-img">
                              <img src="https://shardeum.org/html/img/global/chevron-blue.svg" />
                            </div>
                          </span>
                        </button>
                      </div>
                    </form>
                    <div className="thank-you">
                      <p>Your subscription has been successful.</p>
                    </div>
                  </div>
                </div>

                <div className="legal">
                  <ul>
                    <li>Copyright © Shardeum 2023</li>
                    <li className="sp-5">|</li>
                    <li>
                      <a
                        href="https://shardeum.org/privacy-policy/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Privacy
                      </a>
                    </li>
                    <li className="sp-5">|</li>
                    <li>
                      <a
                        href="https://shardeum.org/terms/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col right footer-content">
                <nav className="footer-links">
                  <ul>
                    <li className="title">Developers</li>
                    <li>
                      <a
                        href="https://shardeum.org/developer/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Start Building
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shardeum.org/betanet/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Betanet Sphinx
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shardeum.org/ecosystem/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Dapps Ecosystem
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.shardeum.org"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Docs
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://docs.shardeum.org/network/explorer"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Explorer
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shardeum.org/roadmap/mainnet/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Mainnet Roadmap
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li className="title">Community</li>
                    <li>
                      <a
                        href="https://shardeum.org/community/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Find your Tribe
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shardeum.org/explore/events/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Events
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://careers.shardeum.org/companies/shardeum#content"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Shardeum Careers
                      </a>
                    </li>
                    <a
                      href="https://careers.shardeum.org/companies/shardeum#content"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                    <li>
                      <a
                        href="https://careers.shardeum.org/companies/shardeum#content"
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                      <a
                        href="https://careers.shardeum.org/companies"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Ecosystem Job Openings
                      </a>
                    </li>
                    <a
                      href="https://careers.shardeum.org/companies"
                      target="_blank"
                      rel="noreferrer"
                    ></a>
                    <li>
                      <a
                        href="https://careers.shardeum.org/companies"
                        target="_blank"
                        rel="noreferrer"
                      ></a>
                      <a
                        href="https://shardeum.org/occ/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        OCC
                      </a>
                    </li>
                  </ul>
                  <ul>
                    <li className="title">Resources</li>
                    <li>
                      <a
                        href="https://shardeum.org/shm-tokenomics/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        SHM Tokenonmics
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shardeum.org/blog/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shardeum.org/explore/faqs/general/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        FAQ
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shardeum.org/Shardeum_Whitepaper.pdf"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Whitepaper
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/drive/folders/1zal5vN3f67Ql-Q8jiSYsp6Nf0xoJuqNI"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Public Drive Link
                      </a>
                    </li>
                    <li>
                      <a
                        href="http://shm.gg/brand"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Brand Assets
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:hi@shardeum.org"
                        target="_blank"
                        rel="noreferrer"
                      >
                        General Enquiries
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://shm.gg/partnership-form"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Partnership Enquiries
                      </a>
                    </li>
                  </ul>
                </nav>

                <div className="cta-btns mt-70">
                  <div>
                    <CustomConnect
                      normalComp={
                        <a
                          className="cta-btn split has-arr word "
                          data-text="Claim $SHM"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0px)",
                            opacity: "1",
                          }}
                        >
                          <span className="cta-txt">Claim $SHM</span>
                          <span className="cta-arr">
                            <span className="arr">
                              <div className="arr-img">
                                <img src="https://shardeum.org/html/img/global/chevron-blue.svg" />
                              </div>
                            </span>
                          </span>
                        </a>
                      }
                      clickComp={
                        <a
                          className="cta-btn split has-arr word"
                          data-text="Processing"
                          style={{
                            translate: "none",
                            rotate: "none",
                            scale: "none",
                            transform: "translate(0px, 0px)",
                            opacity: "1",
                          }}
                        >
                          <span className="cta-txt">Processing...</span>
                          <span className="cta-arr">
                            <span className="arr">
                              <div className="arr-img">
                                <img src="https://shardeum.org/html/img/global/chevron-blue.svg" />
                              </div>
                            </span>
                          </span>
                        </a>
                      }
                    />
                  </div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>

          <nav className="social-links">
            <ul>
              <li>
                <div className="icon icon-discord"></div>
                <h3>Discord</h3>
                <a
                  href="https://discord.com/invite/shardeum"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
              <li>
                <div className="icon icon-x"></div>
                <h3>Twitter</h3>
                <a
                  href="https://twitter.com/shardeum"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
              <li>
                <div className="icon icon-telegram"></div>
                <h3>Telegram</h3>
                <a
                  href="https://t.me/Shardeum_Official_Community"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
              <li>
                <div className="icon icon-youtube"></div>
                <h3>YouTube</h3>
                <a
                  href="https://www.youtube.com/channel/UCO20LJZBF-lYbc6PWVvwkMA"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
              <li>
                <div className="icon icon-reddit"></div>
                <h3>Reddit</h3>
                <a
                  href="https://www.reddit.com/r/shardeum/"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
              <li>
                <div className="icon icon-github"></div>
                <h3>GitHub</h3>
                <a
                  href="https://github.com/shardeum/"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
              <li>
                <div className="icon icon-gitlab"></div>
                <h3>GitLab</h3>
                <a
                  href="https://gitlab.com/shardeum/server"
                  target="_blank"
                  rel="noreferrer"
                ></a>
              </li>
            </ul>
          </nav>
        </footer>
        <a
          href="https://bit.ly/shardeum-discord"
          target="_blank"
          rel="noreferrer"
          className="discord-btn-cta"
        >
          <img
            src="https://shardeum.org/discord-cta.png"
            width="20"
            alt="Ask a Question"
          />{" "}
          Ask a Question
        </a>

        <script
          src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js"
          async
        ></script>

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"
          async
        ></script>

        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.6.1/Draggable.min.js"
          async
        ></script>
        <script
          src="https://cdn-cookieyes.com/client_data/08f8687cb2b708c3de5b4b9f/script.js"
          async
        ></script>

        <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb">
          <section id="shadow-host-companion"></section>
        </div>
      </body>
    </div>
  );
};

export default Home;
