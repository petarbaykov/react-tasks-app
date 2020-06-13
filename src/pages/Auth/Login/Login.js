import React, { useState } from 'react';

export default () => {

  // const []
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  const onInputChange = (e) => {
    e.persist();
  }

  return (
    <div>
      Login
    </div>
  )
}