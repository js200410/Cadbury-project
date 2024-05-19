import React, { useState } from "react";

const OurRecipes = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  return (
    <div id="main">
      <div class="page1">
        <img
          src="https://images.ctfassets.net/pmzhtobns06n/2BalJq3VzGioizWnVDOBz8/16063ddea87ae1c54a7772bae1f80f53/image_13__1_.jpg?q=50&fm=webp&q=80"
          alt="https://images.ctfassets.net/pmzhtobns06n/2BalJq3VzGioizWnVDOBz8/16063ddea87ae1c54a7772bae1f80f53/image_13__1_.jpg?q=50&fm=webp&q=80"
        />
        <div class="text-overlay">
          <p class="text">Cadbury Recipes</p>
          <p class="paragraph">
            Fancy baking some delicious Cadbury treats to share with family and
            friends? Cakes, cookies, brownies and desserts all created by
            Cadbury and its fans!
          </p>
        </div>
      </div>
      <div class="page2">
        <div id="head">
          <h2>OUR FAVORITE RECIPES</h2>
        </div>
        <div id="recipe">
          <div class="wrapper">
            <div class="container">
              <input
                type="radio"
                name="slide"
                id={`c${activeSlide}`}
                checked
                onChange={() => setActiveSlide(1)}
              />
              <label htmlFor={`c${activeSlide}`} class="card">
                <div class="row">
                  <div class="icon">1</div>
                  <div class="description">
                    <h4>Owl Cake</h4>
                    <a href="c1.html" class="button">Read more</a>
                  </div>
                </div>
              </label>

              <input
                type="radio"
                name="slide"
                id={`c${activeSlide + 1}`}
                checked={activeSlide === 2}
                onChange={() => setActiveSlide(2)}
              />
              <label htmlFor={`c${activeSlide + 1}`} class="card">
                <div class="row">
                  <div class="icon">2</div>
                  <div class="description">
                    <h4>Bournville Brownies</h4>
                    <a href="c3.html" class="button">Read more</a>
                  </div>
                </div>
              </label>

              <input
                type="radio"
                name="slide"
                id={`c${activeSlide + 2}`}
                checked={activeSlide === 3}
                onChange={() => setActiveSlide(3)}
              />
              <label htmlFor={`c${activeSlide + 2}`} class="card">
                <div class="row">
                  <div class="icon">3</div>
                  <div class="description">
                    <h4>Vanilla Ice Cream</h4>
                    <a href="c3.html" class="button">Read more</a>
                  </div>
                </div>
              </label>

              <input
                type="radio"
                name="slide"
                id={`c${activeSlide + 3}`}
                checked={activeSlide === 4}
                onChange={() => setActiveSlide(4)}
              />
              <label htmlFor={`c${activeSlide + 3}`} class="card">
                <div class="row">
                  <div class="icon">4</div>
                  <div class="description">
                    <h4>Milk Tray</h4>
                    <a href="c3.html" class="button">Read more</a>
                  </div>
                </div>
              </label>

              <input
                type="radio"
                name="slide"
                id={`c${activeSlide + 4}`}
                checked={activeSlide === 5}
                onChange={() => setActiveSlide(5)}
              />
              <label htmlFor={`c${activeSlide + 4}`} class="card">
                <div class="row">
                  <div class="icon">5</div>
                  <div class="description">
                    <h4>Raspberry Brownies</h4>
                    <a href="c3.html" class="button">Read more</a>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="page3">
        <div class="left"></div>
        <div class="right">
          <div class="image-row">
            <div class="image-container">
              <img
                src="https://images-tastehub.mdlzapps.cloud/images/e4db11c7-b31c-49cb-b21a-fc0ce564885a.jpg?fm=webp&q=80"
                alt="Image 1"
              />
              <div class="overlay">
                <div class="overlay-content">
                  <h2>Cadbury Caramelt-in-the-middle</h2>
                  <p>Ready in 20 min</p>
                  <a href="c1.html" class="button">Read more</a>
                </div>
              </div>
            </div>

            <div class="image-container">
              <img
                src="https://images-tastehub.mdlzapps.cloud/images/dfede20a-6e19-4a71-9706-2e4c84defcd8.jpg?fm=webp&q=80"
                alt="Image 2"
              />
              <div class="overlay">
                <div class="overlay-content">
                  <h2>Chocolate brownie mummy cookies</h2>
                  <p>Ready in 20 min</p>
                  <a href="c1.html" class="button">Read more</a>
                </div>
              </div>
            </div>

            <div class="image-container">
              <img
                src="https://images-tastehub.mdlzapps.cloud/images/0c1d3657-05c1-4fc5-a05c-75dd1a6f21ee.jpg?fm=webp&q=80"
                alt="Image 4"
              />
              <div class="overlay">
                <div class="overlay-content">
                  <h2>Cadbury Iced Chocolate & Salted Caramel Drink</h2>
                  <p>Ready in 20 min</p>
                  <a href="c1.html" class="button">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <span class="text">
            <h4>Explore all recipes</h4>
          </span>
          <span class="text">
            <a href="c1.html" class="button">
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/554/279/original/arrow-icon-vector.jpg"
                alt=""
              />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OurRecipes;