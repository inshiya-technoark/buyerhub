import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
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
                  <li className="nav-item active"><a className="nav-link" href="index.html"><Link to='/home'> Home</Link></a></li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <Link to='/shop'> THE XCHANGE SHOP</Link>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#.">Submenu - 01</a>
                      <a className="dropdown-item" href="#.">Submenu - 02</a>
                      <a className="dropdown-item" href="#.">Submenu - 03</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="sell.html" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <Link to='/sellerhub'> Seller Hub</Link>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#.">Submenu - 01</a>
                      <a className="dropdown-item" href="#.">Submenu - 02</a>
                      <a className="dropdown-item" href="#.">Submenu - 03</a>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="buy.html" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <Link to='/buyerhub'> Buyer Hub</Link>
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                      <a className="dropdown-item" href="#.">Submenu - 01</a>
                      <a className="dropdown-item" href="#.">Submenu - 02</a>
                      <a className="dropdown-item" href="#.">Submenu - 03</a>
                    </div>
                  </li>
                  <li className="nav-item">
                    <a className="btn btn-outline-primary btn-login" href="seller-dashboard-myAccount.html">Login / Join Us</a>
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
        <div className="main" id="home">
          <div className="jumbotron">
            <div className="container">
              <h2>THE XCHANGE MARKETPLACE</h2>
              <h4>for Buyers &amp; Sellers of Testing Equipment</h4>
              <div><a className="btn btn-primary btn-md" href="#" role="button">Join Us</a></div>
            </div>
          </div>
          {/* end jumbotron*/}
          <div className="welcome_section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <div className="video-wrapper">
                    <iframe width="100%" height={450} src="https://www.youtube.com/embed/9xwazD5SyVg" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="welcome-block">
                    <div className="heading-style1">
                      <div>
                        <img src="assets/images/icon-17.png" alt="" />
                      </div>
                      <h2>
                        <span>Welcome to</span>
                        THE XCHANGE MARKETPLACE
                      </h2>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tem nci didunt utlabore et dolore magna aliqua. Quis maecenas accumsan lacus vel ultrices commodo adip is do tempor magna facilisis. </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end welcome section */}
          <div className="buy_sell_section">
            <div className="container">
              <div className="row">
                <div className="col-md-6 text-center buyleft-section">
                  <div className="img-block">
                    <img alt="" src="assets/images/img-buy.png" className="img-fluid" />
                  </div>
                  <h3><span>Buy</span> anytime with</h3>
                  <h2>the Xchange marketplace</h2> 
                  <ul>
                    <li>
                      <img src="assets/images/icon-buy-1.png" alt="" className="img-fluid" /> 
                      <h3>Sign up</h3>
                    </li>
                    <li>
                      <img src="assets/images/icon-buy-2.png" alt="" className="img-fluid" /> 
                      <h3>Shop for it</h3>
                    </li>
                    <li>
                      <img src="assets/images/icon-buy-3.png" alt="" className="img-fluid" /> 
                      <h3>Buy it</h3>
                    </li>
                    <li>
                      <img src="assets/images/icon-buy-4.png" alt="" className="img-fluid" /> 
                      <h3>Receive it</h3>
                    </li>
                    <li>
                      <img src="assets/images/icon-buy-5.png" alt="" className="img-fluid" /> 
                      <h3>Use it</h3>
                    </li>
                  </ul>
                  <div className="mt-4 sb-btn-group">
                    <a className="btn btn-primary btn-md btn-style1 btn-green mr-4" href="#" role="button">Learn more</a>
                    <a className="btn btn-primary btn-md btn-style1 btn-buying" href="buy.html" role="button">Start Buying</a>
                  </div>
                </div>
                <div className="col-md-6 text-center sellright-section">
                  <div className="img-block ">
                    <img alt="" src="assets/images/img-sell.png" className="img-fluid" />
                  </div>
                  <h3><span>Sell</span> anytime with</h3>
                  <h2>the Xchange marketplace</h2>
                  <ul>
                    <li>
                      <img src="assets/images/icon-buy-1.png" alt="" className="img-fluid" /> 
                      <h3>Sign up</h3>
                    </li>
                    <li>
                      <img src="assets/images/icon-sell-2.png" alt="" className="img-fluid" /> 
                      <h3>List it</h3>
                    </li>
                    <li>
                      <img src="assets/images/icon-sell-3.png" alt="" className="img-fluid" /> 
                      <h3>Sell it</h3>
                    </li>
                    <li>
                      <img src="assets/images/Ship-it.png" alt="" className="img-fluid" /> 
                      <h3>Ship it</h3>
                    </li>
                    <li>
                      <img src="assets/images/Get-Paid.png" alt="" className="img-fluid" /> 
                      <h3>Get Paid</h3>
                    </li>
                  </ul>
                  <div className="mt-4 sb-btn-group">
                    <a className="btn btn-primary btn-md btn-style1 btn-green mr-4" href="#" role="button">Learn more</a>
                    <a className="btn btn-primary btn-md btn-style1" href="sell.html" role="button">Start Selling</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* end buy_sell_section */}
          <div className="gettheapp_section">
            <div className="container">
              <div className="row">
                <div className="col-md-6">
                  <h2>Get the App.
                    <img src="assets/images/icon-mobile.png" alt=" " className="icon-mob" />
                  </h2>
                  <h3>Stay Connected . Get Matched . Buy &amp; Sell</h3>
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
                <div className="col-md-6 text-center pt-5  mob-view">
                  <img src="assets/images/bg-2.png" alt="" className="img-fluid" />
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
        </div>
    )
}

export default Home
