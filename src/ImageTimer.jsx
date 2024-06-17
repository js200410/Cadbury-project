import React, { useState, useEffect } from 'react';

const images = [
  'https://www.sparscotland.co.uk/images/products/brandbank/b8a9a87f-a5cc-41fa-ac49-b629fd5cd538.png',
  'https://www.peters.com.au/wp-content/uploads/2020/10/Caramello_KeyVisual_Melt_03_RGB.png',
  'https://www.peters.com.au/wp-content/uploads/2023/03/CDM_Vanilla_Tub_460.png', // Add your image URLs here
  'https://www.peters.com.au/wp-content/uploads/2020/05/Cadbury_CDM_Chocolate_1.2LTub_2D.png', // Add your image URLs here
  'https://yumyum.co.mz/wp-content/uploads/2021/08/CADBURY-CRUNCHIE-ICE-CREAM-CUP-480ML.png', // Add your image URLs here
];

const ImageTimer = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);  //images.length returns the first index after completion of displaying of all indexes 
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="img-changer img w-[26vw] -rotate-12">
      <img src={images[currentIndex]} alt="Slider" className=" w-[40vw] "/>
    </div>
  );
};

export default ImageTimer;
