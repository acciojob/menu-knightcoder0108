import React, { useState } from "react";
import menuItems from "../RestaurantData";

function App() {
  const [items, setItems] = useState(menuItems);

  const filterItems = (category) => {
    if (category === "all") {
      setItems(menuItems);
    } else {
      setItems(menuItems.filter((item) => item.category === category));
    }
  };

  return (
    <main id="main">
      <section className="menu section">
        <div className="title">
          <h2>Our Menu</h2>
          <div className="underline"></div>
        </div>
        <div className="btn-container">
          <button
            className="filter-btn"
            id="filter-btn-all"
            onClick={() => filterItems("all")}
          >
            All
          </button>
          <button
            className="filter-btn"
            id="filter-btn-1"
            onClick={() => filterItems("breakfast")}
          >
            Breakfast
          </button>
          <button
            className="filter-btn"
            id="filter-btn-2"
            onClick={() => filterItems("lunch")}
          >
            Lunch
          </button>
          <button
            className="filter-btn"
            id="filter-btn-3"
            onClick={() => filterItems("shakes")}
          >
            Shakes
          </button>
        </div>
        <div className="section-center">
          {items.map((menuItem) => {
            const { id, title, img, desc, price, category } = menuItem;
            return (
              <article
                key={id}
                className="menu-item"
                data-test-id={`menu-item-${category}`}
              >
                <img src={img} alt={title} className="photo" />
                <div className="item-info">
                  <header>
                    <h4>{title}</h4>
                    <h4 className="price">${price}</h4>
                  </header>
                  <p className="item-text">{desc}</p>
                </div>
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
}

export default App;