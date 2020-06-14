import React from 'react';
import Header from './Header';
import Container from '../Container';

export default props  => {
  return (
      <div>
          <Header />
          <Container className={props.className}>
            { props.children }
          </Container>
          
      </div>
  );
}