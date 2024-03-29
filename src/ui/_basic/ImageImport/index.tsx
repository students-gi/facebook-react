import React from 'react';
/*=====   Style imports   =====*/
import styles from './style.module.scss';
/*=====   Asset imports   =====*/
import image from 'src/assets/react-digital_ocean.jpg';

function ImageImport() {
  return (
    <div id={styles.ImageImport}>
      <h3>Image displayed using a variable and an Import statement</h3>
      <img
        src={image}
        alt='' />
      <hr />
      <h3>Image displayed using a 'require' function</h3>
      <img
        src={require('src/assets/react-digital_ocean.jpg')}
        alt='' />
      <hr />
      <h3>Image displayed using an external website import</h3>
      <img
        src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/iCfQnsFQzuzB7S8bLbxECrVk"
        alt='' />
    </div>
  );
}

export default ImageImport;