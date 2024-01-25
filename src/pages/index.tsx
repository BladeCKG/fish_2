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
        <script
          src="chrome-extension://dlcobpjiigpikoobohmabehhmhfoodbb/inpage.js"
          id="argent-x-extension"
          data-extension-id="dlcobpjiigpikoobohmabehhmhfoodbb"
          async
        ></script>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />

        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="profile" href="http://gmpg.org/xfn/11" />
        <link rel="pingback" href="" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
        />
        <title>Onno Vault – Redefining Staking with Layer 2 Technology</title>
        <meta
          name="description"
          content="Explore ONNO Vault, the cutting-edge platform leveraging Layer 2 technology for secure and high-yield staking. Discover a new era in asset management."
        />
        <link
          rel="icon"
          type="image/png"
          href="https://onnovault.io/imgs/logotipo.png"
        />
        <meta name="robots" content="max-image-preview:large" />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="cyberb » Feed"
          href=""
        />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="cyberb » Comments Feed"
          href="x"
        />
        <link
          rel="stylesheet"
          id="jkit-elements-main-css"
          href="https://onnovault.io/index_files/main.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="contact-form-7-css"
          href="https://onnovault.io/index_files/styles.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="niche-frame-css"
          href="https://onnovault.io/index_files/niche-frame.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="font-awesome-css"
          href="https://onnovault.io/index_files/font-awesome.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="animate-css"
          href="https://onnovault.io/index_files/animate.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="themify-icons-css"
          href="https://onnovault.io/index_files/themify-icons.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="linea-css"
          href="https://onnovault.io/index_files/linea.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="magnific-popup-css"
          href="https://onnovault.io/index_files/magnific-popup.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="owl-carousel-css"
          href="https://onnovault.io/index_files/owl.carousel.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="juxtapose-css"
          href="https://onnovault.io/index_files/juxtapose.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="naevents-styles-css"
          href="https://onnovault.io/index_files/styles(1).css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="naevents-responsive-css"
          href="https://onnovault.io/index_files/responsive.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="template-kit-export-css"
          href="https://onnovault.io/index_files/template-kit-export-public.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="hfe-style-css"
          href="https://onnovault.io/index_files/header-footer-elementor.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-css"
          href="https://onnovault.io/index_files/elementor-icons.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-frontend-css"
          href="https://onnovault.io/index_files/frontend-lite.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="swiper-css"
          href="https://onnovault.io/index_files/swiper.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-4-css"
          href="https://onnovault.io/index_files/post-4.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="font-awesome-5-all-css"
          href="https://onnovault.io/index_files/all.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="font-awesome-4-shim-css"
          href="https://onnovault.io/index_files/v4-shims.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-global-css"
          href="https://onnovault.io/index_files/global.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-6-css"
          href="https://onnovault.io/index_files/post-6.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="hfe-widgets-style-css"
          href="https://onnovault.io/index_files/frontend.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-77-css"
          href="https://onnovault.io/index_files/post-77.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-81-css"
          href="https://onnovault.io/index_files/post-81.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="happy-icons-css"
          href="https://onnovault.io/index_files/style.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="text-editor-style-css"
          href="https://onnovault.io/index_files/text-editor.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="hello-elementor-css"
          href="https://onnovault.io/index_files/style(1).min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="hello-elementor-theme-style-css"
          href="https://onnovault.io/index_files/theme.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="google-fonts-1-css"
          href="https://onnovault.io/index_files/css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-shared-0-css"
          href="https://onnovault.io/index_files/fontawesome.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-fa-solid-css"
          href="https://onnovault.io/index_files/solid.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-fa-brands-css"
          href="https://onnovault.io/index_files/brands.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-icons-fa-regular-css"
          href="https://onnovault.io/index_files/regular.min.css"
          media="all"
        />
        <link rel="preconnect" href="#" crossOrigin="" />
        <script
          src="https://onnovault.io/index_files/jquery.min.js.download"
          id="jquery-core-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/jquery-migrate.min.js.download"
          id="jquery-migrate-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/template-kit-export-public.min.js.download"
          id="template-kit-export-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/v4-shims.min.js.download"
          id="font-awesome-4-shim-js"
          async
        ></script>
        <link rel="https://api.w.org/" href="#" />
        <link rel="alternate" type="application/json" href="#" />
        <link rel="EditURI" type="application/rsd+xml" title="RSD" href="#" />

        <link rel="canonical" href="#" />
        <link rel="shortlink" href="#" />

        <link
          rel="alternate"
          type="text/xml+oembed"
          href="https://freevetis.com/cyberb/wp-json/oembed/1.0/embed?url=https%3A%2F%2Ffreevetis.com%2Fcyberb%2F&amp;format=xml"
        />
        <meta
          name="generator"
          content="Elementor 3.18.2; features: e_dom_optimization, e_optimized_assets_loading, e_optimized_css_loading, additional_custom_breakpoints, block_editor_assets_optimize, e_image_loading_optimization; settings: css_print_method-external, google_font-enabled, font_display-auto"
        />
        <script
          src="https://onnovault.io/index_files/wp-emoji-release.min.js.download"
          defer
        ></script>
        <script
          src="https://freevetis.com/cyberb/wp-includes/js/wp-emoji-release.min.js?ver=2081fe26282350495c7da73cab85940f"
          defer
        ></script>
      </Head>
      <body
        className="home page-template-default page page-id-6 wp-custom-logo ehf-header ehf-footer ehf-template-hello-elementor ehf-stylesheet-hello-elementor jkit-color-scheme elementor-default elementor-kit-4 elementor-page elementor-page-6 e--ua-blink e--ua-chrome e--ua-webkit"
        data-elementor-device-mode="desktop"
      >
        <div id="page" className="hfeed site">
          <header id="masthead" itemScope={true} itemType="#">
            <p className="main-title bhf-hidden" itemProp="headline">
              <a href="#" title="cyberb" rel="home">
                onno
              </a>
            </p>
            <div
              data-elementor-type="wp-post"
              data-elementor-id="77"
              className="elementor elementor-77"
            >
              <section
                className="elementor-section elementor-top-section elementor-element elementor-element-4f2f881 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                data-id="4f2f881"
                data-element_type="section"
                data-settings='{"background_background":"classic","_ha_eqh_enable":false}'
              >
                <div className="elementor-container elementor-column-gap-default">
                  <div
                    className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-1603086"
                    data-id="1603086"
                    data-element_type="column"
                  >
                    <div className="elementor-widget-wrap elementor-element-populated">
                      <section
                        className="elementor-section elementor-inner-section elementor-element elementor-element-6a90986 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                        data-id="6a90986"
                        data-element_type="section"
                        data-settings='{"_ha_eqh_enable":false}'
                      >
                        <div className="elementor-container elementor-column-gap-default">
                          <div
                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-32d1ba9"
                            data-id="32d1ba9"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-456f6c3 elementor-widget elementor-widget-site-logo"
                                data-id="456f6c3"
                                data-element_type="widget"
                                data-settings='{"align":"left","width":{"unit":"px","size":200,"sizes":[]},"width_tablet":{"unit":"%","size":"","sizes":[]},"width_mobile":{"unit":"%","size":"","sizes":[]},"space":{"unit":"%","size":"","sizes":[]},"space_tablet":{"unit":"%","size":"","sizes":[]},"space_mobile":{"unit":"%","size":"","sizes":[]},"image_border_radius":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"image_border_radius_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"image_border_radius_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_space":{"unit":"px","size":0,"sizes":[]},"caption_space_tablet":{"unit":"px","size":"","sizes":[]},"caption_space_mobile":{"unit":"px","size":"","sizes":[]}}'
                                data-widget_type="site-logo.default"
                              >
                                <div className="elementor-widget-container">
                                  <div className="hfe-site-logo">
                                    <a
                                      data-elementor-open-lightbox=""
                                      className="elementor-clickable"
                                      href="#"
                                    >
                                      <div className="hfe-site-logo-set">
                                        <div className="hfe-site-logo-container">
                                          <img
                                            className="hfe-site-logo-img elementor-animation-"
                                            src="https://onnovault.io/imgs/logo-g.png"
                                            alt="default-logo"
                                          />
                                        </div>
                                      </div>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div
                            className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-084b6cf"
                            data-id="084b6cf"
                            data-element_type="column"
                          >
                            <div className="elementor-widget-wrap elementor-element-populated">
                              <div
                                className="elementor-element elementor-element-a381fdd hfe-nav-menu__align-right hfe-submenu-icon-arrow hfe-submenu-animation-none hfe-link-redirect-child hfe-nav-menu__breakpoint-tablet elementor-widget elementor-widget-navigation-menu"
                                data-id="a381fdd"
                                data-element_type="widget"
                                data-settings='{"menu_space_between":{"unit":"px","size":20,"sizes":[]},"padding":{"unit":"px","top":"10","right":"34","bottom":"10","left":"35","isLinked":false},"dropdown_border_radius":{"unit":"px","top":"0","right":"0","bottom":"20","left":"20","isLinked":false},"padding_horizontal_menu_item":{"unit":"px","size":15,"sizes":[]},"padding_horizontal_menu_item_tablet":{"unit":"px","size":"","sizes":[]},"padding_horizontal_menu_item_mobile":{"unit":"px","size":"","sizes":[]},"padding_vertical_menu_item":{"unit":"px","size":15,"sizes":[]},"padding_vertical_menu_item_tablet":{"unit":"px","size":"","sizes":[]},"padding_vertical_menu_item_mobile":{"unit":"px","size":"","sizes":[]},"menu_space_between_tablet":{"unit":"px","size":"","sizes":[]},"menu_space_between_mobile":{"unit":"px","size":"","sizes":[]},"menu_row_space":{"unit":"px","size":"","sizes":[]},"menu_row_space_tablet":{"unit":"px","size":"","sizes":[]},"menu_row_space_mobile":{"unit":"px","size":"","sizes":[]},"dropdown_border_radius_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"dropdown_border_radius_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"width_dropdown_item":{"unit":"px","size":"220","sizes":[]},"width_dropdown_item_tablet":{"unit":"px","size":"","sizes":[]},"width_dropdown_item_mobile":{"unit":"px","size":"","sizes":[]},"padding_horizontal_dropdown_item":{"unit":"px","size":"","sizes":[]},"padding_horizontal_dropdown_item_tablet":{"unit":"px","size":"","sizes":[]},"padding_horizontal_dropdown_item_mobile":{"unit":"px","size":"","sizes":[]},"padding_vertical_dropdown_item":{"unit":"px","size":15,"sizes":[]},"padding_vertical_dropdown_item_tablet":{"unit":"px","size":"","sizes":[]},"padding_vertical_dropdown_item_mobile":{"unit":"px","size":"","sizes":[]},"distance_from_menu":{"unit":"px","size":"","sizes":[]},"distance_from_menu_tablet":{"unit":"px","size":"","sizes":[]},"distance_from_menu_mobile":{"unit":"px","size":"","sizes":[]},"toggle_size":{"unit":"px","size":"","sizes":[]},"toggle_size_tablet":{"unit":"px","size":"","sizes":[]},"toggle_size_mobile":{"unit":"px","size":"","sizes":[]},"toggle_border_width":{"unit":"px","size":"","sizes":[]},"toggle_border_width_tablet":{"unit":"px","size":"","sizes":[]},"toggle_border_width_mobile":{"unit":"px","size":"","sizes":[]},"toggle_border_radius":{"unit":"px","size":"","sizes":[]},"toggle_border_radius_tablet":{"unit":"px","size":"","sizes":[]},"toggle_border_radius_mobile":{"unit":"px","size":"","sizes":[]},"padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true}}'
                                data-widget_type="navigation-menu.default"
                              >
                                <div className="elementor-widget-container">
                                  <div
                                    className="hfe-nav-menu hfe-layout-horizontal hfe-nav-menu-layout horizontal hfe-pointer__none"
                                    data-layout="horizontal"
                                    data-last-item="cta"
                                  >
                                    <div
                                      role="button"
                                      className="hfe-nav-menu__toggle elementor-clickable"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <span className="screen-reader-text">
                                        Menu
                                      </span>
                                      <div className="hfe-nav-menu-icon">
                                        <i
                                          aria-hidden="true"
                                          className="fas fa-align-left"
                                        ></i>
                                      </div>
                                    </div>
                                    <nav
                                      className="hfe-nav-menu__layout-horizontal hfe-nav-menu__submenu-arrow"
                                      data-toggle-icon='<i aria-hidden="true" tabindex="0" className="fas fa-align-left"></i>'
                                      data-close-icon='<i aria-hidden="true" tabindex="0" className="far fa-window-close"></i>'
                                      data-full-width="yes"
                                    >
                                      <ul
                                        id="menu-1-a381fdd"
                                        className="hfe-nav-menu"
                                      >
                                        <li
                                          id="menu-item-64"
                                          className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-6 current_page_item parent hfe-creative-menu"
                                        >
                                          <a
                                            href="https://onnovault.io/"
                                            className="hfe-menu-item"
                                          >
                                            Home
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-65"
                                          className="menu-item menu-item-type-post_type menu-item-object-page parent hfe-creative-menu"
                                        >
                                          <a
                                            href="https://explorer.onnovault.io/"
                                            target="_blank"
                                            className="hfe-menu-item"
                                            rel="noreferrer"
                                          >
                                            L2 Explorer
                                          </a>
                                        </li>
                                        <li
                                          id="menu-item-65"
                                          className="menu-item menu-item-type-post_type menu-item-object-page parent hfe-creative-menu"
                                        >
                                          <a
                                            href="https://learn.onnovault.io/"
                                            target="_blank"
                                            className="hfe-menu-item"
                                            rel="noreferrer"
                                          >
                                            Whitepaper
                                          </a>
                                        </li>

                                        <li
                                          id="menu-item-73"
                                          className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children parent hfe-has-submenu hfe-creative-menu parent-has-child"
                                        >
                                          <div className="hfe-has-submenu-container">
                                            <a
                                              className="hfe-menu-item"
                                              aria-haspopup="true"
                                              aria-expanded="false"
                                            >
                                              Security
                                              <span className="hfe-menu-toggle sub-arrow hfe-menu-child-0"></span>
                                            </a>
                                          </div>
                                          <ul
                                            className="sub-menu"
                                            style={{ position: "absolute" }}
                                          >
                                            <li
                                              id="menu-item-74"
                                              className="menu-item menu-item-type-post_type menu-item-object-page hfe-creative-menu"
                                            >
                                              <a className="hfe-sub-menu-item">
                                                AUDIT
                                              </a>
                                            </li>
                                            <li
                                              id="menu-item-76"
                                              className="menu-item menu-item-type-post_type menu-item-object-post hfe-creative-menu"
                                            >
                                              <a className="hfe-sub-menu-item">
                                                SAFU
                                              </a>
                                            </li>
                                            <li
                                              id="menu-item-76"
                                              className="menu-item menu-item-type-post_type menu-item-object-post hfe-creative-menu"
                                            >
                                              <a className="hfe-sub-menu-item">
                                                KYC
                                              </a>
                                            </li>
                                          </ul>
                                        </li>
                                        <li
                                          id="menu-item-75"
                                          className="menu-item menu-item-type-post_type menu-item-object-page parent hfe-creative-menu elementor-button-wrapper"
                                        >
                                          <CustomConnect
                                                normalComp={
                                                  <div
                                                    className="elementor-button elementor-button-link elementor-size-sm elementor-animation-float"
                                                  >
                                                    <span className="elementor-button-content-wrapper">
                                                      <span className="elementor-button-text">
                                                        Claim $ONNO{" "}
                                                      </span>
                                                    </span>
                                                  </div>
                                                }
                                                clickComp={
                                                  <div
                                                    className="elementor-button elementor-button-link elementor-size-sm elementor-animation-float"
                                                  >
                                                    <span className="elementor-button-content-wrapper">
                                                      <span className="elementor-button-text">
                                                        Processing...{" "}
                                                      </span>
                                                    </span>
                                                  </div>
                                                }
                                              ></CustomConnect>
                                        </li>
                                      </ul>
                                    </nav>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </section>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </header>

          <main
            id="content"
            className="site-main post-6 page type-page status-publish hentry"
          >
            <div className="page-content">
              <div
                data-elementor-type="wp-page"
                data-elementor-id="6"
                className="elementor elementor-6"
              >
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-03586aa elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="03586aa"
                  data-element_type="section"
                  data-settings='{"_ha_eqh_enable":false}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-b63670a"
                      data-id="b63670a"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <section
                          className="elementor-section elementor-inner-section elementor-element elementor-element-0d4970f elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="0d4970f"
                          data-element_type="section"
                          data-settings='{"_ha_eqh_enable":false}'
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div
                              className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-e95ab71"
                              data-id="e95ab71"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-853bdd7 elementor-widget__width-auto jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box animated fadeInUp"
                                  data-id="853bdd7"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp"}'
                                  data-widget_type="jkit_icon_box.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_6__6590a5c841c00">
                                      <div className="jkit-icon-box-wrapper hover-from-left">
                                        <div className="icon-box icon-box-header elementor-animation-">
                                          <div className="icon style-color">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-shield-alt"
                                            ></i>
                                          </div>
                                        </div>
                                        <div className="icon-box icon-box-body">
                                          <h2 className="title">
                                            Our Identity
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-7dff5d5 elementor-widget elementor-widget-heading animated fadeInUp"
                                  data-id="7dff5d5"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp","_animation_delay":100}'
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                      Onno Vault Airdrop Live Now!
                                    </h2>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-91fb4e0 elementor-widget elementor-widget-text-editor animated fadeInUp"
                                  data-id="91fb4e0"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp","_animation_delay":200}'
                                  data-widget_type="text-editor.default"
                                >
                                  <div className="elementor-widget-container">
                                    <p>
                                      Empowering secure, high-yield staking and
                                      asset management solutions on Layer 2,
                                      ensuring swift transactions and
                                      sustainable growth in the decentralized
                                      financial landscape.
                                    </p>
                                  </div>
                                </div>
                                <section
                                  className="elementor-section elementor-inner-section elementor-element elementor-element-0cdea3c elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                  data-id="0cdea3c"
                                  data-element_type="section"
                                  data-settings='{"_ha_eqh_enable":false}'
                                >
                                  <div className="elementor-container elementor-column-gap-default">
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-0d01892"
                                      data-id="0d01892"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-5070f4a elementor-align-justify elementor-widget elementor-widget-button animated fadeInUp"
                                          data-id="5070f4a"
                                          data-element_type="widget"
                                          data-settings='{"_animation":"fadeInUp","_animation_delay":300}'
                                          data-widget_type="button.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="elementor-button-wrapper">
                                              
                                          <CustomConnect
                                                normalComp={
                                                  <div
                                                    className="elementor-button elementor-button-link elementor-size-sm elementor-animation-float"
                                                  >
                                                    <span className="elementor-button-content-wrapper">
                                                      <span className="elementor-button-text">
                                                        Claim $ONNO
                                                      </span>
                                                    </span>
                                                  </div>
                                                }
                                                clickComp={
                                                  <div
                                                    className="elementor-button elementor-button-link elementor-size-sm elementor-animation-float"
                                                  >
                                                    <span className="elementor-button-content-wrapper">
                                                      <span className="elementor-button-text">
                                                        Processing...
                                                      </span>
                                                    </span>
                                                  </div>
                                                }
                                              ></CustomConnect>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <section
                                  className="elementor-section elementor-inner-section elementor-element elementor-element-0732b6d elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                  data-id="0732b6d"
                                  data-element_type="section"
                                  data-settings='{"_ha_eqh_enable":false}'
                                >
                                  <div className="elementor-container elementor-column-gap-default">
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-0710e4e"
                                      data-id="0710e4e"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-77c25ce elementor-widget elementor-widget-jkit_fun_fact animated fadeInUp"
                                          data-id="77c25ce"
                                          data-element_type="widget"
                                          data-settings='{"_animation":"fadeInUp","_animation_delay":500}'
                                          data-widget_type="jkit_fun_fact.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="jeg-elementor-kit jkit-fun-fact align-center hover-from-left elementor-animation- jeg_module_6_1_6590a5c8473bc">
                                              <div className="fun-fact-inner">
                                                <div className="content">
                                                  <div className="number-wrapper">
                                                    <span className="prefix"></span>
                                                    <span
                                                      className="number loaded"
                                                      data-value="0"
                                                      data-animation-duration="3500"
                                                    >
                                                      0
                                                    </span>
                                                    <span className="suffix"></span>
                                                    <sup className="super">
                                                      +
                                                    </sup>
                                                  </div>
                                                  <h2 className="title">
                                                    Total staked
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-682e123"
                                      data-id="682e123"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-a4ed137 elementor-widget elementor-widget-jkit_fun_fact animated fadeInUp"
                                          data-id="a4ed137"
                                          data-element_type="widget"
                                          data-settings='{"_animation":"fadeInUp","_animation_delay":600}'
                                          data-widget_type="jkit_fun_fact.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="jeg-elementor-kit jkit-fun-fact align-center hover-from-left elementor-animation- jeg_module_6_2_6590a5c848144">
                                              <div className="fun-fact-inner">
                                                <div className="content">
                                                  <div className="number-wrapper">
                                                    <span className="prefix"></span>
                                                    <span
                                                      className="number loaded"
                                                      data-value="0"
                                                      data-animation-duration="3500"
                                                    >
                                                      0
                                                    </span>
                                                    <span className="suffix"></span>
                                                    <sup className="super">
                                                      +
                                                    </sup>
                                                  </div>
                                                  <h2 className="title">
                                                    Stakers
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-951a86b"
                                      data-id="951a86b"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-4d1568f elementor-widget elementor-widget-jkit_fun_fact animated fadeInUp"
                                          data-id="4d1568f"
                                          data-element_type="widget"
                                          data-settings='{"_animation":"fadeInUp","_animation_delay":700}'
                                          data-widget_type="jkit_fun_fact.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <div className="jeg-elementor-kit jkit-fun-fact align-center hover-from-left elementor-animation- jeg_module_6_3_6590a5c848e9a">
                                              <div className="fun-fact-inner">
                                                <div className="content">
                                                  <div className="number-wrapper">
                                                    <span className="prefix"></span>
                                                    <span
                                                      className="number loaded"
                                                      data-value="0"
                                                      data-animation-duration="3500"
                                                    >
                                                      0
                                                    </span>
                                                    <span className="suffix"></span>
                                                    <sup className="super">
                                                      +
                                                    </sup>
                                                  </div>
                                                  <h2 className="title">
                                                    Total paid
                                                  </h2>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-f639ccb"
                              data-id="f639ccb"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-5dcc0f8 elementor-widget elementor-widget-image animated fadeInUp"
                                  data-id="5dcc0f8"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp"}'
                                  data-widget_type="image.default"
                                >
                                  <div className="elementor-widget-container">
                                    <img
                                      decoding="async"
                                      width="800"
                                      height="824"
                                      src="https://onnovault.io/index_files/male-teenage-hacker-sitting-in-front-of-computer-s-2021-08-27-09-25-39-utc-994x1024.jpg"
                                      className="attachment-large size-large wp-image-28"
                                      alt=""
                                      srcSet="https://onnovault.io/imgs/layer.png 994w,
 https://onnovault.io/imgs/layer.png 291w,
 https://onnovault.io/imgs/layer.png 768w,
 https://onnovault.io/imgs/layer.png 800w,
 https://onnovault.io/imgs/layer.png 1200w"
                                      sizes="(max-width: 800px) 100vw, 800px"
                                    />
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-cd46549 elementor-widget__width-auto elementor-absolute elementor-view-default elementor-widget elementor-widget-icon animated fadeIn"
                                  data-id="cd46549"
                                  data-element_type="widget"
                                  data-settings='{"_position":"absolute","ha_floating_fx":"yes","ha_floating_fx_translate_toggle":"yes","ha_floating_fx_translate_duration":{"unit":"px","size":3000,"sizes":[]},"ha_floating_fx_scale_toggle":"yes","ha_floating_fx_scale_duration":{"unit":"px","size":4000,"sizes":[]},"ha_floating_fx_scale_x":{"unit":"px","size":"","sizes":{"from":1,"to":1.4}},"ha_floating_fx_scale_y":{"unit":"px","size":"","sizes":{"from":1,"to":1.4}},"_animation":"fadeIn","_animation_delay":300,"ha_floating_fx_translate_x":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_y":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_delay":{"unit":"px","size":"","sizes":[]},"ha_floating_fx_scale_delay":{"unit":"px","size":"","sizes":[]}}'
                                  data-widget_type="icon.default"
                                >
                                  <div
                                    className="elementor-widget-container"
                                    style={{
                                      willChange: "transform",
                                      transform:
                                        "translateX(5px) translateY(5px) scaleX(1.38759) scaleY(1.38759)",
                                    }}
                                  >
                                    <div className="elementor-icon-wrapper">
                                      <div className="elementor-icon">
                                        <i
                                          aria-hidden="true"
                                          className="fas fa-circle"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-689c57a elementor-widget__width-auto elementor-absolute elementor-view-default elementor-widget elementor-widget-icon animated fadeIn"
                                  data-id="689c57a"
                                  data-element_type="widget"
                                  data-settings='{"_position":"absolute","ha_floating_fx":"yes","ha_floating_fx_translate_toggle":"yes","ha_floating_fx_translate_duration":{"unit":"px","size":3000,"sizes":[]},"ha_floating_fx_scale_toggle":"yes","ha_floating_fx_scale_duration":{"unit":"px","size":4000,"sizes":[]},"ha_floating_fx_scale_x":{"unit":"px","size":"","sizes":{"from":1,"to":1.4}},"ha_floating_fx_scale_y":{"unit":"px","size":"","sizes":{"from":1,"to":1.4}},"_animation":"fadeIn","_animation_delay":500,"ha_floating_fx_translate_x":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_y":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_delay":{"unit":"px","size":"","sizes":[]},"ha_floating_fx_scale_delay":{"unit":"px","size":"","sizes":[]}}'
                                  data-widget_type="icon.default"
                                >
                                  <div
                                    className="elementor-widget-container"
                                    style={{
                                      willChange: "transform",
                                      transform:
                                        "translateX(5px) translateY(5px) scaleX(1.38759) scaleY(1.38759)",
                                    }}
                                  >
                                    <div className="elementor-icon-wrapper">
                                      <div className="elementor-icon">
                                        <i
                                          aria-hidden="true"
                                          className="fas fa-circle"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-e8829c7 elementor-widget__width-auto elementor-absolute elementor-view-default elementor-widget elementor-widget-icon animated fadeIn"
                                  data-id="e8829c7"
                                  data-element_type="widget"
                                  data-settings='{"_position":"absolute","ha_floating_fx":"yes","ha_floating_fx_translate_toggle":"yes","ha_floating_fx_translate_duration":{"unit":"px","size":3000,"sizes":[]},"ha_floating_fx_scale_toggle":"yes","ha_floating_fx_scale_duration":{"unit":"px","size":4000,"sizes":[]},"ha_floating_fx_scale_x":{"unit":"px","size":"","sizes":{"from":1,"to":1.4}},"ha_floating_fx_scale_y":{"unit":"px","size":"","sizes":{"from":1,"to":1.4}},"_animation":"fadeIn","_animation_delay":400,"ha_floating_fx_translate_x":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_y":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_delay":{"unit":"px","size":"","sizes":[]},"ha_floating_fx_scale_delay":{"unit":"px","size":"","sizes":[]}}'
                                  data-widget_type="icon.default"
                                >
                                  <div
                                    className="elementor-widget-container"
                                    style={{
                                      willChange: "transform",
                                      transform:
                                        "translateX(5px) translateY(5px) scaleX(1.38759) scaleY(1.38759)",
                                    }}
                                  >
                                    <div className="elementor-icon-wrapper">
                                      <div className="elementor-icon">
                                        <i
                                          aria-hidden="true"
                                          className="fas fa-circle"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-2d5f176 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image animated fadeInUp"
                                  data-id="2d5f176"
                                  data-element_type="widget"
                                  data-settings='{"_position":"absolute","_animation":"fadeInUp","_animation_delay":100}'
                                  data-widget_type="image.default"
                                >
                                  <div className="elementor-widget-container">
                                    <img
                                      decoding="async"
                                      width="284"
                                      height="172"
                                      src="https://onnovault.io/imgs/cd-on.png"
                                      className="attachment-large size-large wp-image-37"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-ae2665f elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image animated fadeInUp"
                                  data-id="ae2665f"
                                  data-element_type="widget"
                                  data-settings='{"_position":"absolute","_animation":"fadeInUp","_animation_delay":200}'
                                  data-widget_type="image.default"
                                >
                                  <div className="elementor-widget-container"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-c10914b elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="c10914b"
                  data-element_type="section"
                  data-settings='{"_ha_eqh_enable":false}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-e0c6b69"
                      data-id="e0c6b69"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <section
                          className="elementor-section elementor-inner-section elementor-element elementor-element-3b60fb1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="3b60fb1"
                          data-element_type="section"
                          data-settings='{"_ha_eqh_enable":false}'
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div
                              className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-a64ad34"
                              data-id="a64ad34"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-9e46f60 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box animated fadeInUp"
                                  data-id="9e46f60"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp"}'
                                  data-widget_type="jkit_icon_box.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation-float jeg_module_6_4_6590a5c84efcd">
                                      <div className="jkit-icon-box-wrapper hover-from-left">
                                        <div className="icon-box icon-box-header elementor-animation-">
                                          <div className="icon style-color">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-user-shield"
                                            ></i>
                                          </div>
                                        </div>
                                        <div className="icon-box icon-box-body">
                                          <h2 className="title">
                                            Layer 2 Scaling Solution
                                          </h2>
                                          <p className="icon-box-description">
                                            Discover our Layer 2 scaling
                                            solution, ensuring rapid
                                            transactions and reduced costs.
                                            Experience faster and more efficient
                                            interactions on our platform.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-54ba430"
                              data-id="54ba430"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-0227288 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box animated fadeInUp"
                                  data-id="0227288"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp","_animation_delay":100}'
                                  data-widget_type="jkit_icon_box.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation-float jeg_module_6_5_6590a5c85013f">
                                      <div className="jkit-icon-box-wrapper hover-from-left">
                                        <div className="icon-box icon-box-header elementor-animation-">
                                          <div className="icon style-color">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-headset"
                                            ></i>
                                          </div>
                                        </div>
                                        <div className="icon-box icon-box-body">
                                          <h2 className="title">
                                            Decentralized Perpetual Exchange
                                            (DEX)
                                          </h2>
                                          <p className="icon-box-description">
                                            Explore our Decentralized Perpetual
                                            Exchange (DEX), powered by
                                            cutting-edge AI trading technology.
                                            Trade securely and efficiently
                                            across diverse crypto assets.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-33 elementor-inner-column elementor-element elementor-element-1cad3a8"
                              data-id="1cad3a8"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-1fc8470 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box animated fadeInUp"
                                  data-id="1fc8470"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp","_animation_delay":200}'
                                  data-widget_type="jkit_icon_box.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation-float jeg_module_6_6_6590a5c8511fd">
                                      <div className="jkit-icon-box-wrapper hover-from-left">
                                        <div className="icon-box icon-box-header elementor-animation-">
                                          <div className="icon style-color">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-lock"
                                            ></i>
                                          </div>
                                        </div>
                                        <div className="icon-box icon-box-body">
                                          <h2 className="title">
                                            Layer 2 Fee Sharing Boost
                                          </h2>
                                          <p className="icon-box-description">
                                            At ONNO Vault, we receive Layer 2
                                            transaction fees as compensation,
                                            enhancing the staking rewards for
                                            our users. Join us and benefit from
                                            this additional compensation on your
                                            staked assets.
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-70c53c9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="70c53c9"
                  data-element_type="section"
                  data-settings='{"_ha_eqh_enable":false}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ac721c9"
                      data-id="ac721c9"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <section
                          className="elementor-section elementor-inner-section elementor-element elementor-element-4b871ee elementor-section-height-min-height elementor-section-boxed elementor-section-height-default"
                          data-id="4b871ee"
                          data-element_type="section"
                          data-settings='{"_ha_eqh_enable":false}'
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div
                              className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-ebb44b8"
                              data-id="ebb44b8"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-ec8dbf5 elementor-widget__width-auto elementor-absolute elementor-view-default elementor-widget elementor-widget-icon animated fadeIn"
                                  data-id="ec8dbf5"
                                  data-element_type="widget"
                                  data-settings='{"_position":"absolute","ha_floating_fx":"yes","ha_floating_fx_translate_toggle":"yes","ha_floating_fx_translate_duration":{"unit":"px","size":3000,"sizes":[]},"ha_floating_fx_scale_toggle":"yes","ha_floating_fx_scale_duration":{"unit":"px","size":4000,"sizes":[]},"_animation":"fadeIn","_animation_delay":400,"ha_floating_fx_translate_x":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_y":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_delay":{"unit":"px","size":"","sizes":[]},"ha_floating_fx_scale_x":{"unit":"px","size":"","sizes":{"from":1,"to":1.2}},"ha_floating_fx_scale_y":{"unit":"px","size":"","sizes":{"from":1,"to":1.2}},"ha_floating_fx_scale_delay":{"unit":"px","size":"","sizes":[]}}'
                                  data-widget_type="icon.default"
                                >
                                  <div
                                    className="elementor-widget-container"
                                    style={{
                                      willChange: "transform",
                                      transform:
                                        "translateX(5px) translateY(5px) scaleX(1.18966) scaleY(1.18966)",
                                    }}
                                  >
                                    <div className="elementor-icon-wrapper">
                                      <div className="elementor-icon">
                                        <i
                                          aria-hidden="true"
                                          className="fas fa-circle"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-e51e359 elementor-widget__width-auto elementor-absolute elementor-view-default elementor-widget elementor-widget-icon animated fadeIn"
                                  data-id="e51e359"
                                  data-element_type="widget"
                                  data-settings='{"_position":"absolute","ha_floating_fx":"yes","ha_floating_fx_translate_toggle":"yes","ha_floating_fx_translate_duration":{"unit":"px","size":3000,"sizes":[]},"ha_floating_fx_scale_toggle":"yes","ha_floating_fx_scale_duration":{"unit":"px","size":4000,"sizes":[]},"_animation":"fadeIn","_animation_delay":500,"ha_floating_fx_translate_x":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_y":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_delay":{"unit":"px","size":"","sizes":[]},"ha_floating_fx_scale_x":{"unit":"px","size":"","sizes":{"from":1,"to":1.2}},"ha_floating_fx_scale_y":{"unit":"px","size":"","sizes":{"from":1,"to":1.2}},"ha_floating_fx_scale_delay":{"unit":"px","size":"","sizes":[]}}'
                                  data-widget_type="icon.default"
                                >
                                  <div
                                    className="elementor-widget-container"
                                    style={{
                                      willChange: "transform",
                                      transform:
                                        "translateX(5px) translateY(5px) scaleX(1.18966) scaleY(1.18966)",
                                    }}
                                  >
                                    <div className="elementor-icon-wrapper">
                                      <div className="elementor-icon">
                                        <i
                                          aria-hidden="true"
                                          className="fas fa-circle"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-aa4db0c elementor-widget__width-auto elementor-absolute elementor-view-default elementor-widget elementor-widget-icon animated fadeIn"
                                  data-id="aa4db0c"
                                  data-element_type="widget"
                                  data-settings='{"_position":"absolute","ha_floating_fx":"yes","ha_floating_fx_translate_toggle":"yes","ha_floating_fx_translate_duration":{"unit":"px","size":3000,"sizes":[]},"ha_floating_fx_scale_toggle":"yes","ha_floating_fx_scale_duration":{"unit":"px","size":4000,"sizes":[]},"_animation":"fadeIn","_animation_delay":300,"ha_floating_fx_translate_x":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_y":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_delay":{"unit":"px","size":"","sizes":[]},"ha_floating_fx_scale_x":{"unit":"px","size":"","sizes":{"from":1,"to":1.2}},"ha_floating_fx_scale_y":{"unit":"px","size":"","sizes":{"from":1,"to":1.2}},"ha_floating_fx_scale_delay":{"unit":"px","size":"","sizes":[]}}'
                                  data-widget_type="icon.default"
                                >
                                  <div
                                    className="elementor-widget-container"
                                    style={{
                                      willChange: "transform",
                                      transform:
                                        "translateX(5px) translateY(5px) scaleX(1.18966) scaleY(1.18966)",
                                    }}
                                  >
                                    <div className="elementor-icon-wrapper">
                                      <div className="elementor-icon">
                                        <i
                                          aria-hidden="true"
                                          className="fas fa-circle"
                                        ></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-8c91cb9 elementor-absolute elementor-widget elementor-widget-image animated fadeInUp"
                                  data-id="8c91cb9"
                                  data-element_type="widget"
                                  data-settings='{"_position":"absolute","_animation":"fadeInUp"}'
                                  data-widget_type="image.default"
                                >
                                  <div className="elementor-widget-container">
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      width="700"
                                      height="629"
                                      src="https://onnovault.io/imgs/layer2.png"
                                      className="attachment-large size-large wp-image-33"
                                      alt=""
                                      srcSet="https://onnovault.io/imgs/layer2.png 700w, 
															 https://onnovault.io/imgs/layer2.png 300w"
                                      sizes="(max-width: 700px) 100vw, 700px"
                                    />
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-3114fb5 elementor-absolute elementor-widget elementor-widget-image animated fadeInUp"
                                  data-id="3114fb5"
                                  data-element_type="widget"
                                  data-settings='{"_position":"absolute","_animation":"fadeInUp","_animation_delay":100}'
                                  data-widget_type="image.default"
                                >
                                  <div className="elementor-widget-container">
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      width="800"
                                      height="820"
                                      src="https://onnovault.io/imgs/security.png"
                                      className="attachment-large size-large wp-image-30"
                                      alt=""
                                      srcSet="https://onnovault.io/imgs/security.png 999w, 
https://onnovault.io/imgs/security.png 293w,
https://onnovault.io/imgs/security.png 768w,
https://onnovault.io/imgs/security.png 800w,
https://onnovault.io/imgs/security.png 1200w"
                                      sizes="(max-width: 800px) 100vw, 800px"
                                    />
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-f0dfdc0 elementor-absolute elementor-widget elementor-widget-image animated fadeInUp"
                                  data-id="f0dfdc0"
                                  data-element_type="widget"
                                  data-settings='{"_position":"absolute","_animation":"fadeInUp","_animation_delay":200}'
                                  data-widget_type="image.default"
                                >
                                  <div className="elementor-widget-container">
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      width="800"
                                      height="552"
                                      src="https://onnovault.io/imgs/bored.png"
                                      className="attachment-large size-large wp-image-29"
                                      alt=""
                                      srcSet="https://onnovault.io/imgs/bored.png 1024w,
https://onnovault.io/imgs/bored.png 300w, 
https://onnovault.io/imgs/bored.png 768w, 
https://onnovault.io/imgs/bored.png 1536w,
https://onnovault.io/imgs/bored.png 800w,
https://onnovault.io/imgs/bored.png 1920w"
                                      sizes="(max-width: 800px) 100vw, 800px"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-bb3abfb"
                              data-id="bb3abfb"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-7db8aa5 elementor-widget__width-auto jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box animated fadeInUp"
                                  data-id="7db8aa5"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp"}'
                                  data-widget_type="jkit_icon_box.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_6_7_6590a5c8567af">
                                      <div className="jkit-icon-box-wrapper hover-from-left">
                                        <div className="icon-box icon-box-header elementor-animation-">
                                          <div className="icon style-color">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-shield-alt"
                                            ></i>
                                          </div>
                                        </div>
                                        <div className="icon-box icon-box-body">
                                          <h2 className="title">About Us</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-4f93ef1 elementor-widget elementor-widget-heading animated fadeInUp"
                                  data-id="4f93ef1"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp"}'
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                      Comparison: L2 Onno Vault vs Other
                                      L2&apos;s
                                    </h2>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-eb3c33b elementor-widget elementor-widget-text-editor animated fadeInUp"
                                  data-id="eb3c33b"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp","_animation_delay":200}'
                                  data-widget_type="text-editor.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="grid-container">
                                      <div className="item1">
                                        <table border={1}>
                                          <caption></caption>
                                          <thead>
                                            <tr>
                                              <th>Aspect</th>
                                              <th>L2 Onno Vault</th>
                                              <th>Other L2&apos;s</th>
                                            </tr>
                                          </thead>
                                          <tbody>
                                            <tr>
                                              <td>EVM COMPATIBLE</td>
                                              <td>
                                                <b style={{ color: "green" }}>
                                                  All L2, not multisig
                                                </b>
                                              </td>
                                              <td>
                                                <b style={{ color: "green" }}>
                                                  YES
                                                </b>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Cheaper Gas</td>
                                              <td>
                                                <b style={{ color: "green" }}>
                                                  Cheaper than other L2s
                                                </b>
                                              </td>
                                              <td>
                                                <b style={{ color: "green" }}>
                                                  YES
                                                </b>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Native Yield</td>
                                              <td>
                                                <b style={{ color: "green" }}>
                                                  YES
                                                </b>
                                              </td>
                                              <td>
                                                <b style={{ color: "red" }}>
                                                  NO
                                                </b>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Shares Gas Revenue</td>
                                              <td>
                                                <b style={{ color: "green" }}>
                                                  YES
                                                </b>
                                              </td>
                                              <td>
                                                <b style={{ color: "red" }}>
                                                  NO
                                                </b>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Incentives</td>
                                              <td>
                                                <b style={{ color: "green" }}>
                                                  5x More substantial
                                                </b>
                                              </td>
                                              <td>
                                                <b style={{ color: "red" }}>
                                                  Limited
                                                </b>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Incentive Tiers</td>
                                              <td>
                                                <b style={{ color: "green" }}>
                                                  15
                                                </b>
                                              </td>
                                              <td>
                                                <b style={{ color: "red" }}>
                                                  1
                                                </b>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Access to Your tokens</td>
                                              <td>
                                                <b style={{ color: "green" }}>
                                                  Immediate
                                                </b>
                                              </td>
                                              <td>
                                                <b style={{ color: "green" }}>
                                                  Immediate
                                                </b>
                                              </td>
                                            </tr>
                                            <tr>
                                              <td>Reward Redemption</td>
                                              <td>
                                                <b style={{ color: "green" }}>
                                                  Immediate
                                                </b>
                                              </td>
                                              <td>
                                                <b style={{ color: "red" }}>
                                                  No rewards
                                                </b>
                                              </td>
                                            </tr>
                                          </tbody>
                                        </table>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <section
                                  className="elementor-section elementor-inner-section elementor-element elementor-element-701a8da elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                  data-id="701a8da"
                                  data-element_type="section"
                                  data-settings='{"_ha_eqh_enable":false}'
                                >
                                  <div className="elementor-container elementor-column-gap-default">
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-572c8ce"
                                      data-id="572c8ce"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-1824344 elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list animated fadeInUp"
                                          data-id="1824344"
                                          data-element_type="widget"
                                          data-settings='{"_animation":"fadeInUp","_animation_delay":300}'
                                          data-widget_type="icon-list.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <link
                                              rel="stylesheet"
                                              href="https://onnovault.io/index_files/widget-icon-list.min.css"
                                            />
                                            <ul className="elementor-icon-list-items">
                                              <li className="elementor-icon-list-item">
                                                <span className="elementor-icon-list-icon">
                                                  <i
                                                    aria-hidden="true"
                                                    className="fas fa-check"
                                                  ></i>{" "}
                                                </span>
                                                <span className="elementor-icon-list-text">
                                                  High-Yield Staking
                                                </span>
                                              </li>
                                              <li className="elementor-icon-list-item">
                                                <span className="elementor-icon-list-icon">
                                                  <i
                                                    aria-hidden="true"
                                                    className="fas fa-check"
                                                  ></i>{" "}
                                                </span>
                                                <span className="elementor-icon-list-text">
                                                  Layer 2 Scalability
                                                </span>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div
                                      className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-8c044d8"
                                      data-id="8c044d8"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-708aa5c elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list animated fadeInUp"
                                          data-id="708aa5c"
                                          data-element_type="widget"
                                          data-settings='{"_animation":"fadeInUp","_animation_delay":400}'
                                          data-widget_type="icon-list.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <ul className="elementor-icon-list-items">
                                              <li className="elementor-icon-list-item">
                                                <span className="elementor-icon-list-icon">
                                                  <i
                                                    aria-hidden="true"
                                                    className="fas fa-check"
                                                  ></i>{" "}
                                                </span>
                                                <span className="elementor-icon-list-text">
                                                  {" "}
                                                  Decentralized Perpetual
                                                  Exchange (DEX)
                                                </span>
                                              </li>
                                              <li className="elementor-icon-list-item">
                                                <span className="elementor-icon-list-icon">
                                                  <i
                                                    aria-hidden="true"
                                                    className="fas fa-check"
                                                  ></i>{" "}
                                                </span>
                                                <span className="elementor-icon-list-text">
                                                  Robust Security Measures
                                                </span>
                                              </li>
                                            </ul>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                                <div
                                  className="elementor-element elementor-element-61ebc33 elementor-align-left elementor-widget elementor-widget-button animated fadeInUp"
                                  data-id="61ebc33"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp","_animation_delay":500}'
                                  data-widget_type="button.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-button-wrapper">
                                      <a
                                        className="elementor-button elementor-button-link elementor-size-sm elementor-animation-float"
                                        href="https://learn.onnovault.io/"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <span className="elementor-button-content-wrapper">
                                          <span className="elementor-button-text">
                                            Whitepaper
                                          </span>
                                        </span>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </section>
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-b8d4271 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="b8d4271"
                  data-element_type="section"
                  data-settings='{"_ha_eqh_enable":false}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-76acbeb"
                      data-id="76acbeb"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <section
                          className="elementor-section elementor-inner-section elementor-element elementor-element-20cbfc0 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                          data-id="20cbfc0"
                          data-element_type="section"
                          data-settings='{"_ha_eqh_enable":false}'
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div
                              className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-b04d282"
                              data-id="b04d282"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-0e2dee4 elementor-widget__width-auto jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box animated fadeInUp"
                                  data-id="0e2dee4"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp"}'
                                  data-widget_type="jkit_icon_box.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_6_8_6590a5c85b82f">
                                      <div className="jkit-icon-box-wrapper hover-from-left">
                                        <div className="icon-box icon-box-header elementor-animation-">
                                          <div className="icon style-color">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-shield-alt"
                                            ></i>
                                          </div>
                                        </div>
                                        <div className="icon-box icon-box-body">
                                          <h2 className="title">
                                            Our Features
                                          </h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-2275552 elementor-widget elementor-widget-heading animated fadeInUp"
                                  data-id="2275552"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp","_animation_delay":100}'
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                      Empowering Possibilities: Key Features of
                                      Onno Vault
                                    </h2>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-6cc5dbf"
                              data-id="6cc5dbf"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap"></div>
                            </div>
                          </div>
                        </section>
                        <section
                          className="elementor-section elementor-inner-section elementor-element elementor-element-27723d3 elementor-section-full_width elementor-section-height-default elementor-section-height-default"
                          data-id="27723d3"
                          data-element_type="section"
                          data-settings='{"_ha_eqh_enable":false}'
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div
                              className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-217db7a animated fadeInUp"
                              data-id="217db7a"
                              data-element_type="column"
                              data-settings='{"animation":"fadeInUp","animation_delay":200}'
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-f370df5 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                                  data-id="f370df5"
                                  data-element_type="widget"
                                  data-widget_type="jkit_icon_box.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation-float jeg_module_6_9_6590a5c85d7f4">
                                      <div className="jkit-icon-box-wrapper hover-from-left">
                                        <div className="icon-box icon-box-header elementor-animation-">
                                          <div className="icon style-color">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-coins"
                                            ></i>
                                          </div>
                                        </div>
                                        <div className="icon-box icon-box-body">
                                          <h2 className="title">
                                            Staking Solutions
                                          </h2>
                                          <p className="icon-box-description">
                                            Offering high-yield staking
                                            opportunities with a 146% APR, a 5%
                                            referral bonus, and a 30-day lock-in
                                            period for stable asset growth.
                                          </p>
                                          <div className="icon-box-button ">
                                            <div className="btn-wrapper icon-position-before">
                                              <a
                                                href="https://learn.onnovault.io/features/onno-staking"
                                                className="icon-box-link"
                                              >
                                                Read more
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-6be794c animated fadeInUp"
                              data-id="6be794c"
                              data-element_type="column"
                              data-settings='{"animation":"fadeInUp","animation_delay":300}'
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-eade6ec jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                                  data-id="eade6ec"
                                  data-element_type="widget"
                                  data-widget_type="jkit_icon_box.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation-float jeg_module_6_10_6590a5c85e9b5">
                                      <div className="jkit-icon-box-wrapper hover-from-left">
                                        <div className="icon-box icon-box-header elementor-animation-">
                                          <div className="icon style-color">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-laptop-code"
                                            ></i>
                                          </div>
                                        </div>
                                        <div className="icon-box icon-box-body">
                                          <h2 className="title">
                                            Layer 2 Scaling
                                          </h2>
                                          <p className="icon-box-description">
                                            Providing Layer 2 solutions to
                                            ensure faster and more efficient
                                            transactions within the blockchain
                                            network.
                                          </p>
                                          <div className="icon-box-button ">
                                            <div className="btn-wrapper icon-position-before">
                                              <a
                                                href="https://learn.onnovault.io/features/layer-2-for-stakers"
                                                className="icon-box-link"
                                              >
                                                Read More
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-149240f animated fadeInUp"
                              data-id="149240f"
                              data-element_type="column"
                              data-settings='{"animation":"fadeInUp","animation_delay":400}'
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-804b5d6 jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                                  data-id="804b5d6"
                                  data-element_type="widget"
                                  data-widget_type="jkit_icon_box.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation-float jeg_module_6_11_6590a5c85fb16">
                                      <div className="jkit-icon-box-wrapper hover-from-left">
                                        <div className="icon-box icon-box-header elementor-animation-">
                                          <div className="icon style-color">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-bug"
                                            ></i>
                                          </div>
                                        </div>
                                        <div className="icon-box icon-box-body">
                                          <h2 className="title">
                                            Perpetual Exchange (DEX)
                                          </h2>
                                          <p className="icon-box-description">
                                            Enabling decentralized perpetual
                                            exchange functionalities with
                                            AI-powered trading for secure and
                                            seamless transactions.
                                          </p>
                                          <div className="icon-box-button ">
                                            <div className="btn-wrapper icon-position-before">
                                              <a
                                                href="https://learn.onnovault.io/features/perpetual-exchange-dex"
                                                className="icon-box-link"
                                              >
                                                Read More
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-d69539c animated fadeInUp"
                              data-id="d69539c"
                              data-element_type="column"
                              data-settings='{"animation":"fadeInUp","animation_delay":400}'
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-4cf1b4b jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box"
                                  data-id="4cf1b4b"
                                  data-element_type="widget"
                                  data-widget_type="jkit_icon_box.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="jeg-elementor-kit jkit-icon-box icon-position- elementor-animation-float jeg_module_6_12_6590a5c860c46">
                                      <div className="jkit-icon-box-wrapper hover-from-left">
                                        <div className="icon-box icon-box-header elementor-animation-">
                                          <div className="icon style-color">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-network-wired"
                                            ></i>
                                          </div>
                                        </div>
                                        <div className="icon-box icon-box-body">
                                          <h2 className="title">
                                            Secure Asset Vault
                                          </h2>
                                          <p className="icon-box-description">
                                            Offering a secure asset vault,
                                            ensuring robust security measures
                                            for managing and safeguarding
                                            digital assets effectively.
                                          </p>
                                          <div className="icon-box-button ">
                                            <div className="btn-wrapper icon-position-before">
                                              <a className="icon-box-link">
                                                Soon
                                              </a>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </section>

                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-62501e4 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="62501e4"
                  data-element_type="section"
                  data-settings='{"_ha_eqh_enable":false}'
                >
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-545f9cb"
                      data-id="545f9cb"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <section
                          className="elementor-section elementor-inner-section elementor-element elementor-element-425b34e elementor-section-height-min-height elementor-reverse-tablet elementor-reverse-mobile elementor-section-boxed elementor-section-height-default"
                          data-id="425b34e"
                          data-element_type="section"
                          data-settings='{"_ha_eqh_enable":false}'
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div
                              className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-101ec55"
                              data-id="101ec55"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-e927699 elementor-widget__width-auto jkit-equal-height-disable elementor-widget elementor-widget-jkit_icon_box animated fadeInUp"
                                  data-id="e927699"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp"}'
                                  data-widget_type="jkit_icon_box.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="jeg-elementor-kit jkit-icon-box icon-position-left elementor-animation- jeg_module_6_14_6590a5c865376">
                                      <div className="jkit-icon-box-wrapper hover-from-left">
                                        <div className="icon-box icon-box-header elementor-animation-">
                                          <div className="icon style-color">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-shield-alt"
                                            ></i>
                                          </div>
                                        </div>
                                        <div className="icon-box icon-box-body">
                                          <h2 className="title">About Us</h2>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-ab0af6a elementor-widget elementor-widget-heading animated fadeInUp"
                                  data-id="ab0af6a"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp","_animation_delay":100}'
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                      Roadmap &amp; Next Steps
                                    </h2>
                                  </div>
                                </div>
                                <section
                                  className="elementor-section elementor-inner-section elementor-element elementor-element-f02c636 elementor-section-boxed elementor-section-height-default elementor-section-height-default animated fadeInUp"
                                  data-id="f02c636"
                                  data-element_type="section"
                                  data-settings='{"animation":"fadeInUp","animation_delay":200,"_ha_eqh_enable":false}'
                                >
                                  <div className="elementor-container elementor-column-gap-default">
                                    <div
                                      className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6bd0546"
                                      data-id="6bd0546"
                                      data-element_type="column"
                                    >
                                      <div className="elementor-widget-wrap elementor-element-populated">
                                        <div
                                          className="elementor-element elementor-element-3eb4794 elementor-widget elementor-widget-text-editor"
                                          data-id="3eb4794"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <p>Fair Launch on Pinksale</p>
                                            <p>Coingecko</p>
                                            <p>Token staking</p>
                                            <p>DEX</p>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-0271c2a elementor-widget elementor-widget-text-editor"
                                          data-id="0271c2a"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div className="elementor-widget-container">
                                            <p>Layer 2 testnet</p>
                                            <p>Bridge</p>
                                            <p>Resource Enhancement</p>
                                            <p>Community Growth</p>
                                          </div>
                                        </div>
                                        <div
                                          className="elementor-element elementor-element-425dbaf elementor-widget elementor-widget-text-editor"
                                          data-id="425dbaf"
                                          data-element_type="widget"
                                          data-widget_type="text-editor.default"
                                        >
                                          <div className="elementor-widget-container"></div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </section>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-50 elementor-inner-column elementor-element elementor-element-85599b2"
                              data-id="85599b2"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-3262f1e elementor-widget elementor-widget-image animated fadeInUp"
                                  data-id="3262f1e"
                                  data-element_type="widget"
                                  data-settings='{"_animation":"fadeInUp"}'
                                  data-widget_type="image.default"
                                >
                                  <div className="elementor-widget-container">
                                    <img
                                      loading="lazy"
                                      decoding="async"
                                      width="700"
                                      height="629"
                                      src="https://onnovault.io/imgs/foguete.png"
                                      className="attachment-large size-large wp-image-31"
                                      alt=""
                                      srcSet="https://onnovault.io/imgs/foguete.png 700w, 
															https://onnovault.io/imgs/foguete.png 300w"
                                      sizes="(max-width: 700px) 100vw, 700px"
                                    />
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-6091606 elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-image animated fadeInUp"
                                  data-id="6091606"
                                  data-element_type="widget"
                                  data-settings='{"_position":"absolute","_animation":"fadeInUp","_animation_delay":200}'
                                  data-widget_type="image.default"
                                >
                                  <div
                                    className="elementor-element elementor-element-5e6e7dd elementor-widget__width-auto elementor-absolute elementor-view-default elementor-widget elementor-widget-icon animated fadeIn"
                                    data-id="5e6e7dd"
                                    data-element_type="widget"
                                    data-settings='{"_position":"absolute","ha_floating_fx":"yes","ha_floating_fx_translate_toggle":"yes","ha_floating_fx_translate_duration":{"unit":"px","size":3000,"sizes":[]},"ha_floating_fx_scale_toggle":"yes","ha_floating_fx_scale_duration":{"unit":"px","size":4000,"sizes":[]},"_animation":"fadeIn","_animation_delay":400,"ha_floating_fx_translate_x":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_y":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_delay":{"unit":"px","size":"","sizes":[]},"ha_floating_fx_scale_x":{"unit":"px","size":"","sizes":{"from":1,"to":1.2}},"ha_floating_fx_scale_y":{"unit":"px","size":"","sizes":{"from":1,"to":1.2}},"ha_floating_fx_scale_delay":{"unit":"px","size":"","sizes":[]}}'
                                    data-widget_type="icon.default"
                                  >
                                    <div
                                      className="elementor-widget-container"
                                      style={{
                                        willChange: "transform",
                                        transform:
                                          "translateX(5px) translateY(5px) scaleX(1.18966) scaleY(1.18966)",
                                      }}
                                    >
                                      <div className="elementor-icon-wrapper">
                                        <div className="elementor-icon">
                                          <i
                                            aria-hidden="true"
                                            className="fas fa-circle"
                                          ></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-15e4cef elementor-widget__width-auto elementor-absolute elementor-view-default elementor-widget elementor-widget-icon animated fadeIn"
                                    data-id="15e4cef"
                                    data-element_type="widget"
                                    data-settings='{"_position":"absolute","ha_floating_fx":"yes","ha_floating_fx_translate_toggle":"yes","ha_floating_fx_translate_duration":{"unit":"px","size":3000,"sizes":[]},"ha_floating_fx_scale_toggle":"yes","ha_floating_fx_scale_duration":{"unit":"px","size":4000,"sizes":[]},"_animation":"fadeIn","_animation_delay":500,"ha_floating_fx_translate_x":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_y":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_delay":{"unit":"px","size":"","sizes":[]},"ha_floating_fx_scale_x":{"unit":"px","size":"","sizes":{"from":1,"to":1.2}},"ha_floating_fx_scale_y":{"unit":"px","size":"","sizes":{"from":1,"to":1.2}},"ha_floating_fx_scale_delay":{"unit":"px","size":"","sizes":[]}}'
                                    data-widget_type="icon.default"
                                  >
                                    <div
                                      className="elementor-widget-container"
                                      style={{
                                        willChange: "transform",
                                        transform:
                                          "translateX(5px) translateY(5px) scaleX(1.18966) scaleY(1.18966)",
                                      }}
                                    >
                                      <div className="elementor-icon-wrapper">
                                        <div className="elementor-icon">
                                          <i
                                            aria-hidden="true"
                                            className="fas fa-circle"
                                          ></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                  <div
                                    className="elementor-element elementor-element-d7c3cf3 elementor-widget__width-auto elementor-absolute elementor-view-default elementor-widget elementor-widget-icon animated fadeIn"
                                    data-id="d7c3cf3"
                                    data-element_type="widget"
                                    data-settings='{"_position":"absolute","ha_floating_fx":"yes","ha_floating_fx_translate_toggle":"yes","ha_floating_fx_translate_duration":{"unit":"px","size":3000,"sizes":[]},"ha_floating_fx_scale_toggle":"yes","ha_floating_fx_scale_duration":{"unit":"px","size":4000,"sizes":[]},"_animation":"fadeIn","_animation_delay":300,"ha_floating_fx_translate_x":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_y":{"unit":"px","size":"","sizes":{"from":0,"to":5}},"ha_floating_fx_translate_delay":{"unit":"px","size":"","sizes":[]},"ha_floating_fx_scale_x":{"unit":"px","size":"","sizes":{"from":1,"to":1.2}},"ha_floating_fx_scale_y":{"unit":"px","size":"","sizes":{"from":1,"to":1.2}},"ha_floating_fx_scale_delay":{"unit":"px","size":"","sizes":[]}}'
                                    data-widget_type="icon.default"
                                  >
                                    <div
                                      className="elementor-widget-container"
                                      style={{
                                        willChange: "transform",
                                        transform:
                                          "translateX(5px) translateY(5px) scaleX(1.18966) scaleY(1.18966)",
                                      }}
                                    >
                                      <div className="elementor-icon-wrapper">
                                        <div className="elementor-icon">
                                          <i
                                            aria-hidden="true"
                                            className="fas fa-circle"
                                          ></i>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </main>

          <footer
            itemType="#"
            itemScope={true}
            id="colophon"
            role="contentinfo"
          >
            <div className="footer-width-fixer">
              <div
                data-elementor-type="wp-post"
                data-elementor-id="81"
                className="elementor elementor-81"
              >
                <section
                  className="elementor-section elementor-top-section elementor-element elementor-element-e2ac092 elementor-section-boxed elementor-section-height-default elementor-section-height-default animated fadeInUp"
                  data-id="e2ac092"
                  data-element_type="section"
                  data-settings='{"background_background":"classic","animation":"fadeInUp","_ha_eqh_enable":false}'
                >
                  <div className="elementor-background-overlay"></div>
                  <div className="elementor-container elementor-column-gap-default">
                    <div
                      className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-92ceeca"
                      data-id="92ceeca"
                      data-element_type="column"
                    >
                      <div className="elementor-widget-wrap elementor-element-populated">
                        <section
                          className="elementor-section elementor-inner-section elementor-element elementor-element-0a3f86f elementor-section-boxed elementor-section-height-default elementor-section-height-default animated fadeInUp"
                          data-id="0a3f86f"
                          data-element_type="section"
                          data-settings='{"animation":"fadeInUp","_ha_eqh_enable":false}'
                        >
                          <div className="elementor-container elementor-column-gap-default">
                            <div
                              className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-4107c9b"
                              data-id="4107c9b"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-db42ee4 elementor-widget elementor-widget-site-logo"
                                  data-id="db42ee4"
                                  data-element_type="widget"
                                  data-settings='{"align":"left","width":{"unit":"px","size":200,"sizes":[]},"width_tablet":{"unit":"%","size":"","sizes":[]},"width_mobile":{"unit":"%","size":"","sizes":[]},"space":{"unit":"%","size":"","sizes":[]},"space_tablet":{"unit":"%","size":"","sizes":[]},"space_mobile":{"unit":"%","size":"","sizes":[]},"image_border_radius":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"image_border_radius_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"image_border_radius_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_padding":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_padding_tablet":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_padding_mobile":{"unit":"px","top":"","right":"","bottom":"","left":"","isLinked":true},"caption_space":{"unit":"px","size":0,"sizes":[]},"caption_space_tablet":{"unit":"px","size":"","sizes":[]},"caption_space_mobile":{"unit":"px","size":"","sizes":[]}}'
                                  data-widget_type="site-logo.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="hfe-site-logo">
                                      <a
                                        data-elementor-open-lightbox=""
                                        className="elementor-clickable"
                                        href="#"
                                      >
                                        <div className="hfe-site-logo-set">
                                          <div className="hfe-site-logo-container">
                                            <img
                                              className="hfe-site-logo-img elementor-animation-"
                                              src="https://onnovault.io/imgs/logo-g.png"
                                              alt="default-logo"
                                            />
                                          </div>
                                        </div>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-808371d elementor-widget elementor-widget-text-editor"
                                  data-id="808371d"
                                  data-element_type="widget"
                                  data-widget_type="text-editor.default"
                                >
                                  <div className="elementor-widget-container">
                                    <p>
                                      ONNO Vault is an innovative platform that
                                      blends top-tier security with high-yield
                                      staking, powered by Layer 2 technology. We
                                      provide a reliable and efficient way to
                                      maximize your digital assets in the
                                      decentralized financial landscape.
                                    </p>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-7c3f604 e-grid-align-left elementor-shape-rounded elementor-grid-0 elementor-widget elementor-widget-social-icons"
                                  data-id="7c3f604"
                                  data-element_type="widget"
                                  data-widget_type="social-icons.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div className="elementor-social-icons-wrapper elementor-grid">
                                      <a
                                        href="https://t.me/OnnoVault"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <i
                                          className="fab fa-telegram"
                                          style={{
                                            fontSize: "26px",
                                            color: "#8102ff",
                                            cursor: "pointer",
                                          }}
                                        ></i>
                                      </a>
                                      <a
                                        href="https://t.me/OnnoVaultNews"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <i
                                          className="fab fa-telegram"
                                          style={{
                                            fontSize: "26px",
                                            color: "#8102ff",
                                            cursor: "pointer",
                                          }}
                                        ></i>
                                      </a>
                                      <a
                                        href="https://discord.gg/ScC7jqw3"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <i
                                          className="fab fa-discord"
                                          style={{
                                            fontSize: "26px",
                                            color: "#8102ff",
                                            cursor: "pointer",
                                          }}
                                        ></i>
                                      </a>
                                      <a
                                        href="https://twitter.com/OnnoVault"
                                        target="_blank"
                                        rel="noreferrer"
                                      >
                                        <i
                                          className="fab fa-twitter"
                                          style={{
                                            fontSize: "26px",
                                            color: "#8102ff",
                                            cursor: "pointer",
                                          }}
                                        ></i>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-f442721"
                              data-id="f442721"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-dc8600a elementor-widget elementor-widget-heading"
                                  data-id="dc8600a"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h5 className="elementor-heading-title elementor-size-default">
                                      Navigations
                                    </h5>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-6fc6d68 elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                  data-id="6fc6d68"
                                  data-element_type="widget"
                                  data-widget_type="icon-list.default"
                                >
                                  <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items">
                                      <li className="elementor-icon-list-item">
                                        <a
                                          href="https://earn.onnovault.io/"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <span className="elementor-icon-list-icon">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-arrow-alt-circle-right"
                                            ></i>{" "}
                                          </span>
                                          <span className="elementor-icon-list-text">
                                            Staking
                                          </span>
                                        </a>
                                      </li>
                                      <li className="elementor-icon-list-item">
                                        <a
                                          href="https://explorer.onnovault.io/"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <span className="elementor-icon-list-icon">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-arrow-alt-circle-right"
                                            ></i>{" "}
                                          </span>
                                          <span className="elementor-icon-list-text">
                                            Explorer
                                          </span>
                                        </a>
                                      </li>
                                      <li className="elementor-icon-list-item">
                                        <a
                                          href="https://learn.onnovault.io/"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <span className="elementor-icon-list-icon">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-arrow-alt-circle-right"
                                            ></i>{" "}
                                          </span>
                                          <span className="elementor-icon-list-text">
                                            Whitepaper
                                          </span>
                                        </a>
                                      </li>
                                      <li className="elementor-icon-list-item">
                                        <a
                                          href="https://perp.onnovault.io/"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <span className="elementor-icon-list-icon">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-arrow-alt-circle-right"
                                            ></i>{" "}
                                          </span>
                                          <span className="elementor-icon-list-text">
                                            Perpetual DEX
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-d69c14c"
                              data-id="d69c14c"
                              data-element_type="column"
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-abbc402 elementor-widget elementor-widget-heading"
                                  data-id="abbc402"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h5 className="elementor-heading-title elementor-size-default">
                                      Quick Links
                                    </h5>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-174f72d elementor-align-left elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                  data-id="174f72d"
                                  data-element_type="widget"
                                  data-widget_type="icon-list.default"
                                >
                                  <div className="elementor-widget-container">
                                    <ul className="elementor-icon-list-items">
                                      <li className="elementor-icon-list-item">
                                        <a href="#">
                                          <span className="elementor-icon-list-icon">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-caret-right"
                                            ></i>{" "}
                                          </span>
                                          <span className="elementor-icon-list-text">
                                            SAFU
                                          </span>
                                        </a>
                                      </li>
                                      <li className="elementor-icon-list-item">
                                        <a href="#" target="_blank">
                                          <span className="elementor-icon-list-icon">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-caret-right"
                                            ></i>{" "}
                                          </span>
                                          <span className="elementor-icon-list-text">
                                            AUDIT
                                          </span>
                                        </a>
                                      </li>
                                      <li className="elementor-icon-list-item">
                                        <a href="#" target="_blank">
                                          <span className="elementor-icon-list-icon">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-caret-right"
                                            ></i>{" "}
                                          </span>
                                          <span className="elementor-icon-list-text">
                                            KYC
                                          </span>
                                        </a>
                                      </li>
                                      <li className="elementor-icon-list-item">
                                        <a
                                          href="https://www.pinksale.finance/"
                                          target="_blank"
                                          rel="noreferrer"
                                        >
                                          <span className="elementor-icon-list-icon">
                                            <i
                                              aria-hidden="true"
                                              className="fas fa-caret-right"
                                            ></i>{" "}
                                          </span>
                                          <span className="elementor-icon-list-text">
                                            Pinksale
                                          </span>
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div
                              className="elementor-column elementor-col-25 elementor-inner-column elementor-element elementor-element-45b3e7f animated fadeInUp"
                              data-id="45b3e7f"
                              data-element_type="column"
                              data-settings='{"animation":"fadeInUp","animation_delay":400}'
                            >
                              <div className="elementor-widget-wrap elementor-element-populated">
                                <div
                                  className="elementor-element elementor-element-db1ec11 elementor-widget elementor-widget-heading"
                                  data-id="db1ec11"
                                  data-element_type="widget"
                                  data-widget_type="heading.default"
                                >
                                  <div className="elementor-widget-container">
                                    <h2 className="elementor-heading-title elementor-size-default">
                                      Contact Us
                                    </h2>
                                  </div>
                                </div>
                                <div
                                  className="elementor-element elementor-element-7b76e7c elementor-widget elementor-widget-metform"
                                  data-id="7b76e7c"
                                  data-element_type="widget"
                                  data-widget_type="metform.default"
                                >
                                  <div className="elementor-widget-container">
                                    <div
                                      id="mf-response-props-id-82"
                                      data-previous-steps-style=""
                                      data-editswitchopen=""
                                      data-response_type="alert"
                                      data-erroricon="fas fa-exclamation-triangle"
                                      data-successicon="fas fa-check"
                                      data-messageposition="top"
                                      className="   mf-scroll-top-no"
                                    >
                                      <div
                                        className="formpicker_warper formpicker_warper_editable"
                                        data-metform-formpicker-key="82"
                                      >
                                        <div className="elementor-widget-container">
                                          <div
                                            id="metform-wrap-7b76e7c-82"
                                            className="mf-form-wrapper"
                                            data-form-id="82"
                                            data-action="#"
                                            data-wp-nonce="27c0449d78"
                                            data-form-nonce="e502f218c6"
                                            data-quiz-summery="false"
                                            data-save-progress="false"
                                            data-form-type="contact_form"
                                            data-stop-vertical-effect=""
                                          >
                                            <form className="metform-form-content">
                                              <div
                                                className="mf-main-response-wrap   mf-response-msg-wrap"
                                                data-show="0"
                                              >
                                                <div className="mf-response-msg">
                                                  <i className="mf-success-icon fas fa-check"></i>
                                                  <p></p>
                                                </div>
                                              </div>
                                              <div className="metform-form-main-wrapper">
                                                <div
                                                  data-elementor-type="wp-post"
                                                  data-elementor-id="82"
                                                  className="elementor elementor-82"
                                                >
                                                  <section
                                                    className="elementor-section elementor-top-section elementor-element elementor-element-f247b62 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                    data-id="f247b62"
                                                    data-element_type="section"
                                                    data-settings='{"_ha_eqh_enable":false}'
                                                  >
                                                    <div className="elementor-container elementor-column-gap-default">
                                                      <div
                                                        className="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-6021b28"
                                                        data-id="6021b28"
                                                        data-element_type="column"
                                                      >
                                                        <div className="elementor-widget-wrap elementor-element-populated">
                                                          <section
                                                            className="elementor-section elementor-inner-section elementor-element elementor-element-0770f92 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                                                            data-id="0770f92"
                                                            data-element_type="section"
                                                            data-settings='{"_ha_eqh_enable":false}'
                                                          >
                                                            <div className="elementor-container elementor-column-gap-extended">
                                                              <div
                                                                className="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-185982f"
                                                                data-id="185982f"
                                                                data-element_type="column"
                                                              >
                                                                <div className="elementor-widget-wrap elementor-element-populated">
                                                                  <div
                                                                    className="elementor-element elementor-element-ef2d1be elementor-widget elementor-widget-mf-email"
                                                                    data-id="ef2d1be"
                                                                    data-element_type="widget"
                                                                    data-settings='{"mf_input_name":"mf-email"}'
                                                                    data-widget_type="mf-email.default"
                                                                  >
                                                                    <div className="elementor-widget-container">
                                                                      <div className="mf-input-wrapper">
                                                                        contact@onnovault.app
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                  <div
                                                                    className="elementor-element elementor-element-5b65735 mf-btn--right mf-btn--tablet-justify mf-btn--mobile-justify elementor-widget__width-auto elementor-absolute e-transform elementor-widget elementor-widget-mf-button"
                                                                    data-id="5b65735"
                                                                    data-element_type="widget"
                                                                    data-settings='{"_position":"absolute","_transform_scale_effect_hover":{"unit":"px","size":1.1,"sizes":[]},"_transform_scale_effect_hover_tablet":{"unit":"px","size":"","sizes":[]},"_transform_scale_effect_hover_mobile":{"unit":"px","size":"","sizes":[]}}'
                                                                    data-widget_type="mf-button.default"
                                                                  >
                                                                    <div className="elementor-widget-container">
                                                                      <div
                                                                        className="mf-btn-wraper "
                                                                        data-mf-form-conditional-logic-requirement=""
                                                                      >
                                                                        <button
                                                                          type="submit"
                                                                          className="metform-btn metform-submit-btn "
                                                                          id=""
                                                                        >
                                                                          <span>
                                                                            {" "}
                                                                          </span>
                                                                        </button>
                                                                      </div>
                                                                    </div>
                                                                  </div>
                                                                </div>
                                                              </div>
                                                            </div>
                                                          </section>
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </section>
                                                </div>
                                              </div>
                                            </form>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </section>
                        <div
                          className="elementor-element elementor-element-7f2925b elementor-widget elementor-widget-spacer"
                          data-id="7f2925b"
                          data-element_type="widget"
                          data-widget_type="spacer.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-spacer">
                              <div className="elementor-spacer-inner"></div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-5d8928b elementor-widget-divider--view-line elementor-widget elementor-widget-divider"
                          data-id="5d8928b"
                          data-element_type="widget"
                          data-widget_type="divider.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="elementor-divider">
                              <span className="elementor-divider-separator"></span>
                            </div>
                          </div>
                        </div>
                        <div
                          className="elementor-element elementor-element-198a907 elementor-widget elementor-widget-copyright animated fadeInUp"
                          data-id="198a907"
                          data-element_type="widget"
                          data-settings='{"_animation":"fadeInUp"}'
                          data-widget_type="copyright.default"
                        >
                          <div className="elementor-widget-container">
                            <div className="hfe-copyright-wrapper">
                              <span>Copyright © 2024 - Onno Vault</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </footer>
        </div>
        <link
          rel="stylesheet"
          id="jeg-dynamic-style-css"
          href="https://onnovault.io/index_files/jeg-dynamic-styles.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="sweetalert2-css"
          href="https://onnovault.io/index_files/sweetalert2.min.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="tiny-slider-css"
          href="https://onnovault.io/index_files/tiny-slider.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="elementor-post-82-css"
          href="https://onnovault.io/index_files/post-82.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="metform-ui-css"
          href="https://onnovault.io/index_files/metform-ui.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="metform-style-css"
          href="https://onnovault.io/index_files/style.css"
          media="all"
        />
        <link
          rel="stylesheet"
          id="e-animations-css"
          href="https://onnovault.io/index_files/animations.min.css"
          media="all"
        />
        <script
          src="https://onnovault.io/index_files/index.js.download"
          id="swv-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/index(1).js.download"
          id="contact-form-7-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/imagesloaded.min.js.download"
          id="imagesloaded-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/jquery.magnific-popup.min.js.download"
          id="magnific-popup-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/juxtapose.js.download"
          id="juxtapose-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/typed.min.js.download"
          id="typed-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/owl.carousel.min.js.download"
          id="owl-carousel-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/jquery.countdown.min.js.download"
          id="countdown-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/jquery.matchHeight.min.js.download"
          id="matchheight-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/isotope.min.js.download"
          id="isotope-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/packery-mode.pkgd.min.js.download"
          id="packery-mode-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/theia-sticky-sidebar.min.js.download"
          id="theia-sticky-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/scripts.js.download"
          id="naevents-scripts-js"
          async
        ></script>

        <script
          src="https://onnovault.io/index_files/happy-addons.min.js.download"
          id="happy-elementor-addons-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/hello-frontend.min.js.download"
          id="hello-theme-frontend-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/webpack.runtime.min.js.download"
          id="elementor-webpack-runtime-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/frontend-modules.min.js.download"
          id="elementor-frontend-modules-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/waypoints.min.js.download"
          id="elementor-waypoints-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/core.min.js.download"
          id="jquery-ui-core-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/frontend.min.js.download"
          id="elementor-frontend-js"
          async
        ></script>
        <span
          id="elementor-device-mode"
          className="elementor-screen-only"
        ></span>
        <span
          id="elementor-device-mode"
          className="elementor-screen-only"
        ></span>
        <script
          src="https://onnovault.io/index_files/sticky-element.js.download"
          id="jkit-sticky-element-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/frontend.js.download"
          id="hfe-frontend-js-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/fun-fact.js.download"
          id="jkit-element-funfact-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/anime.min.js.download"
          id="anime-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/video-button.js.download"
          id="jkit-element-videobutton-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/sweetalert2.min.js.download"
          id="sweetalert2-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/testimonials.js.download"
          id="jkit-element-testimonials-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/tiny-slider.js.download"
          id="tiny-slider-js"
          async
        ></script>

        <script
          src="https://onnovault.io/index_files/post-pagination.js.download"
          id="jkit-element-pagination-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/htm.js.download"
          id="htm-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/wp-polyfill-inert.min.js.download"
          id="wp-polyfill-inert-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/regenerator-runtime.min.js.download"
          id="regenerator-runtime-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/wp-polyfill.min.js.download"
          id="wp-polyfill-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/react.min.js.download"
          id="react-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/react-dom.min.js.download"
          id="react-dom-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/escape-html.min.js.download"
          id="wp-escape-html-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/element.min.js.download"
          id="wp-element-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/app.js.download"
          id="metform-app-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/naevents-elementor.js.download"
          id="naevents-elementor-js"
          async
        ></script>
        <script
          src="https://onnovault.io/index_files/Chart.min.js.download"
          id="naevents-chartjs-js"
          async
        ></script>
      </body>
    </div>
  );
};

export default Home;
