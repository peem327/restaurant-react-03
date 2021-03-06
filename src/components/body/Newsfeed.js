import React, { Component } from "react";

export class NewsFeed extends Component {
  render() {
    return (
      <div>
        <div className="container my-5">
          {/*Section: Content*/}
          <section className="magazine-section dark-grey-text">
            {/* Section heading */}
            <h3 className="text-center font-weight-bold mb-4 pb-2">
              Magazine newsfeed
            </h3>
            {/* Section description */}
            <p className="text-center w-responsive mx-auto mb-5">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla sint occaecat cupidatat non
              proident, sunt culpa qui officia deserunt est laborum.
            </p>
            {/* Grid row */}
            <div className="row">
              {/* Grid column */}
              <div className="col-lg-6 col-md-12 mb-4">
                {/* Featured news */}
                <div className="single-news">
                  {/* Image */}
                  <div className="view overlay rounded z-depth-1-half mb-4">
                    <img
                      className="img-fluid"
                      src="https://mdbootstrap.com/img/Photos/Slides/1.jpg"
                      alt="Sample image"
                    />
                    <a>
                      <div className="mask rgba-white-slight" />
                    </a>
                  </div>
                  {/* Data */}
                  <div className="news-data d-flex justify-content-between">
                    <a href="#!" className="deep-orange-text">
                      <h6 className="font-weight-bold">
                        <i className="fas fa-utensils pr-2" />
                        Culinary
                      </h6>
                    </a>
                    <p className="font-weight-bold dark-grey-text">
                      <i className="fas fa-clock-o pr-2" />
                      27/02/2018
                    </p>
                  </div>
                  {/* Excerpt */}
                  <h3 className="font-weight-bold dark-grey-text mb-3">
                    <a>Title of the news</a>
                  </h3>
                  <p className="dark-grey-text">
                    Sed ut perspiciatis unde voluptatem omnis iste natus error
                    sit voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae explicabo. Duis aute irure
                    dolor in reprehenderit in voluptate velit esse cillum dolore
                    eu fugiat.
                  </p>
                </div>
                {/* Featured news */}
              </div>
              {/* Grid column */}
              {/* Grid column */}
              <div className="col-lg-6 col-md-12 mb-4">
                {/* Small news */}
                <div className="single-news mb-4">
                  {/* Grid row */}
                  <div className="row">
                    {/* Grid column */}
                    <div className="col-md-3">
                      {/*Image*/}
                      <div className="view overlay rounded z-depth-1 mb-4">
                        <img
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Others/img%20(29).jpg"
                          alt="Sample image"
                        />
                        <a>
                          <div className="mask rgba-white-slight" />
                        </a>
                      </div>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-md-9">
                      {/* Excerpt */}
                      <p className="font-weight-bold dark-grey-text">
                        26/02/2018
                      </p>
                      <div className="d-flex justify-content-between">
                        <div className="col-11 text-truncate pl-0 mb-3">
                          <a href="#!" className="dark-grey-text">
                            At vero eos et accusamus et iusto odio dignissimos
                            ducimus qui blanditiis
                          </a>
                        </div>
                        <a>
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </div>
                    </div>
                    {/* Grid column */}
                  </div>
                  {/* Grid row */}
                </div>
                {/* Small news */}
                {/* Small news */}
                <div className="single-news mb-4">
                  {/* Grid row */}
                  <div className="row">
                    {/* Grid column */}
                    <div className="col-md-3">
                      {/*Image*/}
                      <div className="view overlay rounded z-depth-1 mb-4">
                        <img
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Horizontal/Food/4-col/img%20(45).jpg"
                          alt="Sample image"
                        />
                        <a>
                          <div className="mask rgba-white-slight" />
                        </a>
                      </div>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-md-9">
                      {/* Excerpt */}
                      <p className="font-weight-bold dark-grey-text">
                        25/02/2018
                      </p>
                      <div className="d-flex justify-content-between">
                        <div className="col-11 text-truncate pl-0 mb-3">
                          <a href="#!" className="dark-grey-text">
                            Itaque earum rerum hic tenetur a sapiente delectus
                          </a>
                        </div>
                        <a>
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </div>
                    </div>
                    {/* Grid column */}
                  </div>
                  {/* Grid row */}
                </div>
                {/* Small news */}
                {/* Small news */}
                <div className="single-news mb-4">
                  {/* Grid row */}
                  <div className="row">
                    {/* Grid column */}
                    <div className="col-md-3">
                      {/*Image*/}
                      <div className="view overlay rounded z-depth-1 mb-4">
                        <img
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Others/images/87.jpg"
                          alt="Sample image"
                        />
                        <a>
                          <div className="mask rgba-white-slight" />
                        </a>
                      </div>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-md-9">
                      {/* Excerpt */}
                      <p className="font-weight-bold dark-grey-text">
                        24/02/2018
                      </p>
                      <div className="d-flex justify-content-between">
                        <div className="col-11 text-truncate pl-0 mb-3">
                          <a href="#!" className="dark-grey-text">
                            Soluta nobis est eligendi optio cumque nihil impedit
                            quo minus
                          </a>
                        </div>
                        <a>
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </div>
                    </div>
                    {/* Grid column */}
                  </div>
                  {/* Grid row */}
                </div>
                {/* Small news */}
                {/* Small news */}
                <div className="single-news">
                  {/* Grid row */}
                  <div className="row">
                    {/* Grid column */}
                    <div className="col-md-3">
                      {/*Image*/}
                      <div className="view overlay rounded z-depth-1 mb-md-0 mb-4">
                        <img
                          className="img-fluid"
                          src="https://mdbootstrap.com/img/Photos/Others/img%20(27).jpg"
                          alt="Sample image"
                        />
                        <a>
                          <div className="mask rgba-white-slight" />
                        </a>
                      </div>
                    </div>
                    {/* Grid column */}
                    {/* Grid column */}
                    <div className="col-md-9">
                      {/* Excerpt */}
                      <p className="font-weight-bold dark-grey-text">
                        23/02/2018
                      </p>
                      <div className="d-flex justify-content-between">
                        <div className="col-11 text-truncate pl-0 mb-lg-3">
                          <a href="#!" className="dark-grey-text">
                            Duis aute irure dolor in reprehenderit in voluptate
                          </a>
                        </div>
                        <a>
                          <i className="fas fa-angle-double-right" />
                        </a>
                      </div>
                    </div>
                    {/* Grid column */}
                  </div>
                  {/* Grid row */}
                </div>
                {/* Small news */}
              </div>
              {/*Grid column*/}
            </div>
            {/* Grid row */}
          </section>
          {/*Section: Content*/}
        </div>
      </div>
    );
  }
}

export default NewsFeed;
