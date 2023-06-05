import React, { useEffect, useState } from "react";
import s from "./d_portfolio.module.css";
import Card from "./Card";
import axios from "axios";

const D_Portfolio = ({ hidden, category }) => {
  const [selectedCategory, setSelectedCategory] = useState(category);
  const [portfolio, setPortfolio] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredPortfolio, setFilteredPortfolio] = useState([]);

  const getPortfolio = async () => {
    try {
      const response = await axios.get("http://localhost:5050/portfolio/getportfolio");
      console.log(response.data)
      setPortfolio(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getCategories = async () => {
    try {
      const response = await axios.get("http://localhost:5050/portfolio/getcategories");
      const allCategory = { category: "All" }; // Add an "All" category option
      setCategories([allCategory, ...response.data]);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getPortfolio();
    getCategories();
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredPortfolio(portfolio);
    } else {
      setFilteredPortfolio(
        portfolio.filter((item) =>
          item.category.toLowerCase() === selectedCategory.toLowerCase()
        )
      );
    }
  }, [selectedCategory, portfolio]);

  return (
    <div className={s.d_portfolio}>
      <div className={s.d_heading}>
        <span>Our Creative Work</span>
        <h3>Best And Latest Work</h3>

        {!hidden && (
          <div className={`${s.filter_button} container`}>
            {categories.map((category) => (
              <button
                key={category.category}
                id={category.category}
                onClick={() => setSelectedCategory(category.category)}
                className={selectedCategory === category.category ? s.active : ""}
              >
                {category.category}
              </button>
            ))}
          </div>
        )}

        <div className={s.portfolio}>
          <div className={`${s.card_container}`}>
            {filteredPortfolio.map((item) => (
              <Card
                key={item.title}
                title={item.title}
                link={item.link}
                category={item.category}
                image={item.image}
              ></Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default D_Portfolio;
