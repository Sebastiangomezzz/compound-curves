import React from "react";
import Text from '../../Text'

function Landing() {
  return (
    <div id='page-wrap'>
      <Text/>
      <div className='iframe'>
        <iframe
          title='Wealth'
          width='1024'
          height='600'
          src='https://app.powerbi.com/view?r=eyJrIjoiNTAzZThlNDctNDk3Yy00YjdiLWJkMDUtZTRlODY1OWJkNzczIiwidCI6IjEzOGQ3MjU0LTE0Y2MtNDhjNC1hMTRkLWQ0MTI5MjY5Zjc5MSIsImMiOjl9&pageName=ReportSection'
          frameBorder='0'
          allowFullScreen={true}
        ></iframe>
      </div>
    </div>
  );
}

export default Landing;
