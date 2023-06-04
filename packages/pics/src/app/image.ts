export type ImageProps = {
  id: string;
  url: string;
  alt: string;
};

export class Image {
  private constructor(
    public readonly id: string,
    public readonly url: URL,
    public readonly alt: string
  ) {}

  public static create(props: ImageProps): Image {
    return new Image(props.id, new URL(props.url), props.alt);
  }
}
