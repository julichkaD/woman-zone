import React from "react";
// import "./nav.scss";

const Nav = () => {
  return (
    <div className="nav">
      <ul className="nav">
        <li>
          <a href="/welcome-page">Home</a>
        </li>
        <li>
          <a href="/another-page">Books</a>
        </li>
        <li>
          <a href="/shop-page">Shop</a>
        </li>
        <li>
          <a href="/cocktail-page">Mixology</a>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
