import withLoading from "./react-patterns/hoc-and-hooks/solutions/with-loading";

export interface UserAvatarProps {}

function UserAvatarComponent() {
  return <div>UserAvatar</div>;
}

const UserAvatar = withLoading(UserAvatarComponent, {});

export default UserAvatar;
