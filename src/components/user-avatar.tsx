import withAuth from "./react-patterns/hoc-and-hooks/solutions/with-auth";
import withLoading from "./react-patterns/hoc-and-hooks/solutions/with-loading";

export interface UserAvatarProps {
  url?: string;
}

function UserAvatarComponent({ url }: UserAvatarProps) {
  return (
    <div>
      <img src={url} />
    </div>
  );
}

const UserAvatar = withLoading(withAuth(UserAvatarComponent), {});

export default UserAvatar;
