import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/context";
import foodMenu from "../assets/food-menus.png"



export default function Food(props) {
  const [grams, setGrams] = useState(100);
  const [food, setFood] = useState({});
  const [message, setMessage] = useState("");

  const loggedData = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    setFood(props.food);
    setGrams(100);
    setMessage("");
  }, [props.food]);

  function calculateMacros(event) {
    const quantity = Number(event.target.value);

    if (!quantity || quantity <= 0) {
      setFood(props.food);
      setGrams(100);
      return;
    }

    const copyFood = {
      ...props.food,
      protein: ((props.food.protein * quantity) / 100).toFixed(1),
      carbs: ((props.food.carbs * quantity) / 100).toFixed(1),
      fat: ((props.food.fat * quantity) / 100).toFixed(1),
      calories: ((props.food.calories * quantity) / 100).toFixed(1),
    };

    setFood(copyFood);
    setGrams(quantity);
  }

  function trackFoodItem() {
    if (!loggedData.loggedUser) {
      alert("Please login first");
      navigate("/login");
      return;
    }

    let trackedItem = {
      userid: loggedData.loggedUser.id,
      foodid: food.id,
      foodname: food.name,
      details: {
        protein: food.protein,
        carbs: food.carbs,
        fat: food.fat,
        calories: food.calories,
      },
      quantity: grams,
      date: `${String(new Date().getMonth() + 1).padStart(2, "0")}-${String(
        new Date().getDate()
      ).padStart(2, "0")}-${new Date().getFullYear()}`,
    };

    fetch("https://nutrition-tracker-api-0fxs.onrender.com/track", {
      method: "POST",
      body: JSON.stringify(trackedItem),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);

        if (data.success) {
          setMessage(`${food.name} added to today's diet`);

          setTimeout(() => {
            setMessage("");
          }, 2500);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage("Failed to track food");
      });
  }

  return (
    <div className="food">
      <div className="food-img">
        <img src={foodMenu} alt="" className="w-100" />
      </div>

      {message && <p className="track-success-msg">{message}</p>}

      <h2>{food.name}</h2>

      <p className="serving-info">Nutrition per {grams}g</p>

      <p>
        <strong>Calories:</strong> {food.calories} Kcal
      </p>

      <p>
        <strong>Protein:</strong> {food.protein} g
      </p>

      <p>
        <strong>Carbs:</strong> {food.carbs} g
      </p>

      <p>
        <strong>Fat:</strong> {food.fat} g
      </p>

      <input
        type="number"
        min="1"
        value={grams}
        onChange={calculateMacros}
        placeholder="Qty in Gms"
      />

      <button onClick={trackFoodItem} className="track-btn">
       Add Meal
      </button>

      <button
        type="button"
        onClick={() => navigate("/diet")}
        className="view-diet-btn"
      >
        View Diet Summary
      </button>
    </div>
  );
}