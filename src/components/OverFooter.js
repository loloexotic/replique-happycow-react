import React from "react";

export const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="footer-card">
          <div>
            <h4>Community</h4>
            <ul className="column">
              <li>My Profile</li>
              <li>Ambassadors</li>
              <li>Veg Events</li>
              <li>Forum</li>
              <li>Newsletter</li>
              <li>Our Story</li>
              <li>Get Involved</li>
            </ul>
          </div>
          <div>
            <h4>About</h4>
            <ul className="column">
              <li>FAQ</li>
              <li>Contact</li>
              <li>Link to us</li>
              <li>Site Map</li>
            </ul>
          </div>
          <div>
            <h4>HappyCow App</h4>
            <ul className="column">
              <li>Over 3 million downloads.</li>
              <img src="https://www.happycow.net/img/Bitmap@2x.png" alt="" />
              <img
                src="https://www.happycow.net/img/happycow-ios-app.png"
                alt=""
              />
              <img
                src="https://www.happycow.net/img/google-play-badge@2x.png"
                alt=""
              />
              <img
                src="https://www.happycow.net/img/happycow-android-app.png?3"
                alt=""
              />
            </ul>
          </div>
          <div>
            <h4>Shop</h4>
            <ul className="column">
              <li>T-Shirts</li>
              <li>Books</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
