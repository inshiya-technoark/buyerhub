import React from 'react'
import { Link } from 'react-router-dom';

function Shop() {
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
                  <li className="nav-item "><a className="nav-link" href="index.html"><Link to='/home'> Home</Link></a></li>
                  <li className="nav-item dropdown active">
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
                  <li className="nav-item dropdown ">
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
          <div className="shop-feature-product">
            <div className="shop-filter-nav">
              <div className="container">
                <ul className="d-flex">
                  <li className="active">
                    <a href="#">Shop by Category</a>
                  </li>
                  <li>
                    <a href="#">Shop by Brand</a>
                  </li>
                  <li>
                    <a href="#">Shop by Seller</a>
                  </li>
                  <li>
                    <a href="#">Shop by Price</a>
                  </li>
                  <li>
                    <a href="#">Shop by location</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container">
              <h2 className="text-center">Featured Products</h2>
              <div className="row">
                <div className="col-md-3 col-6">
                  <div className="pro-block">
                    <div className="pro-block-img">
                      <img src="assets/images/pro-img.jpg" alt="" />
                      <div className="icon-wish-list">
                        <i className="fas fa-heart" />
                      </div>
                    </div>
                    <div className="pro-block-content">
                      <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                      <div className="pro-price">$19,990.00 USD</div>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-md-3 col-6">
                  <div className="pro-block">
                    <div className="pro-block-img">
                      <img src="assets/images/pro-img.jpg" alt="" />
                      <div className="icon-wish-list active">
                        <i className="fas fa-heart" />
                      </div>
                    </div>
                    <div className="pro-block-content">
                      <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                      <div className="pro-price">$19,990.00 USD</div>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-md-3 col-6">
                  <div className="pro-block">
                    <div className="pro-block-img">
                      <img src="assets/images/pro-img.jpg" alt="" />
                      <div className="icon-wish-list">
                        <i className="fas fa-heart" />
                      </div>
                    </div>
                    <div className="pro-block-content">
                      <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                      <div className="pro-price">$19,990.00 USD</div>
                    </div>
                  </div>
                </div>
                {/* end col */}
                <div className="col-md-3 col-6">
                  <div className="pro-block">
                    <div className="pro-block-img">
                      <img src="assets/images/pro-img.jpg" alt="" />
                      <div className="icon-wish-list">
                        <i className="fas fa-heart" />
                      </div>
                    </div>
                    <div className="pro-block-content">
                      <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                      <div className="pro-price">$19,990.00 USD</div>
                    </div>
                  </div>
                </div>
                {/* end col */}
              </div>
            </div>
          </div>
          {/* end shop-feature-product */}
          <div className="search-block-sec">
            <div className="container">
              <div className="search-area">
                <input type="text" name="search" className="input-field" placeholder="Search THE XCHANGE SHOP" />
                <a className="btn btn-primary btn-md btn-style1" href="#" role="button">Start Browsing</a>
                <i className="fas fa-search" />
              </div>
            </div>
          </div>
          {/* end search-block-sec*/}
          <div className="shop-content mt-4">
            <div className="container">
              <div className="row ">
                <div className="col-md-2">
                  <h5 className="mt-2 title-shopBy">Shop by</h5>
                  <div className="filter-widget mt-2">
                    <div className="fw-head">
                      <a className="btn btn-block" data-toggle="collapse" href="#collapseCatagory" role="button">Catagory 
                        <i className="fas fa-chevron-down" />
                      </a>
                    </div>
                    <div className="collapse  " id="collapseCatagory">
                      <ul>
                        <li>
                          <a href="#">Rigaku</a>
                        </li>
                        <li>
                          <a href="#">Yamato Scientific</a>
                        </li>
                        <li>
                          <a href="#">RDM Industrial Inc.</a>
                        </li>
                        <li>
                          <a href="#">Rigaku</a>
                        </li>
                        <li>
                          <a href="#">Yamato Scientific</a>
                        </li>
                        <li>
                          <a href="#">RDM Industrial Inc.</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* end filter-widget */}
                  <div className="filter-widget">
                    <div className="fw-head">
                      <a className="btn btn-block" data-toggle="collapse" href="#collapseBrand" role="button">Brand
                        <i className="fas fa-chevron-down" />
                      </a>
                    </div>
                    <div className="collapse show" id="collapseBrand">
                      <ul>
                        <li>
                          <input type="checkbox" name="brand" /> Rigaku
                        </li>
                        <li>
                          <input type="checkbox" name="brand" /> Yamato Scientific
                        </li>
                        <li>
                          <input type="checkbox" name="brand" /> RDM Industrial Inc.
                        </li>
                        <li>
                          <input type="checkbox" name="brand" /> Rigaku
                        </li>
                        <li>
                          <input type="checkbox" name="brand" /> Yamato Scientific
                        </li>
                        <li>
                          <input type="checkbox" name="brand" /> RDM Industrial Inc.
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* end filter-widget */}
                  <div className="filter-widget">
                    <div className="fw-head">
                      <a className="btn btn-block" data-toggle="collapse" href="#collapseSeller" role="button">Seller
                        <i className="fas fa-chevron-down" />
                      </a>
                    </div>
                    <div className="collapse" id="collapseSeller">
                      <ul>
                        <li>
                          <a href="#">Rigaku</a>
                        </li>
                        <li>
                          <a href="#">Yamato Scientific</a>
                        </li>
                        <li>
                          <a href="#">RDM Industrial Inc.</a>
                        </li>
                        <li>
                          <a href="#">Rigaku</a>
                        </li>
                        <li>
                          <a href="#">Yamato Scientific</a>
                        </li>
                        <li>
                          <a href="#">RDM Industrial Inc.</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* end filter-widget */}
                  <div className="filter-widget">
                    <div className="fw-head">
                      <a className="btn btn-block" data-toggle="collapse" href="#collapsePrice" role="button">Price
                        <i className="fas fa-chevron-down" />
                      </a>
                    </div>
                    <div className="collapse show" id="collapsePrice">
                      <ul>
                        <li>
                          <input type="radio" name="Price" /> Under $5000
                        </li>
                        <li>
                          <input type="radio" name="Price" /> $5000 to $20000
                        </li>
                        <li>
                          <input type="radio" name="Price" /> $20000 to $50000
                        </li>
                        <li>
                          <input type="radio" name="Price" /> $50000 to $90000
                        </li>
                      </ul>
                      <div className="priceMinMax full-block mt-3">
                        <div className="row">
                          <div className="col-4">
                            <input type="text" className="form-control" placeholder="Min" />
                          </div>
                          <div className="col-4">
                            <input type="text" className="form-control" placeholder="Max" />
                          </div>
                          <div className="col-4">
                            <input type="submit" defaultValue="Apply" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* end filter-widget */}
                  <div className="filter-widget">
                    <div className="fw-head">
                      <a className="btn btn-block" data-toggle="collapse" href="#collapseLocation" role="button">Location
                        <i className="fas fa-chevron-down" />
                      </a>
                    </div>
                    <div className="collapse show" id="collapseLocation">
                      <ul>
                        <li>
                          <input type="checkbox" name="Location" /> Location 1
                        </li>
                        <li>
                          <input type="checkbox" name="Location" /> Location 2
                        </li>
                        <li>
                          <input type="checkbox" name="Location" /> Location 3
                        </li>
                        <li>
                          <input type="checkbox" name="Location" /> Location 4
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* end filter-widget */}
                </div>
                <div className="col-md-8 ">
                  <div className="full-block shopTop-filter">
                    <div className="row mb-2 ">
                      <div className="col-md-6">
                        <label className="mt-2">Showing 1 - 24 OF 635 Items</label>
                      </div>
                      <div className="col-md-6 ">
                        <div className="page-filter">
                          <label>Sort by</label>
                          <select name="page_length">
                            <option value="Best Match">Best Match</option>
                            <option value="New Arrivals">New Arrivals</option>
                            <option value="Recent products">Recent products</option>
                            <option value="Sale products">Sale products</option>
                          </select> 
                        </div>
                      </div>
                    </div>
                    {/* end row */}
                  </div>
                  <div className="full-block filter-view">
                    <ul>
                      <li>
                        <label>Rigaku</label>
                        <a href="#"><i className="fas fa-times-circle" /></a>
                      </li>
                      <li>
                        <label>Min $5000</label>
                        <a href="#"><i className="fas fa-times-circle" /></a>
                      </li>
                      <li>
                        <label>Max $20000</label>
                        <a href="#"><i className="fas fa-times-circle" /></a>
                      </li>
                    </ul>
                  </div>
                  <div className="row">
                    <div className="col-md-4 col-6">
                      <div className="pro-block">
                        <div className="pro-block-img">
                          <img src="assets/images/pro-img.jpg" alt="" />
                          <div className="icon-wish-list">
                            <i className="fas fa-heart" />
                          </div>
                        </div>
                        <div className="pro-block-content">
                          <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                          <div className="pro-price">$19,990.00 USD</div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4 col-6">
                      <div className="pro-block">
                        <div className="pro-block-img">
                          <img src="assets/images/pro-img.jpg" alt="" />
                          <div className="icon-wish-list">
                            <i className="fas fa-heart" />
                          </div>
                        </div>
                        <div className="pro-block-content">
                          <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                          <div className="pro-price">$19,990.00 USD</div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4 col-6">
                      <div className="pro-block">
                        <div className="pro-block-img">
                          <img src="assets/images/pro-img.jpg" alt="" />
                          <div className="icon-wish-list">
                            <i className="fas fa-heart" />
                          </div>
                        </div>
                        <div className="pro-block-content">
                          <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                          <div className="pro-price">$19,990.00 USD</div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4 col-6">
                      <div className="pro-block">
                        <div className="pro-block-img">
                          <img src="assets/images/pro-img.jpg" alt="" />
                          <div className="icon-wish-list">
                            <i className="fas fa-heart" />
                          </div>
                        </div>
                        <div className="pro-block-content">
                          <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                          <div className="pro-price">$19,990.00 USD</div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4 col-6">
                      <div className="pro-block">
                        <div className="pro-block-img">
                          <img src="assets/images/pro-img.jpg" alt="" />
                          <div className="icon-wish-list">
                            <i className="fas fa-heart" />
                          </div>
                        </div>
                        <div className="pro-block-content">
                          <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                          <div className="pro-price">$19,990.00 USD</div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4 col-6">
                      <div className="pro-block">
                        <div className="pro-block-img">
                          <img src="assets/images/pro-img.jpg" alt="" />
                          <div className="icon-wish-list">
                            <i className="fas fa-heart" />
                          </div>
                        </div>
                        <div className="pro-block-content">
                          <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                          <div className="pro-price">$19,990.00 USD</div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4 col-6">
                      <div className="pro-block">
                        <div className="pro-block-img">
                          <img src="assets/images/pro-img.jpg" alt="" />
                          <div className="icon-wish-list">
                            <i className="fas fa-heart" />
                          </div>
                        </div>
                        <div className="pro-block-content">
                          <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                          <div className="pro-price">$19,990.00 USD</div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4 col-6">
                      <div className="pro-block">
                        <div className="pro-block-img">
                          <img src="assets/images/pro-img.jpg" alt="" />
                          <div className="icon-wish-list">
                            <i className="fas fa-heart" />
                          </div>
                        </div>
                        <div className="pro-block-content">
                          <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                          <div className="pro-price">$19,990.00 USD</div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4 col-6">
                      <div className="pro-block">
                        <div className="pro-block-img">
                          <img src="assets/images/pro-img.jpg" alt="" />
                          <div className="icon-wish-list">
                            <i className="fas fa-heart" />
                          </div>
                        </div>
                        <div className="pro-block-content">
                          <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                          <div className="pro-price">$19,990.00 USD</div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4 col-6">
                      <div className="pro-block">
                        <div className="pro-block-img">
                          <img src="assets/images/pro-img.jpg" alt="" />
                          <div className="icon-wish-list">
                            <i className="fas fa-heart" />
                          </div>
                        </div>
                        <div className="pro-block-content">
                          <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                          <div className="pro-price">$19,990.00 USD</div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4 col-6">
                      <div className="pro-block">
                        <div className="pro-block-img">
                          <img src="assets/images/pro-img.jpg" alt="" />
                          <div className="icon-wish-list">
                            <i className="fas fa-heart" />
                          </div>
                        </div>
                        <div className="pro-block-content">
                          <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                          <div className="pro-price">$19,990.00 USD</div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                    <div className="col-md-4 col-6">
                      <div className="pro-block">
                        <div className="pro-block-img">
                          <img src="assets/images/pro-img.jpg" alt="" />
                          <div className="icon-wish-list">
                            <i className="fas fa-heart" />
                          </div>
                        </div>
                        <div className="pro-block-content">
                          <h3>Rigaku ZSX Primus IV X-ray Fluorescence (WDXRF)</h3>
                          <div className="pro-price">$19,990.00 USD</div>
                        </div>
                      </div>
                    </div>
                    {/* end col */}
                  </div>
                  {/* end row */}
                  <div className="pagination-wrapper">
                    <ul className="pagination">
                      <li className="page-item disabled">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">«</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item disabled">
                        <a className="page-link" href="#" aria-label="Previous">
                          <span aria-hidden="true">‹</span>
                          <span className="sr-only">Previous</span>
                        </a>
                      </li>
                      <li className="page-item"><a className="page-link" href="#">1</a></li>
                      <li className="page-item activepage"><a className="page-link" href="#">2</a></li>
                      <li className="page-item"><a className="page-link" href="#">3</a></li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">›</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                      <li className="page-item">
                        <a className="page-link" href="#" aria-label="Next">
                          <span aria-hidden="true">»</span>
                          <span className="sr-only">Next</span>
                        </a>
                      </li>
                    </ul>
                    <div className="page-filter mr-2">
                      <label>Show per page</label>
                      <select name="page_length">
                        <option value={12}>12</option>
                        <option value={18}>18</option>
                        <option value={24}>24</option>
                        <option value={30}>30</option>
                      </select> 
                    </div>
                  </div>
                </div>
                <div className="col-md-2 mt-4">
                  <div className="full-block mb-4 mt-5 pt-5">
                    <img src="assets/images/video-img.jpg" className="img-fluid" />
                  </div>
                  <div className="full-block mb-4">
                    <img src="assets/images/dummy-img.png" className="img-fluid" />
                  </div>
                  <div className="full-block mb-4">
                    <img src="assets/images/video-img.jpg" className="img-fluid" />
                  </div>
                  <div className="full-block mb-4">
                    <img src="assets/images/dummy-img.png" className="img-fluid" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end main */}

        {/* Optional JavaScript */}
        {/* jQuery first, then Popper.js, then Bootstrap JS */}
      </div>
        </div>
    )
}

export default Shop
