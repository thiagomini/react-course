export type ProfileCardProps = {
  title: string;
  handle: `@${string}`;
};
function ProfileCard({ title, handle }: ProfileCardProps) {
  return (
    <div>
      <h3>{title}</h3>
      <p>{handle}</p>
    </div>
  );
}

export default ProfileCard;
