import Display from './components/Display';
import styles from './App.module.css';
import ButtonsContainer from './components/ButtonsContainer';
import { useState } from 'react';

function App() {
  const [calVal, setCalVal] = useState("");
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const onButtonClick = (buttonText) => {
    if (buttonText === 'C') {
      setCalVal("");
    } else if (buttonText === '=') {
      try {
        const result = eval(calVal);
        setHistory([...history, { expression: calVal, result }]);
        setCalVal(result.toString());
      } catch (error) {
        setCalVal("Error");
      }
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${styles.calculator} ${darkMode ? styles.dark : ''}`}>
      <button onClick={toggleDarkMode} className={styles.toggleMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
      <Display displayValue={calVal} />
      <ButtonsContainer onButtonClick={onButtonClick} />
      <div className={styles.history}>
        <h3>History</h3>
        <ul>
          {history.map((item, index) => (
            <li key={index}>
              {item.expression} = {item.result}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
