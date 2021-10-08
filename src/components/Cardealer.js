import React from "react";
import "./Cardealer";
import mobil2 from "../components/mobil2.jpg";
import Cardobat from "./Cardobat";

class Cardealer extends React.Component {
  constructor(props) {
    super(props);
    /*     this.carquantity = this.carquantity.bind(this); */
    this.state = {
      mobil: [],
      beli: {
        belanja: 0,
      },

      Hargamobil: 0,
      Quantity: 0,
      HargaTotal: 0,
    };
  }

  componentDidMount() {
    this.setState({
      mobil: [
        { name: "Lamborghini Aventador", price: 300000, image: mobil2 },
        { name: "Lamborghini Aventador", price: 300000, image: mobil2 },
        { name: "Lamborghini Aventador", price: 300000, image: mobil2 },
        { name: "Lamborghini Aventador", price: 300000, image: mobil2 },
        { name: "Lamborghini Aventador", price: 300000, image: mobil2 },
        { name: "Lamborghini Aventador", price: 300000, image: mobil2 },
        { name: "Lamborghini Aventador", price: 300000, image: mobil2 },
        { name: "Lamborghini Aventador", price: 300000, image: mobil2 },
      ],
    });
  }

  render() {
    const { mobil } = this.state;

    return (
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-extrabold tracking-tight text-gray-900">
            MAU BELI OBAT APA?
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {mobil.length !== 0 &&
              mobil.map((product, index) => (
                <Cardobat
                  key={index}
                  price={product.price}
                  name={product.name}
                  image={product.image}
                />
              ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Cardealer;
