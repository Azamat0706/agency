import React from "react";
import "./partners.css";
import img3 from "./img1.png"
import img2 from "./img2.png"
import img1 from "./img3.png"
import img4 from "./img4.png"
import img5 from "./img5.png"
const Partners = () => {
  return (
    <div className="partners1">
      <h1>Meet Our Team</h1>
      <div className="partners2">
        <div>
          <img className="imegess" src={img4} alt="" />
          <h4>Amanda Linda </h4>
          <span>Executive officer</span>
          <div>
          <img src={img5} alt="" />
          </div>
        </div>
        <div>
      <img className="imegess" src={img2} alt="" />
          <h4>Alex Smith </h4>
          <span>UX/UI DESIGNER</span>
        <div>
        <img src={img5} alt="" />

        </div>
        </div>
        <div>
          <img className="imegess" src={img3} alt="" />
          <h4> Anthony Fauci</h4>
          <span>Web Developer</span>
        <div>
        <img src={img5} alt="" />

        </div>
        </div>
        <div>
          <img className="imegess" src={img1} alt="" />
          <h4>Khalid Abbed</h4>
          <span>Head of Markter</span>
        <div>
        <img src={img5} alt="" />

        </div>
        </div>
      </div>
    </div>
  );
};
export default Partners;
