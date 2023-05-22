export type ProfileCardProps = {
  title: string;
  handle: `@${string}`;
  image: string;
};
function ProfileCard({ title, handle, image }: ProfileCardProps) {
  return (
    <div className="card">
      <div className="card-image">
        <figure className="image is-1by1">
          <img src={image} alt="PDA Logo" />
        </figure>
      </div>

      <div className="card-content">
        <div className="media-content">
          <p className="title is-4">{title}</p>
          <p className="subtitle is-6">{handle}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
