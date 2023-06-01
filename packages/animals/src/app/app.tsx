import { Animal } from './animal-img-map';
import AnimalShow from './animal-show';
import './app.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';
import { useState } from 'react';

const possibleAnimals: Animal[] = [
  'cat',
  'dog',
  'cow',
  'gator',
  'horse',
  'bird',
];

const randomAnimal = () =>
  possibleAnimals[Math.floor(Math.random() * possibleAnimals.length)];

export function App() {
  const [animals, setAnimals] = useState<Animal[]>([]);

  const handleClick = () => {
    setAnimals([...animals, randomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => (
    <AnimalShow type={animal} key={index} />
  ));

  return (
    <div className='app'>
      <p>Hello</p>
      <button onClick={handleClick}>Add Animal</button>
      <div className='animal-list'>{renderedAnimals}</div>
    </div>
  );
}

export default App;
