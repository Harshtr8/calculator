import React from 'react';
import styles from './ButtonsContainer.module.css';

const buttonLabels = [
  '7', '8', '9', 'C',
  '4', '5', '6', '/',
  '1', '2', '3', '*',
  '0', '.', '-', '+',
  '='
];

const ButtonsContainer = ({ onButtonClick }) => {
  return (
    <div className={styles.buttonsContainer}>
      {buttonLabels.map((label) => (
        <button
          key={label}
          onClick={() => onButtonClick(label)}
          className={styles.button}
        >
          {label}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
