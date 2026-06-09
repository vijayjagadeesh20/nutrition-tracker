import { useEffect, useState, useContext } from "react";
import { UserContext } from "../contexts/context";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

export default function Diet() {
  const loggedData = useContext(UserContext);
  const navigate = useNavigate();

  const [items, setItems] = useState([]);
  const [date, setDate] = useState(new Date());

  const [total, setTotal] = useState({
    totalQuantity: 0,
    totalCalories: 0,
    totalProtein: 0,
    totalCarbs: 0,
    totalFat: 0,
  });

  function formatDateForInput(dateValue) {
    const year = dateValue.getFullYear();
    const month = String(dateValue.getMonth() + 1).padStart(2, "0");
    const day = String(dateValue.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function formatDateForBackend(dateValue) {
    const month = String(dateValue.getMonth() + 1).padStart(2, "0");
    const day = String(dateValue.getDate()).padStart(2, "0");
    const year = dateValue.getFullYear();

    return `${month}-${day}-${year}`;
  }

  useEffect(() => {
    if (!loggedData.loggedUser) {
      console.log("No logged user found");
      return;
    }

    const formattedDate = formatDateForBackend(date);

    fetch(
      `http://localhost:5000/track/${loggedData.loggedUser.id}/${formattedDate}`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Diet data:", data);

        if (Array.isArray(data)) {
          setItems(data);
        } else {
          setItems([]);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [date, loggedData.loggedUser]);

  useEffect(() => {
    calculateTotal();
  }, [items]);

  function calculateTotal() {
    let totalCopy = {
      totalQuantity: 0,
      totalCalories: 0,
      totalProtein: 0,
      totalCarbs: 0,
      totalFat: 0,
    };

    items.forEach((item) => {
      totalCopy.totalCalories += Number(item.details?.calories || 0);
      totalCopy.totalProtein += Number(item.details?.protein || 0);
      totalCopy.totalCarbs += Number(item.details?.carbs || 0);
      totalCopy.totalFat += Number(item.details?.fat || 0);
      totalCopy.totalQuantity += Number(item.quantity || 0);
    });

    setTotal(totalCopy);
  }

  function deleteTrackedFood(trackid) {
    fetch(`http://localhost:5000/track/${trackid}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Delete response:", data);

        if (data.success) {
          setItems((prevItems) =>
            prevItems.filter((item) => item.trackid !== trackid)
          );
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Header />

      <div className="diet-page">
        <section className="container diet-dashboard">
          <div className="diet-hero">
            <div>
              <span className="diet-badge">Daily Nutrition Summary</span>
              <h1>Your Diet Dashboard</h1>
              <p>
                Review your tracked Indian meals, check calories and macros, and
                manage today’s nutrition log.
              </p>
            </div>

            <div className="diet-date-card">
              <label>Select Date</label>
              <input
                type="date"
                value={formatDateForInput(date)}
                onChange={(event) => {
                  setDate(new Date(event.target.value + "T00:00:00"));
                }}
              />
            </div>
          </div>

          <div className="macro-stats">
            <div className="macro-card">
              <span>Calories</span>
              <h3>{total.totalCalories.toFixed(1)}</h3>
              <p>kcal</p>
            </div>

            <div className="macro-card">
              <span>Protein</span>
              <h3>{total.totalProtein.toFixed(1)}</h3>
              <p>grams</p>
            </div>

            <div className="macro-card">
              <span>Carbs</span>
              <h3>{total.totalCarbs.toFixed(1)}</h3>
              <p>grams</p>
            </div>

            <div className="macro-card">
              <span>Fat</span>
              <h3>{total.totalFat.toFixed(1)}</h3>
              <p>grams</p>
            </div>
          </div>

          {items.length === 0 ? (
            <div className="diet-empty-state">
              <div className="empty-icon">🍱</div>

              <div>
                <span>No meals logged for this date</span>
                <h2>Start tracking your food</h2>
                <p>
                  Add South Indian, North Indian, snacks, drinks, fruits, and
                  home-cooked foods to build your daily nutrition summary.
                </p>

                <button onClick={() => navigate("/track")}>
                  Add Food Now
                </button>
              </div>
            </div>
          ) : (
            <div className="diet-layout">
              <div className="diet-items-grid">
                {items.map((item, index) => {
                  return (
                    <div className="item diet-card" key={item.trackid || index}>
                      <button
                        type="button"
                        className="delete-food-btn"
                        onClick={() => deleteTrackedFood(item.trackid)}
                      >
                        ×
                      </button>

                      <span className="food-tag">Tracked Meal</span>

                      <h3>{item.foodname}</h3>

                      <p>
                        <span>Quantity</span>
                        <span>{item.quantity} g</span>
                      </p>

                      <p>
                        <span>Calories</span>
                        <span>{item.details?.calories}</span>
                      </p>

                      <p>
                        <span>Protein</span>
                        <span>{item.details?.protein} g</span>
                      </p>

                      <p>
                        <span>Carbs</span>
                        <span>{item.details?.carbs} g</span>
                      </p>

                      <p>
                        <span>Fat</span>
                        <span>{item.details?.fat} g</span>
                      </p>
                    </div>
                  );
                })}
              </div>

              <div className="item summary-card diet-summary-sticky">
                <h3>Today's Total</h3>

                <p>
                  <span>Total Quantity</span>
                  <span>{total.totalQuantity} g</span>
                </p>

                <p>
                  <span>Total Calories</span>
                  <span>{total.totalCalories.toFixed(1)}</span>
                </p>

                <p>
                  <span>Total Protein</span>
                  <span>{total.totalProtein.toFixed(1)} g</span>
                </p>

                <p>
                  <span>Total Carbs</span>
                  <span>{total.totalCarbs.toFixed(1)} g</span>
                </p>

                <p>
                  <span>Total Fat</span>
                  <span>{total.totalFat.toFixed(1)} g</span>
                </p>

                <button
                  type="button"
                  className="add-more-food-btn"
                  onClick={() => navigate("/track")}
                >
                  Add More Food
                </button>
              </div>
            </div>
          )}
        </section>
      </div>
    </>
  );
}