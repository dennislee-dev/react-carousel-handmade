import React, { useState, useEffect } from "react";
import "./App.css";
import Item from "./components/Item";
import items from "./datas/item-data.json";
import arrowLeft from "./images/arrow_left.svg";
import arrowRight from "./images/arrow_right.svg";

function App() {
  const [carouselItems, setCarouselItems] = useState([]);
  const [pos, setPos] = useState(0);
  const [translateX, setTranslateX] = useState(0);

  useEffect(() => {
    setCarouselItems(document.getElementsByClassName("carousel__item"));
  }, []);

  const handleLeftClick = () => {
    let calculate =
      pos > 0 ? (pos - 1) % carouselItems.length : carouselItems.length;
    let transX = 0;
    if (pos > 0) {
      transX = pos === 1 ? 0 : translateX - 100;
      setTranslateX(transX);
    } else if (pos <= 0) {
      transX = 100 * (carouselItems.length - 4);
      setTranslateX(transX);
      calculate = carouselItems.length - 4;
    }

    setPos(() => {
      return slide({
        show: calculate,
        disable: pos,
        translateX: transX,
      });
    });
  };

  const handleRightClick = () => {
    let calculate = (pos + 1) % carouselItems.length;
    let transX = 0;
    if (pos >= carouselItems.length - 4) {
      calculate = 0;
      transX = 0;
      setTranslateX(transX);
    } else {
      transX = translateX + 100;
      setTranslateX(transX);
    }

    setPos(() => {
      return slide({
        show: calculate,
        disable: pos,
        translateX: transX,
      });
    });
  };

  const slide = (options) => {
    for (let i = 0; i < carouselItems.length; i++) {
      if (i === options.show) {
        carouselItems[
          i
        ].style.transform = `translateX(-${options.translateX}%)`;
      } else {
        carouselItems[
          i
        ].style.transform = `translateX(-${options.translateX}%)`;
      }
    }

    return options.show;
  };

  return (
    <div className="container">
      <img src={arrowLeft} onClick={handleLeftClick} alt="arrow-left" />
      <div className="carousel">
        {items.map((item) => (
          <Item
            key={item.name}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
      <img src={arrowRight} onClick={handleRightClick} alt="arrow-right" />
    </div>
  );
}

export default App;
