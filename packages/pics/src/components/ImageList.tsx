import { Image } from '../app/image';
import ImageShow from './ImageShow';

export type ImageListProps = {
  images: Image[];
};

function ImageList(props: ImageListProps) {
  return (
    <div>
      {props.images.map((image) => (
        <ImageShow image={image} key={image.id} />
      ))}
    </div>
  );
}

export default ImageList;
