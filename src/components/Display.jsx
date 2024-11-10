import React from 'react';
import styles from './Display.module.css';

const Display = ({ displayValue }) => {
  return (
    <div className={styles.display}>
      {displayValue || "0"}
    </div>
  );
};

export default Display;
