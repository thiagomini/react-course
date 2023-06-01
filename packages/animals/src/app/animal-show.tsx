import { useState } from 'react';
import { Animal, imageForAnimal } from './animal-img-map';
import './animal-show.css';
import heart from '../assets/heart.svg';

export type AnimalShowProps = {
  type: Animal;
};

function AnimalShow({ type }: AnimalShowProps) {
  const image = imageForAnimal(type);

  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <div className='animal-show'>
      <img className='animal' src={image} alt={`Animal ${type}`}  onClick={handleClick} />
      <img
        className='heart'
        src={heart}
        alt="Heart"
        width={10 + 10 * clicks}
    />
    </div>
  );
}

export default AnimalShow;
