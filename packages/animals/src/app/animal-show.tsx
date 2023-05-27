export type AnimalShowProps = {
  type?: string;
};

function AnimalShow({ type }: AnimalShowProps) {
  return (
    <div>
      <img src="https://picsum.photos/200/300" alt={`Animal ${type}`} />
    </div>
  );
}

export default AnimalShow;
