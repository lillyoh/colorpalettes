import React from 'react';
import './Page.css';

const Page = props => {
  return (
    <section className='page'>
      {props.children}
    </section>
  );
}

export default Page;
