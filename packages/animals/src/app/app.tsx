// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { useState } from 'react';

export function App() {
  const increase = (num: number) => num + 1;
  const handleClick = () => {
    setCount(increase);
  };

  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Hello</p>
      <button onClick={handleClick}>Add Animal</button>
      <div>Number of animals: {count}</div>
    </div>
  );
}

export default App;
