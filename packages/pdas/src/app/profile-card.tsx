export type ProfileCardProps = {
  title: string;
};
function ProfileCard(props: ProfileCardProps) {
  return <p>{props.title}</p>;
}

export default ProfileCard;
