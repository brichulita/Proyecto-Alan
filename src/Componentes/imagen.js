import React from 'react';

const LogoImage = () => {
  return (
    <div style={styles.container}>
      <img 
        src="https://static.vecteezy.com/system/resources/previews/018/795/372/non_2x/fitness-and-gym-logo-free-png.png" 
        alt="Fitness and Gym Logo" 
        style={styles.image}
      />
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '300px', 
  },
  image: {
    width: '300px', 
    height: 'auto', 
  },
};

export default LogoImage;
