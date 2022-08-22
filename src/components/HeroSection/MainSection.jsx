import React from "react";
import "./MainSection.css";

export default function MainSection() {
  return (
    <section className="heroSection">
      <div className="heroTextDiv">
        <h1 className="herotitle">Make remote work</h1>
        <p className="subtitle">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <div className="heroButtonDiv">
          <button className="heroButton">Learn More</button>
        </div>
        <div className="herolinks">
          <img
            src="/assets/images/client-databiz.svg"
            alt="databiz"
            className="linkImg"
          />
          <img
            src="/assets/images/client-audiophile.svg"
            alt="audiophile"
            className="linkImg"
          />
          <img
            src="/assets/images/client-maker.svg"
            alt="maker"
            className="linkImg"
          />
          <img
            src="/assets/images/client-meet.svg"
            alt="meet"
            className="linkImg"
          />
        </div>
      </div>
      <div className="heroImageDiv">
        <img src="" alt="" className="heroImg" />
      </div>
    </section>
  );
}
