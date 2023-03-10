import React from 'react';

import styles from '../styles/Global';
import assets from '../assets';

const Download = () => {
  return (
    <div className={`${styles.section}
      ${styles.bgWhite}`} >
        <div className={`${styles.subSection}
        flex-col text-center`} >
          <div>
            <h1 className={`${styles.h1Text} ${styles.blackText}`}>Marka Stratejinizi Belirleyin</h1>
            <p className={`${styles.pText} ${styles.blackText}`}>Harici dijital tablolardan, versiyon karmaşasından ve gerekiz e-posta gönderimlerinden kurtulun.</p>
          </div>

          <button 
            className={styles.btnPrimary}
            onClick={() => window.open("https://expo.dev/@odimentbilgi/marka-takip", "_blank")}
          >
            Mobil Uygulama
          </button>
          <div className={styles.flexCenter}>
            <img 
              src={assets.scene}
              alt="download_png"
              className={styles.fullImg}
            />

          </div>
        </div>      
    </div>
  )
}

export default Download
