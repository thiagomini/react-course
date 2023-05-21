export type ProfileCardProps = {
  title: string;
  handle: `@${string}`;
  image: string;
};
function ProfileCard({ title, handle, image }: ProfileCardProps) {
  return (
    <div>
      <img src={image} alt="PDA Logo" />
      <h3>{title}</h3>
      <p>{handle}</p>
    </div>
  );
}

export default ProfileCard;
