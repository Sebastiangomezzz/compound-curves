import React from "react";
import './Text.styles.css'

function Text() {
  return (
    <div>
      <p className="page-text1">
        <strong>compoundcurves</strong> refers to achieving huge rewards from
        small, seemingly insignificant actions.
      </p>
      <br />
      <p className="page-text2">
        Our <strong>mission</strong> is to help companies reach new heights, by
        telling stories through powerbi dashboards.
      </p>
      <ul className="services-list">
        <li>Data Analitics</li>
        <li>Business intelligence</li>
        <li>Powerbi</li>
      </ul>
    </div>
  );
}

export default Text;
