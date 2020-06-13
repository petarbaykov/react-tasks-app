import React from 'react';

export default props  => {
  return (
    <div className="input-group">
      { props.label ? <label>{props.label}</label> : "" }
      <input {...props} autoComplete="asdas" />
    </div>
  );
}