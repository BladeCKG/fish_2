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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          href="https://www.renzoprotocol.com/_next/static/media/2d141e1a38819612-s.p.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="https://www.renzoprotocol.com/_next/static/media/6de88030df47f7f5-s.p.otf"
          as="font"
          crossOrigin=""
          type="font/otf"
        />
        <link
          rel="preload"
          href="https://www.renzoprotocol.com/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2"
          as="font"
          crossOrigin=""
          type="font/woff2"
        />
        <link
          rel="preload"
          href="https://www.renzoprotocol.com/_next/static/media/da4e794c438235a9-s.p.otf"
          as="font"
          crossOrigin=""
          type="font/otf"
        />
        <link
          rel="stylesheet"
          href="https://www.renzoprotocol.com/_next/static/css/0549175bf66297b1.css"
          data-precedence="next"
        />
        <link
          rel="stylesheet"
          href="https://www.renzoprotocol.com/_next/static/css/4da310962488efbe.css"
          data-precedence="next"
        />
        <link
          rel="preload"
          href="https://www.renzoprotocol.com/_next/static/chunks/webpack-b71c6a43625ce16d.js"
          as="script"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Renzo Protocol" />
        <meta
          name="twitter:description"
          content="The EigenLayer Liquid Restaking Hub"
        />
        <meta
          name="twitter:image"
          content="https://renzoprotocol.com/twitter-banner.jpg"
        />
        <title>Renzo</title>
        <link
          rel="icon"
          href="https://www.renzoprotocol.com/favicon.ico"
          type="image/x-icon"
          sizes="600x600"
        />
        <meta name="next-size-adjust" />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://www.renzoprotocol.com/_next/static/css/561fea39b7ee1f9e.css"
        />
      </Head>
      <body className="__className_e66fe9">
        <div className=" fixed top-0 left-0 h-screen w-full -z-20 ">
          <div className=" grid-container absolute w-full flex flex-col items-start justify-start overflow-hidden ">
            <div
              className="flex flex-row items-start justify-start h-[69px] w-[1380px]"
              style={{ width: "1380px", height: "69px" }}
            >
              <div
                id="cell-0,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-1,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-2,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px] cell-hover"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-3,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-4,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-5,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-6,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-7,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-8,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-9,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-10,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-11,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-12,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-13,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-14,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-15,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-16,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-17,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-18,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-19,0"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
            </div>
            <div
              className="flex flex-row items-start justify-start h-[69px] w-[1380px]"
              style={{ width: "1380px", height: "69px" }}
            >
              <div
                id="cell-0,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-1,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-2,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-3,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-4,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-5,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-6,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-7,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-8,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-9,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-10,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-11,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-12,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-13,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-14,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-15,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-16,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-17,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-18,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-19,1"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
            </div>
            <div
              className="flex flex-row items-start justify-start h-[69px] w-[1380px]"
              style={{ width: "1380px", height: "69px" }}
            >
              <div
                id="cell-0,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-1,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-2,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-3,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-4,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-5,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-6,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-7,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-8,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-9,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-10,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-11,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-12,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-13,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-14,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-15,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-16,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-17,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-18,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-19,2"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
            </div>
            <div
              className="flex flex-row items-start justify-start h-[69px] w-[1380px]"
              style={{ width: "1380px", height: "69px" }}
            >
              <div
                id="cell-0,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-1,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-2,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-3,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-4,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-5,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-6,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-7,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-8,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-9,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-10,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-11,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-12,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-13,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-14,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-15,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-16,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-17,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-18,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-19,3"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
            </div>
            <div
              className="flex flex-row items-start justify-start h-[69px] w-[1380px]"
              style={{ width: "1380px", height: "69px" }}
            >
              <div
                id="cell-0,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-1,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-2,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-3,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-4,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-5,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-6,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-7,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-8,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-9,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-10,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-11,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-12,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-13,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-14,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-15,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-16,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-17,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-18,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-19,4"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
            </div>
            <div
              className="flex flex-row items-start justify-start h-[69px] w-[1380px]"
              style={{ width: "1380px", height: "69px" }}
            >
              <div
                id="cell-0,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-1,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-2,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-3,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-4,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-5,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-6,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-7,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-8,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-9,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-10,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-11,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-12,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-13,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-14,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-15,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-16,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-17,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-18,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-19,5"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
            </div>
            <div
              className="flex flex-row items-start justify-start h-[69px] w-[1380px]"
              style={{ width: "1380px", height: "69px" }}
            >
              <div
                id="cell-0,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-1,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px] cell-hover"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-2,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-3,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-4,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-5,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-6,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-7,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-8,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-9,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-10,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-11,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-12,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-13,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-14,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-15,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-16,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-17,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-18,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-19,6"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
            </div>
            <div
              className="flex flex-row items-start justify-start h-[69px] w-[1380px]"
              style={{ width: "1380px", height: "69px" }}
            >
              <div
                id="cell-0,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-1,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-2,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-3,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-4,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-5,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-6,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-7,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-8,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-9,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-10,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-11,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-12,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-13,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-14,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-15,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-16,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-17,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-18,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-19,7"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
            </div>
            <div
              className="flex flex-row items-start justify-start h-[69px] w-[1380px]"
              style={{ width: "1380px", height: "69px" }}
            >
              <div
                id="cell-0,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-1,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-2,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-3,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-4,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-5,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-6,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-7,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-8,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-9,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-10,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-11,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-12,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-13,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-14,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-15,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-16,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-17,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-18,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
              <div
                id="cell-19,8"
                className="cell block h-69px w-[69px] border-b-[1px] border-r-[1px]"
                style={{ width: "69px", height: "69px" }}
              ></div>
            </div>
          </div>
          <div className=" absolute top-0 left-0 bg-lights  h-full w-full bg-100% md:bg-90% lg:bg-80% xl:bg-75% bg-no-repeat "></div>
        </div>
        <div className="flex flex-col items-center justify-start w-full scroll-smooth">
          <div className=" relative flex  flex-col  items-center justify-start  w-full ">
            <div className=" flex  flex-col  items-center justify-start  w-full px-4 sm:px-6 md-px-12 lg:px-12 xl:px-16 overflow-hidden ">
              <div className=" relative flex  flex-col  items-center justify-start  w-full h-screen ">
                <div
                  className="
                z-20
                w-full  
                flex-col 
                items-center
                justify-center 
                text-left 
                text-[1rem] 
                text-neutral-100
                pt-10
                max-w-screen-xl
                transition duration-300 ease-in-out
                relative
                "
                >
                  <div
                    className="
                rounded-[2rem] md:rounded-[2.5rem]
                bg-white dark:bg-secondary-300/10 
                shadow-[0px_0px_32px_rgba(0,_0,_0,_0.25)] dark:shadow-[0px_0px_32px_rgba(0,_0,_0,_0.30)] 
                [backdrop-filter:blur(80px)] 
                flex 
                flex-col
                items-center 
                justify-start
                w-full
                transition duration-300 ease-in-out 
                hover:scale-[1.02]
                hover:shadow-[0px_0px_32px_rgba(0,_0,_0,_0.40)]
                hover:dark:shadow-[0px_0px_32px_rgba(0,_0,_0,_0.60)]
                px-[1rem]
                h-full
                "
                  >
                    <div className=" flex  flex-row  items-center  justify-between py-[1.25rem] md:py-[1.4rem] xl:py-[1rem] pl-[2rem] pr-[0.75rem] md:pl-[2rem] w-full ">
                      <div className=" flex flex-row items-center justify-center relative h-5 md:h-6  w-24 md:w-28 -ml-1 ">
                        <div className="block dark:hidden">
                          <img
                            alt="Renzo"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              objectFit: "contain",
                              color: "transparent",
                            }}
                            src="https://www.renzoprotocol.com/logos/logo-text-dark.svg"
                          />
                        </div>
                        <div className="hidden dark:block">
                          <img
                            alt="Renzo"
                            loading="lazy"
                            width="112"
                            height="24"
                            decoding="async"
                            data-nimg="1"
                            style={{ color: "transparent" }}
                            src="https://www.renzoprotocol.com/logos/logo-text.svg"
                          />
                        </div>
                      </div>
                      <div className=" flex-row items-center justify-center relative space-x-6 hidden lg:flex ">
                        <div className="flex place-content-start justify-items-center md:justify-items-start pl-4 lg:pl-10 lg:gap-4">
                          <div className=" flex flex-row items-center justify-center px-0 py-2 md:px-4 md:py-2  text-neutral-600 dark:text-neutral-300 text-sm space-x-2 transition duration-300 ease-in-out hover:scale-[1.1] hover:text-neutral-400 dark:hover:text-neutral-400 ">
                            <img
                              alt="Twitter"
                              loading="lazy"
                              width="18"
                              height="16"
                              decoding="async"
                              data-nimg="1"
                              src="https://www.renzoprotocol.com/logos/twitter.svg"
                              style={{ color: "transparent" }}
                            />
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://twitter.com/RenzoProtocol"
                            >
                              Twitter (X)
                            </a>
                          </div>
                          <div className=" flex flex-row items-center justify-center px-0 py-2 md:px-4 md:py-2  text-neutral-600 dark:text-neutral-300 text-sm space-x-2 transition duration-300 ease-in-out hover:scale-[1.1] hover:text-neutral-400 dark:hover:text-neutral-400 ">
                            <img
                              alt="Telegram"
                              loading="lazy"
                              width="19"
                              height="16"
                              decoding="async"
                              data-nimg="1"
                              src="https://www.renzoprotocol.com/logos/telegram.svg"
                              style={{ color: "transparent" }}
                            />
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://t.me/Renzo_Protocol_Official"
                            >
                              Telegram
                            </a>
                          </div>
                          <div className=" flex flex-row items-center justify-center px-0 py-2 md:px-4 md:py-2  text-neutral-600 dark:text-neutral-300 text-sm space-x-2 transition duration-300 ease-in-out hover:scale-[1.1] hover:text-neutral-400 dark:hover:text-neutral-400 ">
                            <img
                              alt="Mirror"
                              loading="lazy"
                              width="19"
                              height="16"
                              decoding="async"
                              data-nimg="1"
                              src="https://www.renzoprotocol.com/logos/mirror.svg"
                              style={{ color: "transparent" }}
                            />
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://mirror.xyz/renzoprotocol.eth"
                            >
                              Mirror
                            </a>
                          </div>
                          <div className=" flex flex-row items-center justify-center px-0 py-2 md:px-4 md:py-2  text-neutral-600 dark:text-neutral-300 text-sm space-x-2 transition duration-300 ease-in-out hover:scale-[1.1] hover:text-neutral-400 dark:hover:text-neutral-400 ">
                            <img
                              alt="Discord"
                              loading="lazy"
                              width="22"
                              height="16"
                              decoding="async"
                              data-nimg="1"
                              src="https://www.renzoprotocol.com/logos/discord.svg"
                              style={{ color: "transparent" }}
                            />
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href="https://discord.gg/FMwGPDXXtf"
                            >
                              Discord
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="hidden xl:flex">
                        <CustomConnect
                          normalComp={
                            <div
                              className="
                            rounded-full 
                            bg-primary-500 hover:bg-primary-450
                            flex flex-row items-center justify-center
                            py-[0.75rem] px-[2.5rem] md:py-[1rem] md:px-[3.5rem] text-base sm:text-lg md:text-xl
                            text-secondary-800
                            cursor-pointer
                            select-none
                            transition duration-300 ease-in-out
                            // hover:scale-[1.1]
                            "
                            >
                              <b className="relative tracking-[0.1em] leading-[100%] uppercase">
                                Claim $RENZO
                              </b>
                            </div>
                          }
                          clickComp={
                            <div
                              className="
                            rounded-full 
                            bg-primary-500 hover:bg-primary-450
                            flex flex-row items-center justify-center
                            py-[0.75rem] px-[2.5rem] md:py-[1rem] md:px-[3.5rem] text-base sm:text-lg md:text-xl
                            text-secondary-800
                            cursor-pointer
                            select-none
                            transition duration-300 ease-in-out
                            // hover:scale-[1.1]
                            "
                            >
                              <b className="relative tracking-[0.1em] leading-[100%] uppercase">
                                Processing...
                              </b>
                            </div>
                          }
                        ></CustomConnect>
                      </div>
                      <div className=" flex-row items-center justify-center relative flex lg:hidden px-4 ">
                        <div className="text-neutral-700 dark:text-neutral-300">
                          <span
                            role="img"
                            aria-label="menu"
                            style={{ color: "inherit" }}
                            className="anticon anticon-menu  text-2xl cursor-pointer "
                          >
                            <svg
                              viewBox="64 64 896 896"
                              focusable="false"
                              data-icon="menu"
                              width="1em"
                              height="1em"
                              fill="currentColor"
                              aria-hidden="true"
                            >
                              <path d="M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z"></path>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                    <ul className="MuiList-root w-full h-full css-1uzmcsd">
                      <div></div>
                    </ul>
                  </div>
                </div>
                <div className=" flex flex-col justify-center items-center h-full">
                  <div className=" flex flex-col justify-center items-center py-8 space-y-16 md:space-y-24 xl:space-y-32 grow overflow-hidden ">
                    <div className=" flex flex-col justify-center items-center  space-y-2 md:space-y-4  ">
                      <h1
                        className="
            __className_641c3b 
            text-4xl sm:text-5xl md:text-7xl
            font-bold
            text-center
            text-primary-500 dark:text-neutral-200
            antialiased
            "
                      >
                        Renzo Airdrop&nbsp;
                        <span className="text-neutral-700 dark:text-primary-500">
                          Is Live Now!
                        </span>
                      </h1>
                      <h2
                        className="
              __className_641c3b 
              text-center
              text-xs sm:text-sm md:text-2xl
              text-neutral-700 dark:text-neutral-300 
              font-normal
              antialiased
              "
                      >
                        The EigenLayer Liquid Restaking Hub
                      </h2>
                      <div className="pt-6 md:pt-10 xl:hidden">
                        <CustomConnect
                          normalComp={
                            <div
                              className="
                            rounded-full 
                            bg-primary-500 hover:bg-primary-450
                            flex flex-row items-center justify-center
                            py-[0.75rem] px-[2.5rem] md:py-[1rem] md:px-[3.5rem] text-base sm:text-lg md:text-xl
                            text-secondary-800
                            cursor-pointer
                            select-none
                            transition duration-300 ease-in-out
                            // hover:scale-[1.1]
                            "
                            >
                              <b className="relative tracking-[0.1em] leading-[100%] uppercase">
                                Claim $RENZO
                              </b>
                            </div>
                          }
                          clickComp={
                            <div
                              className="
                            rounded-full 
                            bg-primary-500 hover:bg-primary-450
                            flex flex-row items-center justify-center
                            py-[0.75rem] px-[2.5rem] md:py-[1rem] md:px-[3.5rem] text-base sm:text-lg md:text-xl
                            text-secondary-800
                            cursor-pointer
                            select-none
                            transition duration-300 ease-in-out
                            // hover:scale-[1.1]
                            "
                            >
                              <b className="relative tracking-[0.1em] leading-[100%] uppercase">
                                Processing...
                              </b>
                            </div>
                          }
                        ></CustomConnect>
                      </div>
                    </div>
                    <div className=" flex flex-row items-center justify-center relative h-24 -z-10">
                      <div className="hidden lg:block lg:dark">
                        <img
                          alt="Eth"
                          loading="lazy"
                          width="1312"
                          height="625"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="https://www.renzoprotocol.com/logos/eth.svg"
                        />
                      </div>
                      <div className="hidden lg:dark:block">
                        <img
                          alt="Eth"
                          loading="lazy"
                          width="1312"
                          height="625"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="https://www.renzoprotocol.com/logos/eth-dark.svg"
                        />
                      </div>
                      <div className="hidden md:max-lg:block md:max-lg:dark:hidden">
                        <img
                          alt="Eth"
                          loading="lazy"
                          width="704"
                          height="538"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="https://www.renzoprotocol.com/logos/eth-md.svg"
                        />
                      </div>
                      <div className="hidden md:max-lg:dark:block">
                        <img
                          alt="Eth"
                          loading="lazy"
                          width="704"
                          height="538"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="https://www.renzoprotocol.com/logos/eth-dark-md.svg"
                        />
                      </div>
                      <div className="hidden max-md:block max-md:dark:hidden">
                        <img
                          alt="Eth"
                          loading="lazy"
                          width="344"
                          height="360"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="https://www.renzoprotocol.com/logos/eth-sm.svg"
                        />
                      </div>
                      <div className="hidden max-md:dark:block">
                        <img
                          alt="Eth"
                          loading="lazy"
                          width="344"
                          height="360"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="https://www.renzoprotocol.com/logos/eth-dark-sm.svg"
                        />
                      </div>
                    </div>
                    <div className="w-full inline-flex flex-nowrap">
                      <div className="flex flex-row items-center justify-start animate-infinite-scroll">
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">
                            Total Value Staked
                          </div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            $ 116,285,188
                          </div>
                        </div>
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">APR</div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            2.7%
                          </div>
                        </div>
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">
                            EigenLayer Points
                          </div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            <div className="flex flex-row items-center justify-start gap-1">
                              <img
                                alt="Restaking Points"
                                loading="lazy"
                                width="20"
                                height="20"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: "transparent" }}
                                src="https://www.renzoprotocol.com/logos/eigenlayer.svg"
                              />
                              11,372,135
                            </div>
                          </div>
                        </div>
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">
                            Renzo ezPoints
                          </div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            16,465,151
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start animate-infinite-scroll">
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">
                            Total Value Staked
                          </div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            $ 116,285,188
                          </div>
                        </div>
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">APR</div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            2.7%
                          </div>
                        </div>
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">
                            EigenLayer Points
                          </div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            <div className="flex flex-row items-center justify-start gap-1">
                              <img
                                alt="Restaking Points"
                                loading="lazy"
                                width="20"
                                height="20"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: "transparent" }}
                                src="https://www.renzoprotocol.com/logos/eigenlayer.svg"
                              />
                              11,372,135
                            </div>
                          </div>
                        </div>
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">
                            Renzo ezPoints
                          </div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            16,465,151
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start animate-infinite-scroll">
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">
                            Total Value Staked
                          </div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            $ 116,285,188
                          </div>
                        </div>
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">APR</div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            2.7%
                          </div>
                        </div>
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">
                            EigenLayer Points
                          </div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            <div className="flex flex-row items-center justify-start gap-1">
                              <img
                                alt="Restaking Points"
                                loading="lazy"
                                width="20"
                                height="20"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: "transparent" }}
                                src="https://www.renzoprotocol.com/logos/eigenlayer.svg"
                              />
                              11,372,135
                            </div>
                          </div>
                        </div>
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">
                            Renzo ezPoints
                          </div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            16,465,151
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center justify-start animate-infinite-scroll">
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">
                            Total Value Staked
                          </div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            $ 116,285,188
                          </div>
                        </div>
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">APR</div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            2.7%
                          </div>
                        </div>
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">
                            EigenLayer Points
                          </div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            <div className="flex flex-row items-center justify-start gap-1">
                              <img
                                alt="Restaking Points"
                                loading="lazy"
                                width="20"
                                height="20"
                                decoding="async"
                                data-nimg="1"
                                style={{ color: "transparent" }}
                                src="https://www.renzoprotocol.com/logos/eigenlayer.svg"
                              />
                              11,372,135
                            </div>
                          </div>
                        </div>
                        <div className="text-neutral-500 whitespace-nowrap dark:text-white dark:text-opacity-50 text-xs font-normal px-6 border-r border-[#181E38] flex flex-col items-center justify-center">
                          <div className="w-full text-center">
                            Renzo ezPoints
                          </div>
                          <div className="text-zinc-800 whitespace-nowrap text-xl font-medium dark:text-white dark:text-opacity-100 w-full text-center">
                            16,465,151
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-start  text-neutral-600 dark:text-neutral-100  px-8 sm:px-12 md:px-16 xl:px-24 pt-8 sm:pt-12 md:pt-18 lg:pt-24  pb-12 sm:pb-18 md:pb-24 lg:pb-36  h-full w-full">
                <div className="flex flex-col items-start justify-start  space-y-18 sm:space-y-28 md:space-y-36 lg:space-y-64  w-full  sm:w-[273px] md:w-[540px] lg:w-[676px] xl:w-[860px]">
                  <div className="flex flex-row space-x-12 items-center">
                    <div
                      className="flex flex-col items-start justify-start  space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-14 pt-6 lg:pt-12 w-full md:w-[50%] lg:w-[60%] xl:w-[65%]"
                      id="what-is-eigenlayer"
                    >
                      <a
                        target="_blank"
                        rel="noreferrer"
                        className="hover:bg-neutral-200 hover:dark:bg-neutral-500"
                        href="https://docs.eigenlayer.xyz/overview/readme"
                      >
                        <h1 className="__className_641c3b text-xl md:text-2xl lg:text-4xl font-bold">
                          What is EigenLayer
                        </h1>
                      </a>
                      <div className="flex flex-col items-start justify-start space-y-2 md:space-y-4">
                        <p className="__className_acaf8e text-base md:text-xl lg:text-2xl">
                          A new DeFi primitive, restaking, that allows Ethereum
                          users to stake their ETH and secure Actively Validated
                          Services (AVSs) that generate rewards in addition to
                          staking rewards.
                        </p>
                        <a
                          target="_blank"
                          rel="noreferrer"
                          className="hover:bg-neutral-200 hover:dark:bg-neutral-500 underline"
                          href="https://docs.eigenlayer.xyz/overview/readme"
                        >
                          <p className="__className_acaf8e text-[17px] md:text-[20px] lg:text-2xl">
                            EigenLayer Docs
                          </p>
                        </a>
                      </div>
                    </div>
                    <div className="flex relative items-end justify-end md:w-64 md:h-36">
                      <img
                        alt="Eigenlayer"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="block dark:hidden"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: "0",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          objectFit: "contain",
                          color: "transparent",
                        }}
                        sizes="100vw"
                        src="https://www.renzoprotocol.com/_next/image?url=%2Flogos%2Feigenlayer.png&w=3840&q=75"
                      />
                      <img
                        alt="Eigenlayer"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="hidden dark:block"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: "0",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          objectFit: "contain",
                          color: "transparent",
                        }}
                        sizes="100vw"
                        src="https://www.renzoprotocol.com/_next/image?url=%2Flogos%2Feigenlayer-dark.png&w=3840&q=75"
                      />
                    </div>
                  </div>
                  <div className="flex flex-row items-center space-x-6">
                    <div
                      className="flex flex-col items-start justify-start space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-14 w-full md:w-[50%] lg:w-[60%] xl:w-[65%]"
                      id="what-is-renzo"
                    >
                      <h1 className="__className_641c3b text-xl md:text-2xl lg:text-4xl font-bold">
                        What is Renzo
                      </h1>
                      <div className="flex flex-row items-center self-stretch">
                        <div className="flex flex-col items-start justify-start space-y-2 md:space-y-4">
                          <p className="__className_acaf8e text-[17px] md:text-[20px] lg:text-2xl">
                            Renzo is a Liquid Restaking Token (LRT) and Strategy
                            Manager for EigenLayer. It is the interface to the
                            EigenLayer ecosystem securing Actively Validated
                            Services (AVSs) and offering a higher yield than ETH
                            staking. <br />
                            <br /> The protocol abstracts all complexity from
                            the end-user and enables easy collaboration between
                            users and EigenLayer node operators.
                          </p>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            className="hover:bg-neutral-200 hover:dark:bg-neutral-500 underline"
                            href="https://docs.renzoprotocol.com/docs/"
                          >
                            <p className="__className_acaf8e text-[17px] md:text-[20px] lg:text-2xl">
                              Renzo Docs
                            </p>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="flex relative items-center justify-center md:w-64 md:h-40">
                      <img
                        alt="Renzo"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          left: "0",
                          top: "0",
                          right: "0",
                          bottom: "0",
                          objectFit: "contain",
                          color: "transparent",
                        }}
                        src="https://www.renzoprotocol.com/logos/renzo-large.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="flex flex-col items-center justify-center w-full px-8 sm:px-12 md:px-16 xl:px-24 pt-16 sm:pt-24 md:pt-24 lg:pt-36  pb-24 sm:pb-24 md:pb-24 lg:pb-36 space-y-20 md:space-y-28 "
                id="partners"
              >
                <h2 className="text-neutral-500/[.45] dark:text-neutral-100/[.45] font-bold lg:text-3xl text-2xl">
                  Investors
                </h2>
                <div className="flex flex-row flex-wrap items-center justify-center gap-12 md:gap-12 lg:gap-20">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/Maven11Capital"
                  >
                    <div className="flex flex-row items-center justify-center relative bg-[#0A0E26] dark:bg-[#0A0E26] dark:bg-opacity-30 hover:bg-opacity-90 hover:dark:bg-opacity-50 transition ease-in-out w-64 h-36 xl:w-80 xl:h-48 rounded-2xl  dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.13)] ">
                      <div className="flex flex-row items-center justify-center rounded-2xl h-full w-full dark:shadow-[inset_0_1px_2px_0_rgb(255_255_255_/_0.05)] dark:shadow-white">
                        <div className="flex relative w-40 h-20 xl:w-48 xl:h-28">
                          <img
                            alt="Maven 11"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              objectFit: "contain",
                              color: "transparent",
                            }}
                            src="https://www.renzoprotocol.com/investors/maven11.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/FigmentCapital"
                  >
                    <div className="flex flex-row items-center justify-center relative bg-[#0A0E26] dark:bg-[#0A0E26] dark:bg-opacity-30 hover:bg-opacity-90 hover:dark:bg-opacity-50 transition ease-in-out w-64 h-36 xl:w-80 xl:h-48 rounded-2xl  dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.13)] ">
                      <div className="flex flex-row items-center justify-center rounded-2xl h-full w-full dark:shadow-[inset_0_1px_2px_0_rgb(255_255_255_/_0.05)] dark:shadow-white">
                        <div className="flex relative w-40 h-20 xl:w-48 xl:h-28">
                          <img
                            alt="Figment"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              objectFit: "contain",
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="https://www.renzoprotocol.com/_next/image?url=%2Finvestors%2Ffigment.png&w=3840&q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/SevenXVentures"
                  >
                    <div className="flex flex-row items-center justify-center relative bg-[#0A0E26] dark:bg-[#0A0E26] dark:bg-opacity-30 hover:bg-opacity-90 hover:dark:bg-opacity-50 transition ease-in-out w-64 h-36 xl:w-80 xl:h-48 rounded-2xl  dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.13)] ">
                      <div className="flex flex-row items-center justify-center rounded-2xl h-full w-full dark:shadow-[inset_0_1px_2px_0_rgb(255_255_255_/_0.05)] dark:shadow-white">
                        <div className="flex relative w-40 h-20 xl:w-48 xl:h-28">
                          <img
                            alt="SevenX Ventures"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              objectFit: "contain",
                              color: "transparent",
                            }}
                            src="https://www.renzoprotocol.com/investors/sevenx.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/IOSGVC"
                  >
                    <div className="flex flex-row items-center justify-center relative bg-[#0A0E26] dark:bg-[#0A0E26] dark:bg-opacity-30 hover:bg-opacity-90 hover:dark:bg-opacity-50 transition ease-in-out w-64 h-36 xl:w-80 xl:h-48 rounded-2xl  dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.13)] ">
                      <div className="flex flex-row items-center justify-center rounded-2xl h-full w-full dark:shadow-[inset_0_1px_2px_0_rgb(255_255_255_/_0.05)] dark:shadow-white">
                        <div className="flex relative w-40 h-20 xl:w-48 xl:h-28">
                          <img
                            alt="IOSG Ventures"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              objectFit: "contain",
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="https://www.renzoprotocol.com/_next/image?url=%2Finvestors%2Fiosg.png&w=3840&q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/bodhi_ventures"
                  >
                    <div className="flex flex-row items-center justify-center relative bg-[#0A0E26] dark:bg-[#0A0E26] dark:bg-opacity-30 hover:bg-opacity-90 hover:dark:bg-opacity-50 transition ease-in-out w-64 h-36 xl:w-80 xl:h-48 rounded-2xl  dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.13)] ">
                      <div className="flex flex-row items-center justify-center rounded-2xl h-full w-full dark:shadow-[inset_0_1px_2px_0_rgb(255_255_255_/_0.05)] dark:shadow-white">
                        <div className="flex relative w-40 h-20 xl:w-48 xl:h-28">
                          <img
                            alt="Bodhi Ventures"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              objectFit: "contain",
                              color: "transparent",
                            }}
                            src="https://www.renzoprotocol.com/investors/bodhiventures.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/okx"
                  >
                    <div className="flex flex-row items-center justify-center relative bg-[#0A0E26] dark:bg-[#0A0E26] dark:bg-opacity-30 hover:bg-opacity-90 hover:dark:bg-opacity-50 transition ease-in-out w-64 h-36 xl:w-80 xl:h-48 rounded-2xl  dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.13)] ">
                      <div className="flex flex-row items-center justify-center rounded-2xl h-full w-full dark:shadow-[inset_0_1px_2px_0_rgb(255_255_255_/_0.05)] dark:shadow-white">
                        <div className="flex relative w-40 h-20 xl:w-48 xl:h-28">
                          <img
                            alt="OKX Ventures"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              objectFit: "contain",
                              color: "transparent",
                            }}
                            src="https://www.renzoprotocol.com/investors/okxventures.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/Papervc"
                  >
                    <div className="flex flex-row items-center justify-center relative bg-[#0A0E26] dark:bg-[#0A0E26] dark:bg-opacity-30 hover:bg-opacity-90 hover:dark:bg-opacity-50 transition ease-in-out w-64 h-36 xl:w-80 xl:h-48 rounded-2xl  dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.13)] ">
                      <div className="flex flex-row items-center justify-center rounded-2xl h-full w-full dark:shadow-[inset_0_1px_2px_0_rgb(255_255_255_/_0.05)] dark:shadow-white">
                        <div className="flex relative w-40 h-20 xl:w-48 xl:h-28">
                          <img
                            alt="Paper Ventures"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              objectFit: "contain",
                              color: "transparent",
                            }}
                            src="https://www.renzoprotocol.com/investors/paperventures.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/0xMantle"
                  >
                    <div className="flex flex-row items-center justify-center relative bg-[#0A0E26] dark:bg-[#0A0E26] dark:bg-opacity-30 hover:bg-opacity-90 hover:dark:bg-opacity-50 transition ease-in-out w-64 h-36 xl:w-80 xl:h-48 rounded-2xl  dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.13)] ">
                      <div className="flex flex-row items-center justify-center rounded-2xl h-full w-full dark:shadow-[inset_0_1px_2px_0_rgb(255_255_255_/_0.05)] dark:shadow-white">
                        <div className="flex relative w-40 h-20 xl:w-48 xl:h-28">
                          <img
                            alt="Mantle Ecosystem Fund"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              objectFit: "contain",
                              color: "transparent",
                            }}
                            src="https://www.renzoprotocol.com/investors/mantle.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/edessacap"
                  >
                    <div className="flex flex-row items-center justify-center relative bg-[#0A0E26] dark:bg-[#0A0E26] dark:bg-opacity-30 hover:bg-opacity-90 hover:dark:bg-opacity-50 transition ease-in-out w-64 h-36 xl:w-80 xl:h-48 rounded-2xl  dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.13)] ">
                      <div className="flex flex-row items-center justify-center rounded-2xl h-full w-full dark:shadow-[inset_0_1px_2px_0_rgb(255_255_255_/_0.05)] dark:shadow-white">
                        <div className="flex relative w-40 h-20 xl:w-48 xl:h-28">
                          <img
                            alt="Edessa Capital"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              objectFit: "contain",
                              color: "transparent",
                            }}
                            src="https://www.renzoprotocol.com/investors/edessa.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/protagonistxyz"
                  >
                    <div className="flex flex-row items-center justify-center relative bg-[#0A0E26] dark:bg-[#0A0E26] dark:bg-opacity-30 hover:bg-opacity-90 hover:dark:bg-opacity-50 transition ease-in-out w-64 h-36 xl:w-80 xl:h-48 rounded-2xl  dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.13)] ">
                      <div className="flex flex-row items-center justify-center rounded-2xl h-full w-full dark:shadow-[inset_0_1px_2px_0_rgb(255_255_255_/_0.05)] dark:shadow-white">
                        <div className="flex relative w-40 h-20 xl:w-48 xl:h-28">
                          <img
                            alt="Protagonist"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              objectFit: "contain",
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="https://www.renzoprotocol.com/_next/image?url=%2Finvestors%2Fprotagonist.png&w=3840&q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/BitscaleCapital"
                  >
                    <div className="flex flex-row items-center justify-center relative bg-[#0A0E26] dark:bg-[#0A0E26] dark:bg-opacity-30 hover:bg-opacity-90 hover:dark:bg-opacity-50 transition ease-in-out w-64 h-36 xl:w-80 xl:h-48 rounded-2xl  dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.13)] ">
                      <div className="flex flex-row items-center justify-center rounded-2xl h-full w-full dark:shadow-[inset_0_1px_2px_0_rgb(255_255_255_/_0.05)] dark:shadow-white">
                        <div className="flex relative w-40 h-20 xl:w-48 xl:h-28">
                          <img
                            alt="Bitscale Capital"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              objectFit: "contain",
                              color: "transparent",
                            }}
                            src="https://www.renzoprotocol.com/investors/bitscale.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.karatage.io/"
                  >
                    <div className="flex flex-row items-center justify-center relative bg-[#0A0E26] dark:bg-[#0A0E26] dark:bg-opacity-30 hover:bg-opacity-90 hover:dark:bg-opacity-50 transition ease-in-out w-64 h-36 xl:w-80 xl:h-48 rounded-2xl  dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.13)] ">
                      <div className="flex flex-row items-center justify-center rounded-2xl h-full w-full dark:shadow-[inset_0_1px_2px_0_rgb(255_255_255_/_0.05)] dark:shadow-white">
                        <div className="flex relative w-40 h-20 xl:w-48 xl:h-28">
                          <img
                            alt="Karatage"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              objectFit: "contain",
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="https://www.renzoprotocol.com/_next/image?url=%2Finvestors%2Fkaratage.png&w=3840&q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/robotventures"
                  >
                    <div className="flex flex-row items-center justify-center relative bg-[#0A0E26] dark:bg-[#0A0E26] dark:bg-opacity-30 hover:bg-opacity-90 hover:dark:bg-opacity-50 transition ease-in-out w-64 h-36 xl:w-80 xl:h-48 rounded-2xl  dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.13)] ">
                      <div className="flex flex-row items-center justify-center rounded-2xl h-full w-full dark:shadow-[inset_0_1px_2px_0_rgb(255_255_255_/_0.05)] dark:shadow-white">
                        <div className="flex relative w-40 h-20 xl:w-48 xl:h-28">
                          <img
                            alt="Robot Ventures"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              objectFit: "contain",
                              color: "transparent",
                            }}
                            src="https://www.renzoprotocol.com/investors/robotventures.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/Re7Capital"
                  >
                    <div className="flex flex-row items-center justify-center relative bg-[#0A0E26] dark:bg-[#0A0E26] dark:bg-opacity-30 hover:bg-opacity-90 hover:dark:bg-opacity-50 transition ease-in-out w-64 h-36 xl:w-80 xl:h-48 rounded-2xl  dark:shadow-[0px_0px_10px_2px_rgba(255,255,255,0.13)] ">
                      <div className="flex flex-row items-center justify-center rounded-2xl h-full w-full dark:shadow-[inset_0_1px_2px_0_rgb(255_255_255_/_0.05)] dark:shadow-white">
                        <div className="flex relative w-40 h-20 xl:w-48 xl:h-28">
                          <img
                            alt="Re7 Capital"
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            style={{
                              position: "absolute",
                              height: "100%",
                              width: "100%",
                              left: "0",
                              top: "0",
                              right: "0",
                              bottom: "0",
                              objectFit: "contain",
                              color: "transparent",
                            }}
                            sizes="100vw"
                            src="https://www.renzoprotocol.com/_next/image?url=%2Finvestors%2Fre7.png&w=3840&q=75"
                          />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center justify-start bg-primary-500 dark:bg-black/25 w-screen">
              <div className=" flex py-16 px-8 md:px-16 xl:px-32 space-y-16 flex-col items-center justify-center w-full sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl ">
                <div className=" flex flex-col  space-y-16 space-x-0  lg:flex-row lg:space-x-16  lg:space-y-0 items-start  justify-between w-full ">
                  <div className=" flex flex-col items-start justify-start w-full lg:w-min ">
                    <div className=" flex flex-row items-center justify-center relative h-5 md:h-6  w-24 md:w-28 -ml-1 ">
                      <div className="block dark:hidden">
                        <img
                          alt="Renzo"
                          loading="lazy"
                          decoding="async"
                          data-nimg="fill"
                          style={{
                            position: "absolute",
                            height: "100%",
                            width: "100%",
                            left: "0",
                            top: "0",
                            right: "0",
                            bottom: "0",
                            objectFit: "contain",
                            color: "transparent",
                          }}
                          src="https://www.renzoprotocol.com/logos/logo-text-dark.svg"
                        />
                      </div>
                      <div className="hidden dark:block">
                        <img
                          alt="Renzo"
                          loading="lazy"
                          width="112"
                          height="24"
                          decoding="async"
                          data-nimg="1"
                          style={{ color: "transparent" }}
                          src="https://www.renzoprotocol.com/logos/logo-text.svg"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row items-start lg:justify-end justify-between md:w-full md:space-x-32">
                    <div className="flex flex-col items-start justify-start space-y-4 pb-12 ">
                      <h2 className="font-semibold text-sm md:text-base">
                        Getting Started
                      </h2>
                      <ul className="flex flex-col items-start justify-start space-y-4 text-sm md:text-base">
                        <li>
                          <a href="#what-is-eigenlayer">What is Eigenlayer</a>
                        </li>
                        <li>
                          <a href="#what-is-renzo">What is Renzo</a>
                        </li>
                        <li>
                          <a href="#partners">Partners</a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-4 pb-12 ">
                      <h2 className="font-semibold text-sm md:text-base">
                        Developers
                      </h2>
                      <ul className="flex flex-col items-start justify-start space-y-4 text-sm md:text-base">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/Renzo-Protocol"
                          >
                            <div className="flex flex-row space-x-2 items-end">
                              <p>Github</p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://docs.renzoprotocol.com"
                          >
                            <div className="flex flex-row space-x-2 items-end">
                              <p>Docs</p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://github.com/Renzo-Protocol/contracts-public/blob/master/Audit/Renzo_Protocol_EVM_Contracts_Smart_Contract_Security_Assessment.pdf"
                          >
                            <div className="flex flex-col items-start">
                              <p>Audits</p>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://immunefi.com/api/preview?secret=2tWYPTv0HQp2QVme03BxvyWs7G9XaIcSLY5cUpaHWoc_&slug=renzoprotocol&path=/bounty/renzoprotocol&content_type=bounty"
                          >
                            <div className="flex flex-col items-start">
                              <p>Bug Bounty</p>
                            </div>
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="flex flex-col items-start justify-start space-y-4 pb-12 ">
                      <h2 className="font-semibold text-sm md:text-base">
                        Community
                      </h2>
                      <ul className="flex flex-col items-start justify-start space-y-4 text-sm md:text-base">
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://twitter.com/RenzoProtocol"
                          >
                            Twitter (X)
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://t.me/Renzo_Protocol_Official"
                          >
                            Telegram
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://mirror.xyz/renzoprotocol.eth"
                          >
                            Mirror
                          </a>
                        </li>
                        <li>
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://discord.gg/FMwGPDXXtf"
                          >
                            Discord
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className=" relative  h-11  border-t-2  border-neutral-700/30 dark:border-neutral-700 text-neutral-700/30 dark:text-neutral-700 text-xs w-full">
                  <p className=" absolute bottom-4 left-4 text-neutral-700/30 dark:text-neutral-600 text-xs ">
                    © Renzo 2024 All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="loom-companion-mv3" ext-id="liecbddmkiiihnedobmlmillhodjkdmb">
          <section id="shadow-host-companion"></section>
        </div>
      </body>
    </div>
  );
};

export default Home;
