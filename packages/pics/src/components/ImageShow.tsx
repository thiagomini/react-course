import { Image } from '../app/image';

export type ImageShowProps = {
  image: Image;
};

function ImageShow(props: ImageShowProps) {
  return (
    <div>
      <img src={props.image.url.href} alt={props.image.alt} />
    </div>
  );
}

export default ImageShow;
