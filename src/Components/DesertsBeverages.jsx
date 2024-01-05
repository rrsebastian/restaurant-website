import React, { useState } from "react";
import FoodOptions from "./FoodOptions";
import Switch from "./Switch";
import FirstDesertImage from "../assets/beverage-04-150x150.jpg";
import SecondDesertImage from "../assets/beverage-03-150x150.jpg";
import ThirdDesertImage from "../assets/dessert-05-150x150.jpg";
import FourthDesertImage from "../assets/dessert-06-150x150.jpg";
import FifthDesertImage from "../assets/dessert-01-150x150.jpg";
import SixthDesertImage from "../assets/dessert-02-150x150.jpg";
import DrinkImgOne from "../assets/dessert-04-150x150.jpg";
import DrinkImgTwo from "../assets/dessert-03-150x150.jpg";
import DrinkImgThree from "../assets/beverage-02-150x150.jpg";
import DrinkImgFour from "../assets/beverage-06-150x150.jpg";
import DrinkImgFive from "../assets/beverage-05-150x150.jpg";
import DrinkImgSix from "../assets/beverage-01-150x150.jpg";

function DesertsBeverages() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      {!checked ? (
        <div className="food-beverages-container">
          <div className="switch-container">
            <h2>Desserts</h2>
            <Switch
              setChecked={setChecked}
              checked={checked}
              id="dessert-courses-switch"
            />
            <h2>Bevrages</h2>
          </div>
          <div className="food-option-container">
            <div>
              <FoodOptions
                img={FirstDesertImage}
                name="ROASTED STRAWBERRY CRUMBLE"
                text="accumsan, purus, nibh viverra, turpis, proin mi purus, cursus"
                price="7"
              />
              <FoodOptions
                img={SecondDesertImage}
                name="CHOCOLATE MOUSSE"
                text="magna nunc cursus, sapien, vel facilisis"
                price="9"
              />
              <FoodOptions
                img={ThirdDesertImage}
                name="ALMOND & DATE CAKE"
                text="euismod, ipsum sed, porttitor euismod, dolor purus, commodo, nunc"
                price="8"
              />
            </div>
            <div>
              <FoodOptions
                img={FourthDesertImage}
                name="MIXED FRUIT TART
        "
                text="portitor, lorem, ipsum, dolor, turpis"
                price="4"
              />
              <FoodOptions
                img={FifthDesertImage}
                name="STRAWBERRY GLAZED DONUT"
                text="quis tortor, nunc tristique, enim, commodo, hendrerit"
                price="3"
              />
              <FoodOptions
                img={SixthDesertImage}
                name="CHOCOLATE CUPCAKE"
                text="fusce, vel augue, facilisis, est malesuada, fermentum"
                price="5"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="food-beverages-container">
          <div className="switch-container">
            <h2>Desserts</h2>
            <Switch
              setChecked={setChecked}
              checked={checked}
              id="dessert-courses-switch"
            />
            <h2>Bevrages</h2>
          </div>
          <div className="food-option-container">
            <div>
              <FoodOptions
                img={DrinkImgOne}
                name="DRY MARTINI"
                text="accumsan, purus, nibh viverra,"
                price="13"
              />
              <FoodOptions
                img={DrinkImgTwo}
                name="GREEN ICED TEA
            "
                text="magna nunc cursus, sapien, vel facilisis"
                price="4"
              />
              <FoodOptions
                img={DrinkImgThree}
                name="STRAWBERRY COKTAIL"
                text="euismod, ipsum sed, porttitor"
                price="8"
              />
            </div>
            <div>
              <FoodOptions
                img={DrinkImgFour}
                name="MINT ICED TEA"
                text="euismod, dolor purus, commodo, nunc"
                price="5"
              />
              <FoodOptions
                img={DrinkImgFive}
                name="HOT CHOCOLATE"
                text="turpis, proin mi purus, cursus"
                price="6"
              />
              <FoodOptions
                img={DrinkImgSix}
                name="FRESH ORANGE JUICE"
                text="accumsan, purus, nibh viverra,"
                price="7"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DesertsBeverages;
