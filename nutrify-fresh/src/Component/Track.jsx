import { useContext, useState } from "react";
import { UserContext } from "../contexts/context";
import Food from "./Food";
import Header from "./Header";

import trackIcon from "../assets/food-meal.png"

import noFoodBanner from "../assets/no-food-banner.png"

export default function Track() {
  const loggedData = useContext(UserContext);

  const [fooditems, setFoodItems] = useState([]);
  const [searched, setSearched] = useState(false);
  const [food, setFood] = useState(null);
  const [keyword, setKeyword] = useState("");

  function searchFood(event) {
    const value = event.target.value;
    setKeyword(value);

    if (value.trim() !== "") {
      setSearched(true);

      fetch(`https://nutrition-tracker-api-0fxs.onrender.com/foods?q=${value}`)
        .then((response) => response.json())
        .then((data) => {
          setFoodItems(data);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setFoodItems([]);
      setSearched(false);
      setFood(null);
    }
  }

  function quickSearch(foodName) {
    setKeyword(foodName);
    setSearched(true);

    fetch(`https://nutrition-tracker-api-0fxs.onrender.com/foods?q=${foodName}`)
      .then((response) => response.json())
      .then((data) => {
        setFoodItems(data);

        if (data.length > 0) {
          setFood(data[0]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header />

      <div className="main-bg track-page">
        <section className="container track-wrapper">
          <div className="track-hero">
            <span className="track-badge">Smart Nutrition Tracker</span>

            <h1>Track Your Indian Meals Instantly</h1>

            <p>
              Search South Indian, North Indian, snacks, drinks, fruits, and
              everyday home foods. Adjust quantity and track calories, protein,
              carbs, and fat in seconds.
            </p>

            <div className="quick-foods">
              <button onClick={() => quickSearch("Idli")}>Idli</button>
              <button onClick={() => quickSearch("Dosa")}>Dosa</button>
              <button onClick={() => quickSearch("Chapati")}>Chapati</button>
              <button onClick={() => quickSearch("Chicken Biryani")}>
                Biryani
              </button>
              <button onClick={() => quickSearch("Paneer")}>Paneer</button>
              <button onClick={() => quickSearch("Dal")}>Dal</button>
            </div>
          </div>

          <div className="track-content">
            <div className="search-panel">
              <div className="search-heading">
                <div>
                  <h2>Find Food</h2>
                  <p>Start typing a food name to view nutrition details.</p>
                </div>

                <span><img src={trackIcon} alt="" /></span>
              </div>

              <div className="search-box">
                <input
                  type="search"
                  value={keyword}
                  onChange={searchFood}
                  className="search-inpt"
                  placeholder="Search food item..."
                />
              </div>

              {fooditems.length !== 0 ? (
                <div className="search-results">
                  {fooditems.map((item) => {
                    return (
                      <div
                        className="search-item"
                        onClick={() => {
                          setFood(item);
                          setKeyword(item.name);
                        }}
                        key={item.id}
                      >
                        <div>
                          <strong>{item.name}</strong>
                          <small>{item.calories} kcal per 100g</small>
                        </div>

                        <span>View</span>
                      </div>
                    );
                  })}
                </div>
              ) : searched ? (
                <div className="search-results">
                  <div className="search-item not-found-item">
                    <div>
                      <strong>Food item not found</strong>
                      <small>Try another Indian food name.</small>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="empty-search-card">
                  <h3>Popular searches</h3>
                  <p>
                    Try Idli, Dosa, Chapati, Dal Tadka, Paneer, Biryani, Apple,
                    Banana, or Filter Coffee.
                  </p>
                </div>
              )}
            </div>

            <div className="food-preview-panel">
              {food !== null ? (
                <Food food={food} />
              ) : (
                <div className="food-empty-state">
                  <div className="food-empty-icon">
                    <img src={noFoodBanner} alt="" className="w-100" />
                  </div>
                  <h2>No Food Selected</h2>
                  <p>
                    Select a food item from the search results to calculate
                    macros and add it to your daily diet.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}