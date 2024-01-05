import React, { useState } from "react";
import FoodOptions from "./FoodOptions";
import Switch from "./Switch";
import PalakPaneerImg from "../assets/PalakPaneer.jpg";
import SecondImg from "../assets/main-05-150x150.jpg";
import ThirdImg from "../assets/main-06-150x150.jpg";
import ForthImg from "../assets/main-02-150x150.jpg";
import FithImg from "../assets/main-04-150x150.jpg";
import SixthImg from "../assets/main-03-150x150.jpg";
import SidesFirstImg from "../assets/sides-06-150x150.jpg";
import SidesSecondImg from "../assets/sides-02-150x150.jpg";
import SidesThirdImg from "../assets/sides-05-150x150.jpg";
import SidesFourthImg from "../assets/sides-04-150x150.jpg";
import SidesFithImg from "../assets/sides-03-150x150.jpg";
import SidesSixthImg from "../assets/sides-01-150x150.jpg";

function Dishes() {
  const [checked, setChecked] = useState(false);
  return (
    <>
      {!checked ? (
        <div className="main-side-dishes-container">
          <div className="switch-container">
            <h2>Main Courses</h2>
            <Switch
              setChecked={setChecked}
              checked={checked}
              id="main-courses-switch"
            />
            <h2>Side Dishes</h2>
          </div>
          <div className="food-option-container">
            <div className="main-dishes-wrapper-1">
              <FoodOptions
                img={PalakPaneerImg}
                name="PALAK PANEER"
                text="phasellus, varius, pellentesque, arcu, eu accumsan, purus volutpa"
                price="30"
              />
              <FoodOptions
                img={SecondImg}
                name="Egg"
                text="nullam ultricies, nisl sed, dignissim ullamcorper, ut sagittis, bibendum"
                price="35"
              />
              <FoodOptions
                img={ThirdImg}
                name="PERSIAN CHICKEN JOOJEH KEBABS"
                text="sed id risus, ac sapien, tincidunt, porta ac sed, lorem"
                price="45"
              />
            </div>

            <div className="main-dishes-wrapper-2">
              <FoodOptions
                img={ForthImg}
                name="ROGAN JOSH
                "
                text="donec id, lacus vel, elit, dapibus, porttito"
                price="32"
              />
              <FoodOptions
                img={FithImg}
                name="GRILLED CHICKEN WITH FRESH CHERRY SALSA"
                text="in luctus, felis leo, non volutpat, ligula, bibendum in, pellentesque, habitant"
                price="39"
              />
              <FoodOptions
                img={SixthImg}
                name="SPICY PORK VINDALOO"
                text="morbi, tristique, senectus, et netus, malesuada, fames ac, turpis, egestas"
                price="44"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="main-side-dishes-container">
          <div className="switch-container">
            <h2>Main Courses</h2>
            <Switch
              setChecked={setChecked}
              checked={checked}
              id="main-courses-switch"
            />
            <h2>Side Dishes</h2>
          </div>
          <div className="food-option-container">
            <div>
              <FoodOptions
                img={SidesFirstImg}
                name="PIMAVERA SALAD"
                text="accumsan, purus, nibh viverra, turpis, proin mi purus, cursus"
                price="20"
              />
              <FoodOptions
                img={SidesSecondImg}
                name="MUSHROOMS & SAUCE"
                text="euismod, ipsum sed, porttitor euismod, dolor purus, commodo, nunc"
                price="9"
              />
              <FoodOptions
                img={SidesThirdImg}
                name="SUMMER VEGETABLES"
                text="tomatoes cherry, zucchini, magna nunc cursus, sapien, vel facilisis"
                price="32"
              />
            </div>
            <div>
              <FoodOptions
                img={SidesFourthImg}
                name="CAULIFLOWER MASH"
                text="fusce, vel augue, facilisis, est malesuada, fermentum"
                price="20"
              />
              <FoodOptions
                img={SidesFithImg}
                name="ASIAN CHICKEN SALAD"
                text="chicken, lorem, ipsum, dolor"
                price="9"
              />
              <FoodOptions
                img={SidesSixthImg}
                name="JALAPENO CORNBREAD"
                text="quis tortor, nunc tristique, enim, commodo, hendrerit"
                price="32"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Dishes;
