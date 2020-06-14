import React from 'react';

export default props  => {
  return (
    <button {...props} className={`btn ${props.className}`}>
      { props.children }
    </button>
  );
}