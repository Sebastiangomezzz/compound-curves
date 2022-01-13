import React from "react";
import './Text.styles.css'

function Text() {
  return (
    <div>
      <p className='page-text1'>
        <strong>Compoundcurves</strong> refers to achieving huge rewards from
        small, seemingly insignificant actions.
      </p>
      <br />
      <p className='page-text2'>
        Our <strong>mission</strong> is to help companies reach new heights, by
        telling stories through powerbi dashboards.
      </p>
      <ul className='services-list'>
        <li>
          <p>Data Analitics</p>
        </li>
        <li>
          <p>Business intelligence</p>
        </li>
        <li>
          <p>Powerbi</p>
        </li>
      </ul>
    </div>
  );
}

export default Text;
