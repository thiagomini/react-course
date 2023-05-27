import { Animal, imageForAnimal } from './animal-img-map';

export type AnimalShowProps = {
  type: Animal;
};

function AnimalShow({ type }: AnimalShowProps) {
  const image = imageForAnimal(type);

  return (
    <div>
      <img src={image} alt={`Animal ${type}`} />
    </div>
  );
}

export default AnimalShow;
