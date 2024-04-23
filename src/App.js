import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/RegisterPage";
import WelcomePage from "./components/WelcomePage";
import CocktailPage from "./components/CocktailPage";
// import ShopPage from "./components/ShopPage";

function App() {
  const [username, setUsername] = useState("");

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<RegisterPage setUsername={setUsername} />}
          />
          <Route
            path="/welcome-page"
            element={<WelcomePage username={username} />}
          />
          {/* <Route path="/shop-page" element={<ShopPage username={username} />} /> */}
          <Route
            path="/cocktail-page"
            element={<CocktailPage username={username} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
