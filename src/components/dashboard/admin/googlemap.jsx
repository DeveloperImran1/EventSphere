import React from "react";

const GoogleMap = () => {
  return (
    <div className="" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div
        style={{
          position: 'relative',
          paddingBottom: '56.25%', // This ratio is for 16:9 aspect ratio
          height: 0,
          overflow: 'hidden',
          width: '100%',
          maxWidth: '1200px', // Set a max width for larger screens
        }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.46556324411!2d90.30716657479572!3d23.87310438405558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c2102dc1cd51%3A0x6f95e92193fc8978!2sCity%20University%20Bangladesh!5e0!3m2!1sen!2sbd!4v1727115530756!5m2!1sen!2sbd"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '50%',
            border: 0,
          }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMap;
