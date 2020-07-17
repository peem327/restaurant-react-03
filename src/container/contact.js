import React, { Component } from "react";

export class contact extends Component {
  render() {
    return (
      <div>
        <div className="container my-5 py-5 z-depth-1">
          {/*Section: Content*/}
          <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n    .map-container {\n      height: 200px;\n      position: relative;\n    }\n\n    .map-container iframe {\n      left: 0;\n      top: 0;\n      height: 100%;\n      width: 100%;\n      position: absolute;\n    }\n  ",
              }}
            />
            {/*Google map*/}
            <div
              id="map-container-google-1"
              className="z-depth-1 map-container mb-5"
            >
              <iframe
                src="https://maps.google.com/maps?q=manhatan&t=&z=13&ie=UTF8&iwloc=&output=embed"
                frameBorder={0}
                style={{ border: 0 }}
                allowFullScreen
              />
            </div>
            {/*Google Maps*/}
            {/*Grid row*/}
            <div className="row">
              {/*Grid column*/}
              <div className="col-lg-5 col-md-12 mb-0 mb-md-0">
                <h3 className="font-weight-bold">Contact Us</h3>
                <p className="text-muted">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id
                  quam sapiente molestiae numquam quas, voluptates omnis nulla
                  ea odio quia similique corrupti magnam, doloremque laborum.
                </p>
                <p>
                  <span className="font-weight-bold mr-2">Email:</span>
                  <a href>contact@mycompany.com</a>
                </p>
                <p>
                  <span className="font-weight-bold mr-2">Phone:</span>
                  <a href>+48 123 456 789</a>
                </p>
              </div>
              {/*Grid column*/}
              {/*Grid column*/}
              <div className="col-lg-7 col-md-12 mb-4 mb-md-0">
                {/*Grid row*/}
                <div className="row">
                  {/*Grid column*/}
                  <div className="col-md-6">
                    {/* Material outline input */}
                    <div className="md-form md-outline mb-0">
                      <input
                        type="text"
                        id="form-first-name"
                        className="form-control"
                      />
                      <label htmlFor="form-first-name">First name</label>
                    </div>
                  </div>
                  {/*Grid column*/}
                  {/*Grid column*/}
                  <div className="col-md-6">
                    {/* Material outline input */}
                    <div className="md-form md-outline mb-0">
                      <input
                        type="text"
                        id="form-last-name"
                        className="form-control"
                      />
                      <label htmlFor="form-last-name">Last name</label>
                    </div>
                  </div>
                  {/*Grid column*/}
                </div>
                {/*Grid row*/}
                {/* Material outline input */}
                <div className="md-form md-outline mt-3">
                  <input
                    type="email"
                    id="form-email"
                    className="form-control"
                  />
                  <label htmlFor="form-email">E-mail</label>
                </div>
                {/* Material outline input */}
                <div className="md-form md-outline">
                  <input
                    type="text"
                    id="form-subject"
                    className="form-control"
                  />
                  <label htmlFor="form-subject">Subject</label>
                </div>
                {/*Material textarea*/}
                <div className="md-form md-outline mb-3">
                  <textarea
                    id="form-message"
                    className="md-textarea form-control"
                    rows={3}
                    defaultValue={""}
                  />
                  <label htmlFor="form-message">How we can help?</label>
                </div>
                <button type="submit" className="btn btn-info btn-sm ml-0">
                  Submit
                  <i className="far fa-paper-plane ml-2" />
                </button>
              </div>
              {/*Grid column*/}
            </div>
            {/*Grid row*/}
          </section>
          {/*Section: Content*/}
        </div>
      </div>
    );
  }
}

export default contact;
