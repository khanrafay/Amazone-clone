import React from "react";
import "./Home.css";
import MainPicture from "./Images/homepage.jpg";
import Product from "./Product";
import ControllerImage from './Images/controller.jpg'
import Ps4Image from './Images/ps4.jpg'
import BagImage from './Images/bag.jpg'
import LaptopImage from './Images/laptop.jpg'
import WatchImage from './Images/watch.jpg'
import VRImage from './Images/vr.jpg'
import CameraImage from './Images/camera.jpg'



function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img 
        className="home__image" 
        src={MainPicture} 
        alt=""
        />
         <div className="home__row">
       <Product 
         title="DualShock 4 Wireless Controller for PlayStation 4 - Magma Red"
         price={64.99}
         image={ControllerImage}
         rating={4}

       />
        <Product 
         title="PlayStation 4 Slim 1TB Console"
         price={349.95}
         image={Ps4Image}
         rating={4}

       />

      </div>
      <div className="home__row">
      <Product 
         title="Star Trek: The Original Series - Star Fleet Flight Bag"
         price={88.95}
         image={BagImage}
         rating={3}

       />
       <Product 
         title="Canon PowerShot SX530 Digital Camera w/ 50X Optical Zoom - Wi-Fi & NFC Enabled (Black)"
         price={149.99}
         image={CameraImage}
         rating={3}

       /><Product 
       title="Acer Aspire 5 A515-55-378V, 15.6 Full HD Display"
       price={449.95}
       image={LaptopImage}
       rating={3}

     /><Product 
     title="Garmin Forerunner 235, GPS Running Watch, Black/Gray"
     price={159.95}
     image={WatchImage}
     rating={3}

   />
      </div>
      <div className="home__row">
      <Product 
         title="Oculus Quest All-in-one VR Gaming Headset – 64GB"
         price={697.95}
         image={VRImage}
         rating={5}

       />
      
      </div>
      </div>

     

    </div>
  );
}

export default Home;
