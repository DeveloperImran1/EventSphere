// components/FooterBackground.js
import styles from './FooterBackground.module.css';

const FooterBackground = () => {
  return (
    <div className={styles.footerBackground}>
      <div className={styles.surface}></div>
      <div className={styles.caustics}></div>
      <div className={styles.bg}></div>
      <div className={styles.sun}>
        <div className={styles.sun_layer1}></div>
        <div className={styles.sun_layer2}></div>
        <div className={styles.sun_layer3}></div>
      </div>
      <svg className={styles.svg}>
        <filter id="noise1">
          <feTurbulence type="turbulence" baseFrequency=".05" numOctaves="1" seed="3" stitchTiles="stitch" />
          <feDisplacementMap in="SourceGraphic" scale="10" />
        </filter>
      </svg>
    </div>
  );
};

export default FooterBackground;
