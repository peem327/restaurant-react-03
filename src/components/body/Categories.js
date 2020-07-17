import React, { Component } from "react";
// import { Link } from "./node_modules/react-router-dom";

export class Categories extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             
        }
    }
    // showFood(){
    //     if(this.props.){

    //     }
    // }
    
  render() {
    return (
      <div className="container-fluid z-depth-1">
        <div className="container pt-5 mb-3 ">
          <section className="p-md-3 mx-md-5 text-center text-lg-left ">
            <h3 className="text-center mx-auto mb-4 pb-2 font-Regular">
              Choose a Category
            </h3>
            <h1 className="text-center mx-auto font-weight-bold mb-4 pb-2">
              Recipe Categories
            </h1>
            <div className="row">
              <button className="col-md-4 Category btn btn-link " type="submit" onClick={()=>this.props.onProductCategory("food")}>
                <div className="avatar w-100 white d-flex justify-content-center align-items-center">
                  <img
                    src="\images\food\1.jpg"
                    className="img-fluid rounded-circle  "
                  />
                </div>
                <div className="text-center mt-3">
                  <h6 className="font-weight-bold pt-2">Food</h6>
                </div>
              </button>
              <button className="col-md-4 Category btn btn-link " type="submit" onClick={()=>this.props.onProductCategory('dessert')}>
                <div className="avatar w-100 white d-flex justify-content-center align-items-center">
                  <img
                    src="\images\dessert\Thong-yod.jpg"
                    className="img-fluid rounded-circle  "
                  />
                </div>
                <div className="text-center mt-3">
                  <h6 className="font-weight-bold pt-2">dessert</h6>
                </div>
              </button>
              <button className="col-md-4 Category btn btn-link " type="submit" onClick={()=>this.props.onProductCategory('drink')}>
                <div className="avatar w-100 white d-flex justify-content-center align-items-center">
                  <img
                    src="\images\drink\drink.jpg"
                    className="img-fluid rounded-circle  "
                  />
                </div>
                <div className="text-center mt-3">
                  <h6 className="font-weight-bold pt-2">drink</h6>
                </div>
              </button>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Categories;
