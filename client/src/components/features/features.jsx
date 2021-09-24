import React from "react";
import { ReactComponent as TruckIcon } from "../../assets/icons/truck.svg";
import { ReactComponent as PhoneIcon } from "../../assets/icons/phone.svg";
import { ReactComponent as LockIcon } from "../../assets/icons/locked.svg";
import { ReactComponent as EventTentIcon } from "../../assets/icons/event-tent.svg";
import { ReactComponent as TrophyIcon } from "../../assets/icons/trophy.svg";
import { ReactComponent as HouseIcon } from "../../assets/icons/house.svg";
import "./features.scss";

const Features = () => {
  return (
    <div className="features-container">
      <div className="feature">
        <TruckIcon className="icon" />

        <div className="content">
          <h3>Instant delivery</h3>
          <p>
            We deliver your orders to your door step promptly. We
            value your time and patience.
          </p>
        </div>
      </div>
      <div className="feature">
        <TrophyIcon className="icon" />
        <div className="content">
          <h3>Best Floral Styling Services</h3>
          <p>
            We take pride in offering the best quality floral styling and event planning to all our
            customers. Our services and products are thoroughly scrutinized beforehand to
            ensure a lasting value.
          </p>
        </div>
      </div>
      
      {/* <div className="feature">
        <LocationIcon className="icon" />
        <div className="content">
          <h3>Order from anywhere</h3>
          <p>
            No need to worry about your location, we've got you covered. Our
            delivery extends to every part of the country.
          </p>
        </div>
      </div> */}
      <div className="feature">
        <PhoneIcon className="icon" />
        <div className="content">
          <h3>Excellent Customer Service</h3>
          <p>
            We value your calls and that's why we take time to answer instantly.
            Call us on 0701032469.
          </p>
        </div>
      </div>

      <div className="feature">
        <EventTentIcon className="icon" />

        <div className="content">
          <h3>Event Organizing</h3>
          <p>
            We plan and organize your events from vision to completion.
          </p>
        </div>
      </div>
      {/* <div className="feature">
        <HouseIcon className="icon" />

        <div className="content">
          <h3>All in one roof</h3>
          <p>
            Numerous categories of flowers our centralized store.No
            need to look anywhere else.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Features;
