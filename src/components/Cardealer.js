import React from "react";
import "./Cardealer";
import mobil2 from "../components/mobil2.jpg";
import Cardobat from "./Cardobat";
import obatpusing from "../components/obatpusing.jpg";
import obatperut from "../components/obatsakitperut.jpg";
import obatmaag from "../components/obatmaag.jpg";
import obatbatuk from "../components/obatbatuk.jpg";
import obatflu from "../components/obatflu.jpg";
import obatantiseptic from "../components/obatantiseptic.jpg";
import obatkulit from "../components/obatkulit.jpg";
import obatpegel from "../components/obatpegel.jpg";

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
        { name: "Obat Pusing", price: 20000, image: obatpusing },
        { name: "Obat Sakit Perut", price: 25000, image: obatperut },
        { name: "Obat Maag", price: 25000, image: obatmaag },
        { name: "Obat Batuk", price: 30000, image: obatbatuk },
        { name: "Obat Flu", price: 50000, image: obatflu },
        { name: "Obat Antiseptic", price: 30000, image: obatantiseptic },
        { name: "Obat Kulit", price: 50000, image: obatkulit },
        { name: "Obat Pegel", price: 35000, image: obatpegel },
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
