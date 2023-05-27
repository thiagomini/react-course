import birdPath from '../assets/bird.svg';
import catPath from '../assets/cat.svg';
import cowPath from '../assets/cow.svg';
import gatorPath from '../assets/gator.svg';
import horsePath from '../assets/horse.svg';

export type Animal = 'cat' | 'dog' | 'cow' | 'gator' | 'horse' | 'bird';

export function imageForAnimal(animal: Animal) {
  const svgMap: Record<string, string> = {
    bird: birdPath,
    cat: catPath,
    cow: cowPath,
    gator: gatorPath,
    horse: horsePath,
  };

  return svgMap[animal];
}
