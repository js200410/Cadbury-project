import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./index.css"

const OurRecipes = () => {

    // Wrap the animation code in a function to call later
    function animateText() {
      const textElements = document.querySelectorAll('.paragraph');
    
      // Iterate over each paragraph with className.animatedText
      textElements.forEach(textElement => {
        const words = textElement.textContent.split(' ');
    
        // Empty the paragraph
        textElement.textContent = '';
    
        // Iterate over each word and add it with animation
        words.forEach((word, index) => {
          const span = document.createElement('span');
          span.textContent = word + ' ';
          span.style.opacity = 0;
          span.style.transition = "opacity 0.5s ease"
          textElement.appendChild(span);
    
          // Animate the opacity of the word using setTimeout
          setTimeout(() => {
            span.style.opacity = 2;
          }, index * 300); // Adjust the delay (in milliseconds) as needed
        });
      });
    }
    
    // Call the function when the page loads
    window.addEventListener('load', animateText);
//   const [activeSlide, setActiveSlide] = useState(1);

  return (
    <>
    <Navbar/>
    <div id="main h-[350vh]">
      <div className="page1 w-1[00%] h-[100%] flex justify-center items-center">
        <img
        className="h-[100vh] w-[100%]"
          src="https://images.ctfassets.net/pmzhtobns06n/2BalJq3VzGioizWnVDOBz8/16063ddea87ae1c54a7772bae1f80f53/image_13__1_.jpg?q=50&fm=webp&q=80"
          alt="https://images.ctfassets.net/pmzhtobns06n/2BalJq3VzGioizWnVDOBz8/16063ddea87ae1c54a7772bae1f80f53/image_13__1_.jpg?q=50&fm=webp&q=80"
        />
        <div className="text-overlay absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] p-[2vh] font-sans">
          <p className="text-overlay-text cadbury-recipes text-[#f8fbfd] text-[20vh] tracking-normal text-center font-semibold font-sans">Cadbury Recipes</p>
          <p className="paragraph text-white text-[3vh] w-[100%] font-sans">
            Fancy baking some delicious Cadbury treats to share with family and
            friends? Cakes, cookies, brownies and desserts all created by
            Cadbury and its fans!
          </p>
        </div>
      </div>
      <div  className="page2 h-[100vh] bg-[rgb(67,67,76)]">
        <div className="head flex justify-center items-center">
          <h2 className="text-center radio-text text-white text-[10vh] font-semibold italic mt-[4vh]">OUR FAVORITE RECIPES</h2>
        </div>
        <div id="recipe">
          <div  className="wrapper">
            <div className="container ml-[30vh] -mt-[10vh] ">
              <input
                type="radio"
                name="slide"
                id="c1"
                checked
                // onChange={() => setActiveSlide(1)}
              />
              <label htmlFor="c1" className="card bg-[url('https://images-tastehub.mdlzapps.cloud/images/2e3da807-90b1-4944-8e73-c6fcbc674460.jpg?fm=webp&q=80&fm=webp&q=80')]" >
                <div className="row">
                  <div className="icon">1</div>
                  <div className="description">
                    <h4>Owl Cake</h4>
                    <a href="c1.html" className="button">Read more</a>
                  </div>
                </div>
              </label>

              <input
                type="radio"
                name="slide"
                id="c2"
                checked
                // onChange={() => setActiveSlide(2)}
              />
              <label htmlFor="c2" className="card bg-[url('https://images-tastehub.mdlzapps.cloud/images/86cc4f6a-be48-43c1-8441-f504df95f3b6.jpg?fm=webp&q=80&fm=webp&q=80')]">
                <div className="row">
                  <div className="icon">2</div>
                  <div className="description">
                    <h4>Bournville Brownies</h4>
                    <a href="c3.html" className="button">Read more</a>
                  </div>
                </div>
              </label>

              <input
                type="radio"
                name="slide"
                id="c3"
                checked
                // onChange={() => setActiveSlide(3)}
              />
              <label htmlFor="c3" className="card bg-[url('https://images-tastehub.mdlzapps.cloud/images/050baa10-144e-41ba-9c41-2325c61e00f4.jpg?fm=webp&q=80&fm=webp&q=80')]">
                <div className="row">
                  <div className="icon">3</div>
                  <div className="description">
                    <h4>Vanilla Ice Cream</h4>
                    <a href="c3.html" className="button mb-[2vh]">Read more</a>
                  </div>
                </div>
              </label>

              <input
                type="radio"
                name="slide"
                id="c4"
                checked
                // onChange={() => setActiveSlide(4)}
              />
              <label htmlFor="c4" className="card bg-[url('https://images-tastehub.mdlzapps.cloud/images/a100ec5a-491c-4c2f-b788-fdecf9759335.jpg?fm=webp&q=80&fm=webp&q=80')]">
                <div className="row">
                  <div className="icon">4</div>
                  <div className="description">
                    <h4>Milk Tray</h4>
                    <a href="c3.html" className="button">Read more</a>
                  </div>
                </div>
              </label>

              <input
                type="radio"
                name="slide"
                id="c5"
                checked
                // onChange={() => setActiveSlide(5)}
              />
              <label htmlFor="c5" className="card bg-[url('https://images-tastehub.mdlzapps.cloud/images/fc6de92b-cd9d-4942-b5aa-a6a3076ebd20.jpg?fm=webp&q=80&fm=webp&q=80')]">
                <div className="row">
                  <div className="icon">5</div>
                  <div className="description">
                    <h4>Raspberry Brownies</h4>
                    <a href="c3.html" className="button">Read more</a>
                  </div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="page3 bg-[url('https://template.canva.com/EAFF3s0bwTo/1/0/400w-BZWHW4QqaRo.jpg')] bg-no-repeat bg-cover">
        <div className="left"></div>
        <div  className="right">
          <div  className="image-row flex justify-center flex-wrap items-center p-[10vh]">
            <div  className="image-container">
              <img
                src="https://images-tastehub.mdlzapps.cloud/images/e4db11c7-b31c-49cb-b21a-fc0ce564885a.jpg?fm=webp&q=80"
                alt="Image 1"
                className="image-overlays"
              />
              <div className="overlay">
                <div className="overlay-content">
                  <h2>Cadbury Caramelt-in-the-middle</h2>
                  <p>Ready in 20 min</p>
                  <a href="c1.html" className="button">Read more</a>
                </div>
              </div>
            </div>

            <div className="image-container">
              <img
                src="https://images-tastehub.mdlzapps.cloud/images/dfede20a-6e19-4a71-9706-2e4c84defcd8.jpg?fm=webp&q=80"
                alt="Image 2"
                className="image-overlays"
              />
              <div className="overlay">
                <div className="overlay-content">
                  <h2>Chocolate brownie mummy cookies</h2>
                  <p>Ready in 20 min</p>
                  <a href="c1.html" className="button">Read more</a>
                </div>
              </div>
            </div>

            <div className="image-container">
              <img
                src="https://images-tastehub.mdlzapps.cloud/images/0c1d3657-05c1-4fc5-a05c-75dd1a6f21ee.jpg?fm=webp&q=80"
                alt="Image 4"
                className="image-overlays"
              />
              <div className="overlay">
                <div className="overlay-content">
                  <h2>Cadbury Iced Chocolate & Salted Caramel Drink</h2>
                  <p>Ready in 20 min</p>
                  <a href="c1.html" className="button">Read more</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <span className="text text-white font-semibold ">
            <h4>Explore all recipes</h4>
          </span>
          <span className="text">
            <a href="c1.html" className="button">
              <img
                src="https://static.vecteezy.com/system/resources/previews/000/554/279/original/arrow-icon-vector.jpg"
                alt=""
              />
            </a>
          </span>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default OurRecipes;