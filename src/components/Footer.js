import React, { Component } from 'react'


export class Footer extends Component {

    render() {
        return (
            <div>
            {/* Footer */}
            <footer className="page-footer font-small unique-color-dark">
              {/* Footer Links */}
              <div className="container text-center text-md-left ">
                {/* Grid row */}
                <div className="row">
                  {/* Grid column */}
                  <div className="col-md-4 col-lg-5 col-xl-4 mx-auto mb-4 my-3">
                    {/* Content */}
                    <h5 className="text-uppercase font-weight-bold">Subscribe</h5>
                    <hr
                      className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                      style={{ width: 60 }}
                    />
                    <p>
                      Register and get notified about all the news & updates before it gets too late
                    </p>
                    <form className="input-group">
                      <input
                        type="text"
                        className="form-control form-control rgba-white-light white-text border-0 z-depth-0"
                        placeholder="Your email"
                        aria-label="Your email"
                        aria-describedby="basic-addon2"
                      />
                      <div className="input-group-append">
                        <button
                          className="btn btn-sm btn-info my-0"
                          type="button"
                        >
                          Sign up
                        </button>
                      </div>
                    </form>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4 my-3">
                    {/* Links */}
                    <h6 className="text-uppercase font-weight-bold">
                      Useful links
                    </h6>
                    <hr
                      className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                      style={{ width: 60 }}
                    />
                    <p>
                      <a href="#!">Your Account</a>
                    </p>
                    <p>
                      <a href="#!">Become an Affiliate</a>
                    </p>
                    <p>
                      <a href="#!">Shipping Rates</a>
                    </p>
                    <p>
                      <a href="#!">Help</a>
                    </p>
                  </div>
                  {/* Grid column */}
                  {/* Grid column */}
                  <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mb-md-0 mb-4 my-3">
                    {/* Links */}
                    <h6 className="text-uppercase font-weight-bold">Contact</h6>
                    <hr
                      className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
                      style={{ width: 60 }}
                    />
                    <p>
                      <i className="fas fa-home mr-3" /> New York, NY 10012, US
                    </p>
                    <p>
                      <i className="fas fa-envelope mr-3" /> info@example.com
                    </p>
                    <p>
                      <i className="fas fa-phone mr-3" /> + 01 234 567 88
                    </p>
                    <p>
                      <i className="fas fa-print mr-3" /> + 01 234 567 89
                    </p>
                  </div>
                  {/* Grid column */}
                </div>
              </div>
            </footer>
          </div>
        )
    }
}

export default Footer
