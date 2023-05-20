export type ProfileCardProps = {
  title: string;
  handle: `@${string}`;
};
function ProfileCard(props: ProfileCardProps) {
  return (
    <div>
      <h3>{props.title}</h3>
      <p>{props.handle}</p>
    </div>
  );
}

export default ProfileCard;
