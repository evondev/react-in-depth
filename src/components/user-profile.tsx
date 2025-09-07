import withLoading from "./react-patterns/hoc-and-hooks/solutions/with-loading";

export interface UserProfileProps {}

function UserProfileComponent() {
  return <div>UserProfile</div>;
}

const UserProfile = withLoading(UserProfileComponent, {
  loading: <div>Loading...</div>,
});

export default UserProfile;
