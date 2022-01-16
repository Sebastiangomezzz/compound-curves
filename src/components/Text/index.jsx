import React from "react";
import './Text.styles.css'
import { BsClipboardData } from 'react-icons/bs';
import { MdOutlineIntegrationInstructions } from 'react-icons/md'
import {BiSupport} from 'react-icons/bi'
function Text() {
  return (
    <div>
      <p className='page-text1'>
        Compoundcurves refers to achieving huge rewards from small, seemingly
        insignificant actions.
      </p>
      <br />
      <p className='page-text2'>
        Our mission is to help companies reach new heights, by telling stories
        through powerbi dashboards.
      </p>
      <ul className='services-list'>
        <li>
          <BsClipboardData size={65} />
          <p>Data</p>
        </li>
        <li>
          <MdOutlineIntegrationInstructions size={65} />
          <p>Integrations</p>
        </li>
        <li>
          <BiSupport size={65} />
          <p>Support</p>
        </li>
      </ul>
    </div>
  );
}

export default Text;
