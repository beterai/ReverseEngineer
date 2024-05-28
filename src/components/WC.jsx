import React from 'react';

const WhiteCircle = ({ diameter }) => {
  const circleStyle = {
    width: diameter,
    height: diameter,
    borderRadius: '50%',
    backgroundColor: 'white',
  };

  return <div style={circleStyle}></div>;
};

export default WhiteCircle;
