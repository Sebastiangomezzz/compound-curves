/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect } from 'react';
import './Contact.styles.css'

function Contact() {
  useEffect(() => {
    const script = document.createElement('script');

    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <>
      <div className='badges'>
        <div
          className='badge-base LI-profile-badge linkedin-badge'
          data-locale='es_ES'
          data-size='medium'
          data-theme='light'
          data-type='VERTICAL'
          data-vanity='gorkagamov'
          data-version='v1'
        >
          <a
            className='badge-base__link LI-simple-link'
            href='https://es.linkedin.com/in/gorkagamov?trk=profile-badge'
          ></a>
        </div>

        <div
          className='badge-base LI-profile-badge linkedin-badge'
          data-locale='es_ES'
          data-size='medium'
          data-theme='light'
          data-type='VERTICAL'
          data-vanity='sebastiangomezzz'
          data-version='v1'
        >
          <a
            className='badge-base__link LI-simple-link'
            href='https://es.linkedin.com/in/sebastiangomezzz?trk=profile-badge'
          ></a>
        </div>
      </div>
    </>
  );
}

export default Contact;
