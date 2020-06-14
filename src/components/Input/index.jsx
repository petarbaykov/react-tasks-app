import React from 'react';

export default props  => {
  return (
    <div className="form-group">
      { props.label ? <label>{props.label}</label> : "" }
      <input {...props} className={`form-control ${props.className}`} autoComplete="asdas" />
    </div>
  );
}