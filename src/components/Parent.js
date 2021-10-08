import { Component } from "react";
import React from "react";
import Cardealer from "./Cardealer";

class Parent extends Component {
  state = {
    carDealer: false,
  };

  Komponen1 = () => {
    this.setState(() => {
      return {
        carDealer: !this.state.carDealer,
      };
    });
  };

  render() {
    return (
      <>
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Toko Obat Online Kelompok 3
        </h2>
        <div style={{ display: "flex" }}>
          <div
            style={{ width: "100%" }}
            className="text-2xl font-extrabold tracking-tight text-gray-900"
          >
            <button onClick={this.Komponen1}>Beli</button>
            {this.state.carDealer && <Cardealer />}
          </div>
        </div>
      </>
    );
  }
}

export default Parent;
