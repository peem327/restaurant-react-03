import React, { Component } from "react";

class Social extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="">
          <section
            style={{
              backgroundImage: 'url("images/bg/bg2.jpg")',
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div
              className="modal fade"
              id="modal1"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div
                className="modal-dialog modal-lg modal-dialog-centered"
                role="document"
              >
                <div className="modal-content">
                  <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                    <iframe
                      width={560}
                      height={315}
                      src="https://www.youtube.com/embed/y-36VBE2U_E"
                      frameBorder={0}
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mask rgba-black-strong py-5 ">
              <div className="container text-center my-5 social">
                <h3 className="font-weight-bold text-center white-text pb-2 ">
                  Watch Video
                </h3>
                <hr className="w-header hr-light my-4" />
                <p className="lead text-center white-text pt-2 mb-5">
                  Explore the best MDB template in the market in a short
                  1-minute video.
                </p>
                <a
                  id="play"
                  className="btn-floating btn-cyan btn-lg"
                  data-toggle="modal"
                  data-target="#modal1"
                >
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* instagram */}
        
      </div>
    );
  }
}

export default Social;
