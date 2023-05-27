import birdPath from '../assets/bird.svg';
import catPath from '../assets/cat.svg';
import cowPath from '../assets/cow.svg';
import gatorPath from '../assets/gator.svg';
import horsePath from '../assets/horse.svg';
import { imageForAnimal } from './animal-img-map';

describe('Animal image map', () => {
  test('returns bird path', () => {
    const bird = imageForAnimal('bird');

    expect(bird).toEqual(birdPath);
  });

  test('returns cat path', () => {
    const cat = imageForAnimal('cat');

    expect(cat).toEqual(catPath);
  });

  test('returns cow path', () => {
    const cow = imageForAnimal('cow');

    expect(cow).toEqual(cowPath);
  });

  test('returns gator path', () => {
    const gator = imageForAnimal('gator');

    expect(gator).toEqual(gatorPath);
  });

  test('returns horse path', () => {
    const horse = imageForAnimal('horse');

    expect(horse).toEqual(horsePath);
  });
});
