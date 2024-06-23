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
    
  <div id="main" className="overflow-x-hidden">
    <div className="page1">
        <img src="https://images.ctfassets.net/pmzhtobns06n/9J3b9Ote4mlUnhTgGbFnO/2732178318abfd626560a4fa84d7d463/DESKTOP_-_CDM_CAROUSEL_-_BG.jpg" alt="https://images.ctfassets.net/pmzhtobns06n/9J3b9Ote4mlUnhTgGbFnO/2732178318abfd626560a4fa84d7d463/DESKTOP_-_CDM_CAROUSEL_-_BG.jpg"/>
        <div className="text-overlay">
            <p className="text">Cadbury Recipes</p>
            <p className="paragraph">Fancy baking some delicious Cadbury treats to share with family and friends? Cakes, cookies, brownies and desserts all created by Cadbury and its fans!
            </p>
    
          </div>
        </div>

  <div id="page2">
      <h2>Our favorite recipes</h2>
      <div className="containers">
        <div className="column">
            <span className="number">1</span>
            <span className="name">Owl Cake</span>
            <button className="button">Recipe</button>
            <div className="hover-image">
                <img src="https://images-tastehub.mdlzapps.cloud/images/2e3da807-90b1-4944-8e73-c6fcbc674460.jpg?fm=webp&q=80&fm=webp&q=80" alt="Image 1"/>
            </div>
        </div>
        
        <div className="column">
            <span className="number">2</span>
            <span className="name">Bournville Brownies</span>
            <button className="button">Recipe</button>
            <div className="hover-image">
                <img src="https://images-tastehub.mdlzapps.cloud/images/86cc4f6a-be48-43c1-8441-f504df95f3b6.jpg?fm=webp&q=80&fm=webp&q=80" alt="Image 2"/>
            </div>
        </div>
        <div className="column">
          <span className="number">3</span>
          <span className="name">Vanilla Ice Cream</span>
          <button className="button">Recipe</button>
          <div className="hover-image">
              <img src="https://images-tastehub.mdlzapps.cloud/images/050baa10-144e-41ba-9c41-2325c61e00f4.jpg?fm=webp&q=80&fm=webp&q=80" alt="Image 2"/>
          </div>
      </div>
      <div className="column">
        <span className="number">4</span>
        <span className="name">Milk Tray</span>
        <button className="button">Recipe</button>
        <div className="hover-image">
            <img src="https://images-tastehub.mdlzapps.cloud/images/a100ec5a-491c-4c2f-b788-fdecf9759335.jpg?fm=webp&q=80&fm=webp&q=80" alt="Image 2"/>
        </div>
    </div>
    <div className="column">
      <span className="number">5</span>
      <span className="name">Raspberry Brownies</span>
      <button className="button">Recipe</button>
      <div className="hover-image">
          <img src="https://images-tastehub.mdlzapps.cloud/images/fc6de92b-cd9d-4942-b5aa-a6a3076ebd20.jpg?fm=webp&q=80&fm=webp&q=80" alt="Image 2"/>
      </div>
    </div>
      </div>
    
    </div>
      <div id="page3">
  <div className="image-row pl-[3vw]">
    <h1>EXPLORE ALL RECIPES</h1>
                    <div className="image-container">
                      <img src="https://images-tastehub.mdlzapps.cloud/images/e4db11c7-b31c-49cb-b21a-fc0ce564885a.jpg?fm=webp&q=80" alt="Image 1"/>
                      <div className="overlay">
                        <div className="overlay-content">
                          <h2>Cadbury Caramelt-in-the-middle</h2>
                          <p>Ready in 20 min</p>
                          <a href="c1.html" className="button">Recipes</a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="image-container">
                      <img src="https://images-tastehub.mdlzapps.cloud/images/dfede20a-6e19-4a71-9706-2e4c84defcd8.jpg?fm=webp&q=80" alt="Image 2"/>
                      <div className="overlay">
                        <div className="overlay-content">
                          <h2>Chocolate brownie mummy cookies</h2>
                          <p>Ready in 20 min</p>
                          <a href="c1.html" className="button">Recipes</a>
                        </div>
                      </div>
                    </div>
                    
                  
                    <div className="image-container">
                      <img src="https://images-tastehub.mdlzapps.cloud/images/0c1d3657-05c1-4fc5-a05c-75dd1a6f21ee.jpg?fm=webp&q=80" alt="Image 3"/>
                      <div className="overlay">
                        <div className="overlay-content">
                          <h2>Cadbury Iced Chocolate & Salted Caramel Drink</h2>
                          <p>Ready in 20 min</p>
                            <a href="c1.html" className="button">Recipes</a>
                        </div>
                      </div>
                    </div>
                   
                    <div className="image-container">
                      <img src="https://images-tastehub.mdlzapps.cloud/images/3360d0a9-4e62-412d-9fdc-5016d8377d06.png?fm=webp&q=80" alt="Image 4"/>
                      <div className="overlay">
                        <div className="overlay-content">
                          <h2>Cadbury Chocolate & Walnut Gooey Cookies</h2>
                          <p>Ready in 20 min</p>
                          <a href="c1.html" className="button">Recipes</a>
                        </div>
                      </div>
                    </div>

                    <div className="image-container">
                      <img src="https://images-tastehub.mdlzapps.cloud/images/05ddb19a-7490-45cc-ab06-b5558f022d65.jpg?fm=webp&q=80" alt="Image 5"/>
                      <div className="overlay">
                        <div className="overlay-content">
                          <h2>Cadbury Chocolate cookies</h2>
                          <p>Ready in 20 min</p>
                          <a href="c1.html" className="button">Recipes</a>
                        </div>
                      </div>
                    </div>

                    <div className="image-container">
                      <img src="https://images-tastehub.mdlzapps.cloud/images/a90ec9d1-e881-4b2b-9f1a-e1007936be91.jpg?fm=webp&q=80" alt="Image 6"/>
                      <div className="overlay">
                        <div className="overlay-content">
                          <h2>Cadbury Peanut Butter Cookie Cups</h2>
                          <p>Ready in 20 min</p>
                          <a href="c1.html" className="button">Recipes</a>
                        </div>
                      </div>
                    </div>

                    
                    <div className="image-container">
                      <img src="https://images-tastehub.mdlzapps.cloud/images/f56ad121-eaec-4688-990f-322bdd8d2c7f.jpg?fm=webp&q=80" alt="Image 7"/>
                      <div className="overlay">
                        <div className="overlay-content">
                          <h2>Callum’s Ultimate Chocolate Cake</h2>
                          <p>Ready in 75 min</p>
                          <a href="c1.html" className="button">Recipes</a>
                        </div>
                      </div>
                    </div>

                    
                    <div className="image-container">
                      <img src="https://images-tastehub.mdlzapps.cloud/images/12f43ad0-cbda-4006-adcf-c5977e65f707.jpg?fm=webp&q=80" alt="Image 8"/>
                      <div className="overlay">
                        <div className="overlay-content">
                          <h2>Grandma's Amazing Cadbury Flake Cake</h2>
                          <p>Ready in 60 min</p>
                          <a href="c1.html" className="button">Recipes</a>
                        </div>
                      </div>
                    </div>

                    
                    <div className="image-container">
                      <img src="https://images-tastehub.mdlzapps.cloud/images/69cd726c-25f9-4448-b655-3fb6b3075ff4.jpg?fm=webp&q=80" alt="Image 9"/>
                      <div className="overlay">
                        <div className="overlay-content">
                          <h2>KB Cadbury Crunchie Cheesecake!</h2>
                          <p>Ready in 20 min</p>
                          <a href="c1.html" className="button">Recipes</a>
                        </div>
                      </div>
                    </div>
                
                                        
                    <div className="image-container">
                      <img src="https://images-tastehub.mdlzapps.cloud/images/3bc955d1-7d94-44a0-863e-6e8ecf18b3d4.jpg?fm=webp&q=80" alt="Image 10"/>
                      <div className="overlay">
                        <div className="overlay-content">
                          <h2>Grandad’s Cadbury Chocolate Cupcakes</h2>
                          <p>Ready in 40 min</p>
                          <a href="c1.html" className="button">Recipes</a>
                        </div>
                      </div>
                    </div>

                                        
                    <div className="image-container">
                      <img src="https://images-tastehub.mdlzapps.cloud/images/c6136b4b-a77a-4daa-a4b8-e6e51f936a72.jpg?fm=webp&q=80" alt="Image 11"/>
                      <div className="overlay">
                        <div className="overlay-content">
                          <h2>Cathie’s Cadbury Ritzy Raspberry & Lime Mousse Confections</h2>
                          <p>Ready in 160 min</p>
                          <a href="c1.html" className="button">Recipes</a>
                        </div>
                      </div>
                    </div>

                                        
                    <div className="image-container">
                      <img src="https://images-tastehub.mdlzapps.cloud/images/28f07571-5f90-48db-81eb-807fe2b09eab.jpg?fm=webp&q=80" alt="Image 12"/>
                      <div className="overlay">
                        <div className="overlay-content">
                          <h2>Zahra's Cadbury Raspberry & Chocolate Easter Egg Cheesecake</h2>
                          <p>Ready in 230 min</p>
                          <a href="c1.html" className="button">Recipes</a>
                        </div>
                      </div>
                    </div>

                                        
                    <div className="image-container">
                      <img src="https://images-tastehub.mdlzapps.cloud/images/4a850b56-cdb0-4830-b58d-8e5d39c5f218.jpg?fm=webp&q=80" alt="Image 13"/>
                      <div className="overlay">
                        <div className="overlay-content">
                          <h2>Nan’s Cadbury Tiffin Cake</h2>
                          <p>Ready in 20 min</p>
                          <a href="c1.html" className="button">Recipes</a>
                        </div>
                      </div>
                    </div>

                                        
                    <div className="image-container">
                      <img src="https://images-tastehub.mdlzapps.cloud/images/518334a1-867c-4820-8c66-6eb265a1acbd.jpg?fm=webp&q=80" alt="Image 14"/>
                      <div className="overlay">
                        <div className="overlay-content">
                          <h2>The Ultimate Cadbury Bread & Butter Pudding</h2>
                          <p>Ready in 15 min</p>
                          <a href="c1.html" className="button">Recipes</a>
                        </div>
                      </div>
                    </div>

                                        
                    <div className="image-container">
                      <img src="https://images-tastehub.mdlzapps.cloud/images/02593523-e439-4f3c-bd22-deaac4048a98.jpg?fm=webp&q=80" alt="Image 15"/>
                      <div className="overlay">
                        <div className="overlay-content">
                          <h2>Flourless Cadbury Brownies</h2>
                          <p>Ready in 35 min</p>
                          <a href="c1.html" className="button">Recipes</a>
                        </div>
                      </div>
                    </div>
      
                  </div>
              </div>
  </div>
    <Footer/>
    </>
  );
};

export default OurRecipes;