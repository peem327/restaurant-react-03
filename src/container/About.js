import React, { Component } from "react";

export class About extends Component {
  render() {
    return (
      <div>
        <div className="container my-5">
          <section className="dark-grey-text">
            <h3 className="text-center font-weight-bold mb-4 pb-2">
              Our best projects
            </h3>
            <p className="text-center text-muted w-responsive mx-auto mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
            <div className="row">
              <div className="col-lg-5 mb-lg-0 mb-5">
                <img
                  src="https://mdbootstrap.com/img/Photos/Others/images/83.jpg"
                  className="img-fluid rounded z-depth-1"
                  alt="Sample project image"
                />
              </div>
              <div className="col-lg-7">
                <ul className="list-unstyled fa-ul mb-0">
                  <li className="d-flex justify-content-center pl-4">
                    <span className="fa-li">
                      <i className="fas fa-book fa-2x cyan-text" />
                    </span>
                    <div>
                      <h5 className="font-weight-bold mb-3">Education</h5>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                        Reprehenderit maiores nam, aperiam minima elit assumenda
                        voluptate velit.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex justify-content-center pl-4">
                    <span className="fa-li">
                      <i className="fas fa-code fa-2x red-text" />
                    </span>
                    <div>
                      <h5 className="font-weight-bold mb-3">Technology</h5>
                      <p className="text-muted">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                        Reprehenderit maiores nam, aperiam minima elit assumenda
                        voluptate velit.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex justify-content-center pl-4">
                    <span className="fa-li">
                      <i className="far fa-money-bill-alt fa-2x deep-purple-text" />
                    </span>
                    <div>
                      <h5 className="font-weight-bold mb-3">Finance</h5>
                      <p className="text-muted mb-0">
                        Lorem ipsum dolor sit amet, consectetur adipisicing.
                        Reprehenderit maiores nam, aperiam minima elit assumenda
                        voluptate velit.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
              {/* Grid column */}
            </div>
            {/* Grid row */}
            <hr className="my-5" />
          </section>
          {/* Section: Block Content */}
        </div>
      </div>
    );
  }
}

export default About;
