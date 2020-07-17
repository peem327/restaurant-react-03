import React, { Component } from "react";
import axios from "axios";
import ProductList from "../product/ProductList";
import Card from "../card/Card";
import Calculator from "./Calculator";
import Navbar from "./../header/Navbar";
import Model from "./../header/Model";

export class Monitor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      totalPrice: 0,
      orders: [],
      confirm: false,
      msg: "",
    };
    this.addOrder = this.addOrder.bind(this);
    this.delOrder = this.delOrder.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
    this.confirmOrder = this.confirmOrder.bind(this);

  }

  addOrder(product) {
    let findOrder = this.state.orders.find(
      (order) => order.product.id == product.id
    );
    if (findOrder) {
      findOrder.quantity++;
    } else {
      this.state.orders.push({ product: product, quantity: 1 });
    }
    const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
    this.setState({ totalPrice, order: this.state.orders });
  }

  delOrder(product) {
    let findOrder = this.state.orders.find(
      (order) => order.product.id == product.id
    );
    let resultOrder = this.state.orders.filter(
      (order) => order.product.id != product.id
    );

    const totalPrice = (this.state.totalPrice =
      this.state.totalPrice -
      findOrder.quantity * parseInt(findOrder.product.unitPrice));
    this.setState({ totalPrice, orders: resultOrder, confirm: false });
  }

  cancelOrder() {
    this.setState({ totalPrice: 0, orders: [], confirm: false });
  }

  confirmOrder() {
    const { orders, totalPrice } = this.state;
    if (orders && orders.length > 0) {
      axios
        .post("http://localhost:3004/orders", {
          orderedData: new Date(),
          totalPrice,
          orders,
        })
        .then((res) => {
          this.setState({
            totalPrice: 0,
            orders: [],
            confirm: true,
            msg: "บันทึกรายการสั่งซื้อเรียบร้อยค่ะ",
          });
        });
    } else {
      this.setState({
        totalPrice: 0,
        orders: [],
        confirm: true,
        msg: "เลือกสินค้าก่อนนะค่ะ",
      });
    }
  }

  showOrders(orders) {
    if (!orders || orders.length == 0) {
      return <li className="text-right text-muted title">ไม่มีสินค้าค่ะ</li>;
    } else {
      return orders.map((order) => {
        return (
          <li className="text-right text-success title">
            {order.product.productName} x {order.quantity} ={" "}
            {order.product.unitPrice * order.quantity}
            <button
              className="btn btn-light btn-sm"
              onClick={() => this.delOrder(order.product)}
            >
              X
            </button>
          </li>
        );
      });
    }
  }

 showModel(){
   return(
    <Model showOrders={this.showOrders} onCancelOrder={this.cancelOrder} onConfirmOrder={this.confirmOrder} />
   )

 }

  render() {
    return (
      <div>

        <ProductList onAddOrder={this.addOrder} product={this.props.product} showOrders={this.showOrders} onCancelOrder={this.cancelOrder}
          onConfirmOrder={this.confirmOrder} />
        {showModel}
        {/* <Calculator
          totalPrice={this.state.totalPrice}
          showOrders={this.showOrders}
          onCancelOrder={this.cancelOrder}
          onConfirmOrder={this.confirmOrder}
        />  */}
      </div>
    );
  }
}

export default Monitor;
