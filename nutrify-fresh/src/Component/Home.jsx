import Header from "./Header";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <Header />

      <main className="home-page">
        {/* Hero Section */}
        <section className="home-hero">
          <div className="container home-hero-container">
            <div className="home-hero-content">
              <span className="home-badge">Indian Food Nutrition Tracker</span>

              <h1>
                Track Every Meal.
                <br />
                Understand Every Calorie.
              </h1>

              <p>
                NutriTrack helps you monitor calories, protein, carbs, fat, and
                quantity for everyday Indian foods including South Indian, North
                Indian, snacks, drinks, fruits, and home-cooked meals.
              </p>

              <div className="home-actions">
                <Link to="/track" className="home-primary-btn text-decoration-none">
                  Start Tracking
                </Link>

                <Link to="/diet" className="home-secondary-btn text-decoration-none">
                  View Diet Summary
                </Link>
              </div>

              <div className="home-stats">
                <div>
                  <h3>100+</h3>
                  <span>Indian Foods</span>
                </div>

                <div>
                  <h3>4</h3>
                  <span>Macro Metrics</span>
                </div>

                <div>
                  <h3>Daily</h3>
                  <span>Diet Summary</span>
                </div>
              </div>
            </div>

            <div className="home-hero-visual">
              <div className="nutrition-card floating-card card-one">
                <span>Calories</span>
                <h3>774 kcal</h3>
                <p>Today&apos;s intake</p>
              </div>

              <div className="nutrition-card floating-card card-two">
                <span>Protein</span>
                <h3>42 g</h3>
                <p>Muscle support</p>
              </div>

              <div className="food-orbit">
                <div className="main-food-circle">
                  <span>🍛</span>
                </div>

                <div className="orbit-item item-1">🥗</div>
                <div className="orbit-item item-2">🍚</div>
                <div className="orbit-item item-3">🥘</div>
                <div className="orbit-item item-4">🍎</div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature Cards */}
        <section className="home-section">
          <div className="container">
            <div className="section-title">
              <span>Why NutriTrack?</span>
              <h2>Built for real Indian eating habits</h2>
              <p>
                Most trackers focus on generic foods. NutriTrack is designed
                around the meals Indians actually eat every day.
              </p>
            </div>

            <div className="feature-grid">
              <div className="feature-card">
                <div className="feature-icon">🍽️</div>
                <h3>Track Indian Foods</h3>
                <p>
                  Search and track foods like idli, dosa, chapati, biryani,
                  dal, paneer, poha, fruits, snacks, coffee, tea, and more.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">⚖️</div>
                <h3>Quantity Based Nutrition</h3>
                <p>
                  Enter food quantity in grams and instantly calculate calories,
                  protein, carbs, and fat based on your serving size.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">📊</div>
                <h3>Daily Diet Summary</h3>
                <p>
                  View your full daily intake with total calories, total
                  quantity, protein, carbs, and fat in one clean dashboard.
                </p>
              </div>

              <div className="feature-card">
                <div className="feature-icon">🔥</div>
                <h3>Simple Macro Control</h3>
                <p>
                  Understand what you eat and make better choices for weight
                  loss, muscle gain, maintenance, or healthier eating.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Food Coverage */}
        <section className="home-section food-section">
          <div className="container food-section-container">
            <div className="food-content">
              <span className="home-badge">Food Database</span>

              <h2>From Idli to Biryani, track it all</h2>

              <p>
                NutriTrack includes a wide range of Indian food categories so
                users can track both traditional meals and everyday modern
                eating patterns.
              </p>

              <div className="food-tags">
                <span>South Indian</span>
                <span>North Indian</span>
                <span>Rice Items</span>
                <span>Breakfast</span>
                <span>Snacks</span>
                <span>Non-Veg</span>
                <span>Fruits</span>
                <span>Drinks</span>
                <span>Sweets</span>
              </div>
            </div>

            <div className="food-showcase">
              <div className="showcase-card">
                <h3>South Indian</h3>
                <p>Idli, Dosa, Pongal, Sambar, Rasam, Appam</p>
              </div>

              <div className="showcase-card">
                <h3>North Indian</h3>
                <p>Chapati, Dal, Rajma, Paneer, Naan, Paratha</p>
              </div>

              <div className="showcase-card">
                <h3>Everyday Foods</h3>
                <p>Rice, Eggs, Fruits, Tea, Coffee, Snacks, Milk</p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="home-section">
          <div className="container">
            <div className="section-title">
              <span>Benefits</span>
              <h2>What users can do with NutriTrack</h2>
            </div>

            <div className="benefit-grid">
              <div className="benefit-card">
                <h3>01</h3>
                <h4>Build food awareness</h4>
                <p>
                  Know exactly how much nutrition your meals contain instead of
                  guessing calories blindly.
                </p>
              </div>

              <div className="benefit-card">
                <h3>02</h3>
                <h4>Improve eating discipline</h4>
                <p>
                  Logging food daily helps users stay consistent with their
                  diet, fitness, and health goals.
                </p>
              </div>

              <div className="benefit-card">
                <h3>03</h3>
                <h4>Manage macros easily</h4>
                <p>
                  Track protein, carbs, and fat clearly to support fat loss,
                  muscle gain, and better meal planning.
                </p>
              </div>

              <div className="benefit-card">
                <h3>04</h3>
                <h4>Review daily progress</h4>
                <p>
                  Use the diet dashboard to check what was eaten on each date
                  and remove items when needed.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="home-cta">
          <div className="container">
            <div className="cta-card">
              <h2>Ready to take control of your nutrition?</h2>

              <p>
                Start tracking your Indian meals today and understand your daily
                nutrition with simple, clear, and useful insights.
              </p>

              <Link to="/track" className="home-primary-btn text-decoration-none">
                Track Your First Food
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}