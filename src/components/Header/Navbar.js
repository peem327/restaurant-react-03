import React, { Component } from "react";
import { Link } from "react-router-dom";
import Calculator from "./../monitor/Calculator";

export class Navbar extends Component {
  render() {
    return (
      <div className="">
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-light white scrolling-navbar ">
          <div className="container">
            {/* Brand */}
            <Link className="navbar-brand waves-effect" to="/">
              <strong className="blue-text">Thai Food</strong>
            </Link>
            {/* Collapse */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            {/* Links */}
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              {/* Left */}
              <ul className="navbar-nav mr-auto">
                <li className="nav-item ">
                  <Link className="nav-link waves-effect" to="/">
                    Home
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link waves-effect" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link waves-effect" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
              {/* Right */}
              <ul className="navbar-nav nav-flex-icons">
                <li className="nav-item">
                  <div
                    type="button"
                    className="nav-link waves-effect"
                    data-toggle="modal"
                    data-target="#basicExampleModal"
                  >
                    <span className="badge red z-depth-1 mr-1"> 1 </span>
                    <i className="fas fa-shopping-cart" />
                    <span className="clearfix d-none d-sm-inline-block">
                      {" "}
                      Cart{" "}
                    </span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div>
          {/* Modal */}
          <div
            className="modal fade"
            id="basicExampleModal"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">
                    Modal title
                  </h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <h1 className="text-right">{this.props.totalPrice}</h1>
                  <hr />
                  <ul className="list-unstyled">
                    {/* {this.props.showOrders(this.props.orders)} */}
                  </ul>
                  <hr />
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                    onClick={() => this.props.onCancelOrder()}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => this.props.onConfirmOrder()}
                  >
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
