import React from "react";

const Main = () => {
  return (
    <main className="landing  container">
      <div className="main-text">
        <h1>YOUR EVERYDAY ESSENTIALS DESERVE THE BEST.</h1>
        <p>
          PRESENTING YOU THE MOST AMAZING AND LUXURIOUS BACKPACKS THAT CAN BE
          USED FOR SCHOOL,COLLEGES,UNIVERSITIES BUSINESS TRIPS OR JUST A SIMPLE
          PICNIC.
        </p>
        <div className="main-btn">
          <button>Shop Now</button>
          <button className="second-btn">Add to Cart</button>
        </div>
        <div className="links">
          <p>Available on</p>
          <div className="icons">
            <a href="https://www.amazon.com" target="_blank">
              <img
                src="/images/amazon.png"
                alt="Amazon image"
                className="amazon"
              />
            </a>
            <a href="https://www.flipkart.com" target="_blank">
              <img
                src="/images/flipkart.png"
                alt="Flipcart image"
                className="flipkart"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="main-image">
        <img src="/images/backpack.png" alt="img" className="bigimg" />
      </div>
    </main>
  );
};

export default Main;
