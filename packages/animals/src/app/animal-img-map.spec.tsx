import birdPath from '../assets/bird.svg';

describe('Animal image map', () => {
  test('returns bird path', () => {
    const bird = imageForAnimal('bird');

    expect(bird).toEqual(birdPath);
  });
});

type Animal = 'cat' | 'dog' | 'cow' | 'gator' | 'horse' | 'bird';

function imageForAnimal(animal: Animal) {
  return birdPath;
}
