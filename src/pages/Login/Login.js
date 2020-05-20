import React, { useState } from 'react';
import Input from '../../components/Input';
import Button from '../../components/Button';

export default () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }

  const onInputChange = () => {

  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <Input />
        <Input />
        <Button>
          Login
        </Button>
      </form>
    </div>
  )
}