import birdPath from '../assets/bird.svg';
import catPath from '../assets/cat.svg';
import cowPath from '../assets/cow.svg';
import gatorPath from '../assets/gator.svg';
import horsePath from '../assets/horse.svg';

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

type Animal = 'cat' | 'dog' | 'cow' | 'gator' | 'horse' | 'bird';

function imageForAnimal(animal: Animal) {
  const svgMap: Record<string, string> = {
    bird: birdPath,
    cat: catPath,
    cow: cowPath,
    gator: gatorPath,
    horse: horsePath,
  };

  return svgMap[animal];
}
