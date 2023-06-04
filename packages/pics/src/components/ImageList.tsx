import { Image } from '../app/image';
import ImageShow from './ImageShow';
import './ImageList.css';

export type ImageListProps = {
  images: Image[];
};

function ImageList(props: ImageListProps) {
  return (
    <div className="image-list">
      {props.images.map((image) => (
        <ImageShow image={image} key={image.id} />
      ))}
    </div>
  );
}

export default ImageList;
