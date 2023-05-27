import { useState } from 'react';
import heart from '../assets/heart.svg';

function Heart() {
  const [clicks, setClicks] = useState(0);

  const handleClick = () => {
    setClicks(clicks + 1);
  };

  return (
    <img
      src={heart}
      alt="Heart"
      onClick={handleClick}
      width={10 + 10 * clicks}
    />
  );
}

export default Heart;
