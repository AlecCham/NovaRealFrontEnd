import React, { useEffect, useState } from "react";
import Enquiry from "./Enquiry";

const House = (props) => {
  const [showEnquiry, setShowEnquiry] = useState(false);

  // You can access the role from sessionStorage directly
  const userRole = sessionStorage.getItem('role');

  // Check if the user is a customer
  useEffect(() => {
    if (userRole === 'customer') {
      setShowEnquiry(true);
    } else {
      setShowEnquiry(false);
    }
  }, [userRole]);

  if (!props.houseInfo) {
    return <h1>loading...</h1>;
  }

  const imagePath = `/images/${props.houseInfo.photo}`;

  return (
    <div className="row">
      <div className="col-sm-7">{props.houseInfo.address}</div>
      <div className="col-sm-5">Price: {props.houseInfo.price}</div>
      <div className="col-sm-7">
        <img src={imagePath} className="img-fluid" alt="image " />
      </div>
      <div className="col-sm-5">
        <p>{props.houseInfo.description}</p>

        {/* Show the enquiry form based on the 'showEnquiry' state */}
        {showEnquiry && <Enquiry address={props.houseInfo.address} />}
      </div>
    </div>
  );
};

export default House;
