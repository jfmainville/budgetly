import React from 'react';
import classes from './Content.module.scss';

const content = (props) => {
  return (
      <main className={classes.Content}>
          {props.children}
      </main>
  )
};

export default content;