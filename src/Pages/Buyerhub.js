import React from 'react';
import { Link } from 'react-router-dom';

function Buyerhub() {
    return (
        <div>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        {/* Bootstrap CSS */}
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/fontawesome.min.css" />
        <link rel="stylesheet" href="assets/css/brands.css" />
        <link rel="stylesheet" href="assets/css/solid.css" />	
        <link rel="stylesheet" href="assets/css/style.css" />
        <title>The Xchange Marketplace</title>
        <div className="header">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <a className="navbar-brand" href="#.">
                <img src="assets/images/logo.png" alt="The Xchange Marketplace" />
              </a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav float-right">
                  <li className="nav-item "><a className="nav-link" href="index.html"><Link to='/home'>Home</Link></a></li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <Link to='/shop'>THE XCHANGE SHOP</Link>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#.">Submenu - 01</a>
                      <a className="dropdown-item" href="#.">Submenu - 02</a>
                      <a className="dropdown-item" href="#.">Submenu - 03</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="sell.html" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <Link to='/sellerhub'>Seller Hub</Link>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#.">Submenu - 01</a>
                      <a className="dropdown-item" href="#.">Submenu - 02</a>
                      <a className="dropdown-item" href="#.">Submenu - 03</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown active">
                    <a className="nav-link dropdown-toggle" href="buy.html" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <Link to='/buyerhub'>Buyer Hub</Link>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#.">Submenu - 01</a>
                      <a className="dropdown-item" href="#.">Submenu - 02</a>
                      <a className="dropdown-item" href="#.">Submenu - 03</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="btn btn-outline-primary btn-login" href="#.">Login / Join Us</a>
                  </li>
                  <li className="nav-item">
                    <a className="btn btn-outline-primary btn-getTheApp" href="#.">Get the app</a> 
                  </li> 
                </ul>
              </div>
            </nav>
          </div>
        </div>
        {/* end Header */}
        <div className="main">
          <div className="jumbotron banner-buy">
            <div className="container">
              <h1 className="title-top">Buyer Hub</h1>
              <h2>THE XCHANGE MARKETPLACE</h2>
              <h4>for Buyers &amp; Sellers of Testing Equipment</h4>
              <div className="search-area">
                <input type="text" name="search" className="input-field" placeholder="Search THE XCHANGE SHOP" />
                <a className="btn btn-primary btn-md" href="#" role="button">Start Browsing</a>
              </div>
            </div>
          </div>
          {/* end jumbotron*/}
          <div className="getStarted-sec">
            <div className="container">
              <h2 className="text-center">Here’s what you need to know to get started</h2>
              <ul className="d-flex ul-none">
                <li>
                  <div className="getStarted-icon">
                    <img src="assets/images/icon-buy-1.png" alt="" className="img-fluid" />
                  </div>
                  <div className="getStarted-text">
                    <h3>Sign up</h3>
                    <p>Complete our EZ Form to Shop the XCHANGE</p>
                    <a href="#">Learn more  <i className="fas fa-chevron-right" /></a>
                  </div>
                </li>
                <li>
                  <div className="getStarted-icon">
                    <img src="assets/images/icon-buy-2.png" alt="" className="img-fluid" />
                  </div>
                  <div className="getStarted-text">
                    <h3>Shop for it</h3>
                    <p>Browse our Showcase of Testing Equipment</p>
                    <a href="#">Learn more <i className="fas fa-chevron-right" /> </a>
                  </div>
                </li>
                <li>
                  <div className="getStarted-icon">
                    <img src="assets/images/icon-buy-3.png" alt="" className="img-fluid" />
                  </div>
                  <div className="getStarted-text">
                    <h3>Buy it</h3>
                    <p>Select Product and Connect with Sellers</p>
                    <a href="#">Learn more <i className="fas fa-chevron-right" /></a>
                  </div>
                </li>
                <li>
                  <div className="getStarted-icon">
                    <img src="assets/images/icon-buy-4.png" alt="" className="img-fluid" />
                  </div>
                  <div className="getStarted-text">
                    <h3>Receive it</h3>
                    <p>Coordinate with Seller to Arrange Delivery</p>
                    <a href="#">Learn more <i className="fas fa-chevron-right" /></a>
                  </div>
                </li>
                <li>
                  <div className="getStarted-icon">
                    <img src="assets/images/icon-buy-5.png" alt="" className="img-fluid" />
                  </div>
                  <div className="getStarted-text">
                    <h3>Use it</h3>
                    <p>Start Performing your Test with your Equipment</p>
                    <a href="#">Learn more <i className="fas fa-chevron-right" /></a>
                  </div>
                </li>
              </ul>
            </div>	
          </div>
          {/* end get started*/}
          <div className="welcome_section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="video-wrapper">
                    <iframe width="100%" height={320} src="https://www.youtube.com/embed/9xwazD5SyVg" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="welcome-block">
                    <div className="heading-style1 buy_page">
                      <div>
                        <img src="assets/images/icon-17.png" alt="" />
                      </div>
                      <h2 className="buy-sell-title"> 
                        <span>Watch our video</span> to learn how buying on THE XCHANGE MARKETPLACE works
                      </h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tem nci didunt utlabore et dolore magna aliqua. Quis maecenas accumsan lacus vel ultrices commodo adip is do tempor magna facilisis. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end welcome section */}
          <div className="gettheapp_section" id="buying-xchange-values">
            <div className="container">
              <div className="row">
                <div className="col-md-7">
                  <h2>Buying on <span>the Xchange</span></h2>
                  <h4>Shop Online at your Leisure and Convenience Save Money with Options for Used and PreOwned Testing Equipment</h4>
                  <div className="xchange-value">
                    <ul>
                      <li>
                        Buy Products Securely
                      </li>
                      <li>
                        Support from the Xchange Team
                      </li>
                      <li>
                        Avoid the Hassle of Normal Sales Process
                      </li>
                      <li>
                        Rent / Lease
                      </li>
                      <li>
                        Simple &amp; Secure Purchases
                      </li>
                      <li>
                        Access Network of Service Providers
                      </li>
                      <li>
                        Bypass Salespersons
                      </li>
                      <li>
                        <strong> Product Videos</strong>
                      </li>
                      <li>
                        Private Message Center
                      </li>
                      <li>
                        Request Virtual Demonstrations
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-5 mt-5 mob-view ">
                  <img src="assets/images/cart-img.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          {/* end buy_sell_section */}
          <div className="whoShouldBuy">
            <div className="container">
              <div className="whoShouldBuyWrap">
                <div className="row">
                  <div className="col-md-4 bg-whoShouldBuy">
                    <h2>Who should Buy <span>On the Xchange</span></h2>
                    <a className="btn btn-primary btn-sm btn-style1" href="#" role="button">Start Browsing</a>
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-4">
                        <div className="wsb-list">
                          <div className="wsb-list-img">
                            <img src="assets/images/icon-10.jpg" alt="" className="img-fluid" />
                          </div>
                          <h3>Consumers</h3>
                          <a href="#">Learn more </a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="wsb-list">
                          <div className="wsb-list-img">
                            <img src="assets/images/icon-11.jpg" alt="" className="img-fluid" />
                          </div>
                          <h3>Companies</h3>
                          <a href="#">Learn more </a>
                        </div>
                      </div>
                      <div className="col-md-4">
                        <div className="wsb-list">
                          <div className="wsb-list-img">
                            <img src="assets/images/icon-12.jpg" alt="" className="img-fluid" />
                          </div>
                          <h3>Distributors/Resellers</h3>
                          <a href="#">Learn more </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end whoShouldBuy */}
          <div className="whybuy">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <h2>Why Buy <span>On the Xchange</span> </h2>
                  <a className="btn btn-primary btn-sm btn-style1" href="#" role="button">Start Browsing</a>
                </div>
                <div className="col-md-9">
                  <div className="row">
                    <div className="col-md-3 col-6">
                      <div className="wb-list text-center">
                        <div className="wb-list-img">
                          <img src="assets/images/icon-18.png" alt="" className="img-fluid" />
                        </div>
                        <h3>Easy to Shop Online</h3>
                        <a href="#">Learn more </a>
                      </div>
                    </div>
                    <div className="col-md-3  col-6">
                      <div className="wb-list text-center">
                        <div className="wb-list-img">
                          <img src="assets/images/icon-19.png" alt="" className="img-fluid" />
                        </div>
                        <h3>Variety of Products</h3>
                        <a href="#">Learn more </a>
                      </div>
                    </div>
                    <div className="col-md-3  col-6">
                      <div className="wb-list text-center">
                        <div className="wb-list-img">
                          <img src="assets/images/icon-20.png" alt="" className="img-fluid" />
                        </div>
                        <h3>Perfectly Match	Buyers &amp; Sellers</h3>
                        <a href="#">Learn more </a>
                      </div>
                    </div>
                    <div className="col-md-3  col-6">
                      <div className="wb-list text-center">
                        <div className="wb-list-img">
                          <img src="assets/images/icon-21.png" alt="" className="img-fluid" />
                        </div>
                        <h3>Cost Savings</h3>
                        <a href="#">Learn more </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end whybuy */}
          <div className="howToBuy">
            <div className="container">
              <div className="row">
                <div className="col-md-3">
                  <h2>How to Buy <span>on the Xchange</span></h2>
                  <a className="btn btn-primary btn-sm btn-style1" href="#" role="button">Start Browsing</a>
                </div>
                <div className="col-md-9 howtobuyright">
                  <div className="row">
                    <div className="col-md-3  col-6">
                      <div className="htb-prog-img">
                        <img src="assets/images/icon-13.jpg" alt="" className="img-fluid" />
                      </div>
                      <div className="htb-prog-cont htp-step1">
                        <h4>STEP 1</h4>
                        <h5>Create an Account</h5>
                      </div>
                    </div>
                    <div className="col-md-3  col-6">
                      <div className="htb-prog-img">
                        <img src="assets/images/icon-14.jpg" alt="" className="img-fluid" />
                      </div>
                      <div className="htb-prog-cont htp-step2">
                        <h4>STEP 2</h4>
                        <h5>Shop THE XCHANGE</h5>
                      </div>
                    </div>
                    <div className="col-md-3  col-6">
                      <div className="htb-prog-img">
                        <img src="assets/images/icon-15.jpg" alt="" className="img-fluid" />
                      </div>
                      <div className="htb-prog-cont htp-step3">
                        <h4>STEP 3</h4>
                        <h5>Find Your Product</h5>
                      </div>
                    </div>
                    <div className="col-md-3  col-6">
                      <div className="htb-prog-img">
                        <img src="assets/images/icon-16.jpg" alt="" className="img-fluid" />
                      </div>
                      <div className="htb-prog-cont htp-step4">
                        <h4>STEP 4</h4>
                        <h5>Connect with Seller</h5>
                      </div>
                    </div>
                  </div>
                  {/* end row */}
                  <div className="row">
                    <div className="col-md-12 text-center img-progress">
                      <img src="assets/images/progress-bar.png" alt="" className="img-fluid" />	
                    </div>
                  </div>
                  {/* end row */} 
                </div>
              </div>
            </div>
          </div>
          {/* end How to Buy */}
          <div className="gettheapp_section style2">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2>Get the App.</h2>
                  <h3>Stay Connected . Shop . Get Matched . Buy</h3>
                  <h4>THE XCHANGE MARKETPLACE</h4>
                  <div className="app-widget">
                    <h4>App Now Available</h4>
                    <ul>
                      <li>
                        <a href="#"><img src="assets/images/app-store.png" alt="" /></a>
                      </li>
                      <li>
                        <a href="#"><img src="assets/images/app-store-google.png" alt="" /></a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6 text-center mob-view">
                  <img src="assets/images/bg-3.png" alt="" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
          {/* end buy_sell_section */}
          <div className="recent_reviews_section">
            <div className="container">
              <h2 className="text-center"><span>Recent reviews</span> from buyers and sellers</h2>
              {/*Carousel Wrapper*/}
              <div id="multi-item-example" className="carousel slide carousel-multi-item" data-ride="carousel">
                {/*Controls*/}
                <div className="controls-top">
                  <a className="btn-floating btn-left" href="#multi-item-example" data-slide="prev"><i className="fas fa-chevron-left" /></a>
                  <a className="btn-floating btn-right" href="#multi-item-example" data-slide="next"><i className="fas fa-chevron-right" /></a>
                </div>
                {/*/.Controls*/}
                {/*Slides*/}
                <div className="carousel-inner" role="listbox">
                  {/*First slide*/}
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card mb-2">
                          <div className="card-body">
                            <ul className="review-rating">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                            </ul>
                            <h4 className="card-title">Heading</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, cons ectetur adip iscing elit, sed do eiusmod tempor aliqua. Quis ipsum susp endisse ultrices gravida. Risus commodo mae cenas accumsan lacus vel facilisis. </p>
                            <div className="custmoer_name">Customer Name</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card mb-2">
                          <div className="card-body">
                            <ul className="review-rating">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                            </ul>
                            <h4 className="card-title">Heading</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, cons ectetur adip iscing elit, sed do eiusmod tempor aliqua. Quis ipsum susp endisse ultrices gravida. Risus commodo mae cenas accumsan lacus vel facilisis. </p>
                            <div className="custmoer_name">Customer Name</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card mb-2">
                          <div className="card-body">
                            <ul className="review-rating">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                            </ul>
                            <h4 className="card-title">Heading</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, cons ectetur adip iscing elit, sed do eiusmod tempor aliqua. Quis ipsum susp endisse ultrices gravida. Risus commodo mae cenas accumsan lacus vel facilisis. </p>
                            <div className="custmoer_name">Customer Name</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card mb-2">
                          <div className="card-body">
                            <ul className="review-rating">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                            </ul>
                            <h4 className="card-title">Heading</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, cons ectetur adip iscing elit, sed do eiusmod tempor aliqua. Quis ipsum susp endisse ultrices gravida. Risus commodo mae cenas accumsan lacus vel facilisis. </p>
                            <div className="custmoer_name">Customer Name</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/.First slide*/}
                  {/*Second slide*/}
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card mb-2">
                          <div className="card-body">
                            <ul className="review-rating">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                            </ul>
                            <h4 className="card-title">Heading</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, cons ectetur adip iscing elit, sed do eiusmod tempor aliqua. Quis ipsum susp endisse ultrices gravida. Risus commodo mae cenas accumsan lacus vel facilisis. </p>
                            <div className="custmoer_name">Customer Name</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card mb-2">
                          <div className="card-body">
                            <ul className="review-rating">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                            </ul>
                            <h4 className="card-title">Heading</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, cons ectetur adip iscing elit, sed do eiusmod tempor aliqua. Quis ipsum susp endisse ultrices gravida. Risus commodo mae cenas accumsan lacus vel facilisis. </p>
                            <div className="custmoer_name">Customer Name</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card mb-2">
                          <div className="card-body">
                            <ul className="review-rating">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                            </ul>
                            <h4 className="card-title">Heading</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, cons ectetur adip iscing elit, sed do eiusmod tempor aliqua. Quis ipsum susp endisse ultrices gravida. Risus commodo mae cenas accumsan lacus vel facilisis. </p>
                            <div className="custmoer_name">Customer Name</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card mb-2">
                          <div className="card-body">
                            <ul className="review-rating">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                            </ul>
                            <h4 className="card-title">Heading</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, cons ectetur adip iscing elit, sed do eiusmod tempor aliqua. Quis ipsum susp endisse ultrices gravida. Risus commodo mae cenas accumsan lacus vel facilisis. </p>
                            <div className="custmoer_name">Customer Name</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/.Second slide*/}
                  {/*Third slide*/}
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-md-3">
                        <div className="card mb-2">
                          <div className="card-body">
                            <ul className="review-rating">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                            </ul>
                            <h4 className="card-title">Heading</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, cons ectetur adip iscing elit, sed do eiusmod tempor aliqua. Quis ipsum susp endisse ultrices gravida. Risus commodo mae cenas accumsan lacus vel facilisis. </p>
                            <div className="custmoer_name">Customer Name</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card mb-2">
                          <div className="card-body">
                            <ul className="review-rating">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                            </ul>
                            <h4 className="card-title">Heading</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, cons ectetur adip iscing elit, sed do eiusmod tempor aliqua. Quis ipsum susp endisse ultrices gravida. Risus commodo mae cenas accumsan lacus vel facilisis. </p>
                            <div className="custmoer_name">Customer Name</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card mb-2">
                          <div className="card-body">
                            <ul className="review-rating">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                            </ul>
                            <h4 className="card-title">Heading</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, cons ectetur adip iscing elit, sed do eiusmod tempor aliqua. Quis ipsum susp endisse ultrices gravida. Risus commodo mae cenas accumsan lacus vel facilisis. </p>
                            <div className="custmoer_name">Customer Name</div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="card mb-2">
                          <div className="card-body">
                            <ul className="review-rating">
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                              <li><i className="fas fa-star" /></li>
                            </ul>
                            <h4 className="card-title">Heading</h4>
                            <p className="card-text">Lorem ipsum dolor sit amet, cons ectetur adip iscing elit, sed do eiusmod tempor aliqua. Quis ipsum susp endisse ultrices gravida. Risus commodo mae cenas accumsan lacus vel facilisis. </p>
                            <div className="custmoer_name">Customer Name</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/*/.Third slide*/}
                </div>
                {/*/.Slides*/}
              </div>
              {/*/.Carousel Wrapper*/}
            </div>
          </div>
          {/* end recent_reviews_section */}
        </div>
        {/* end main */}
        
        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </div>
    )
}

export default Buyerhub
