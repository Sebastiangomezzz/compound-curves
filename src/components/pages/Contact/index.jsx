/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import Form from '../../Form'

function Contact() {
    return (
      <div id='page-wrap'>
        <Form />
        <div className='badges'>
          <div
            className='badge1'
            data-locale='es_ES'
            data-size='medium'
            data-theme='light'
            data-type='HORIZONTAL'
            data-vanity='gorkagamov'
            data-version='v1'
          >
            <a
              className='badge-base__link LI-simple-link'
              href='https://es.linkedin.com/in/gorkagamov?trk=profile-badge'
            ></a>
          </div>

          <div
            className='badge2'
            data-locale='es_ES'
            data-size='medium'
            data-theme='light'
            data-type='HORIZONTAL'
            data-vanity='sebastiangomezzz'
            data-version='v1'
          >
            <a
              className='badge-base__link LI-simple-link'
              href='https://es.linkedin.com/in/sebastiangomezzz?trk=profile-badge'
            ></a>
          </div>
        </div>
      </div>
    );
}

export default Contact
