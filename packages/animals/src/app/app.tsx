// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { useState } from 'react';

const animals = ['cat', 'dog', 'cow', 'gator', 'fish', ' bird'];

const randomAnimal = () => animals[Math.floor(Math.random() * animals.length)];

export function App() {
  const [animals, setAnimals] = useState<string[]>([]);

  const handleClick = () => {
    setAnimals([...animals, randomAnimal()]);
  };

  return (
    <div>
      <p>Hello</p>
      <button onClick={handleClick}>Add Animal</button>
      {animals.map((animal, index) => (
        <img
          key={index}
          src="https://picsum.photos/200/300"
          alt={`Animal ${animal}`}
        />
      ))}
    </div>
  );
}

export default App;
