import React, { Component } from "react";

export class Head extends Component {
  render() {
    return (
      <div>
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="images/bg/1.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block shadow-lg p-5 mb-5 rounded">
                <h1 className="font-Regular">Tom Yum Kung</h1>
                <h4>
                  <strong>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </strong>
                </h4>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/bg/2.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block shadow-lg p-5 mb-5 rounded ">
                <h1 className="font-Regular">Green papaya salad</h1>
                <h4>
                  <strong>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </strong>
                </h4>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="images/bg/3.jpg"
                className="d-block w-100"
                alt="..."
              />
              <div className="carousel-caption d-none d-md-block shadow-lg p-5 mb-5 rounded">
                <h1 className="font-Regular">Grilled chicken</h1>
                <h4>
                  <strong>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </strong>
                </h4>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleFade"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleFade"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  }
}

export default Head;
