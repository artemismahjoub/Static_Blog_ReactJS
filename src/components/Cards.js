import React, { Component } from "react";
import styles from "./Cards.module.css";
import Card from "./Card";
import Image1 from "../images/1.jpg";
import Image3 from "../images/3.webp";

import Image7 from "../images/7.jpeg";
import Image8 from "../images/8.jpg";

export default class Cards extends Component {
  constructor() {
    super();
    this.state = {
      data: [
        { image: Image1, name: "Fairytale Tree Cottage", cost: "11000 US$" },
        { image: Image7, name: "House of Love", cost: "12000 US$" },
        { image: Image3, name: "Sweet Cottage by Lake", cost: "9690 US$" },
        { image: Image8, name: "Modern Hill Mansion", cost: "124000 US$" },
      ],
    };
  }

  render() {
    return (
      <div className={styles.container}>
        {this.state.data.map((item) => (
          <Card image={item.image} name={item.name} cost={item.cost} />
        ))}
      </div>
    );
  }
}
