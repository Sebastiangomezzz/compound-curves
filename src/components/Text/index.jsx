import React from "react";
import Slider from "../Slider";
import './Text.styles.css'

function Text() {
  return (
    <div>
      <p>
        <strong>compoundcurves</strong> refers to achieving huge rewards from
        small, seemingly insignificant actions.
      </p>
      <p>
        Our <strong>mission</strong> is to help companies reach new
        heights, by telling stories through powerbi dashboards.
      </p>
      <Slider />
      <ul className="services-list"><li>Data Analitics</li><li>Business intelligence</li><li>Powerbi</li></ul>
    </div>
  );
}

export default Text;
