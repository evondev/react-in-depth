import withAuth from "./react-patterns/hoc-and-hooks/solutions/with-auth";
import withLoading from "./react-patterns/hoc-and-hooks/solutions/with-loading";

export interface UserProfileProps {}

function UserProfileComponent() {
  return <div>UserProfile</div>;
}

const UserProfile = withLoading(withAuth(UserProfileComponent), {
  loading: <div>Loading...</div>,
});

export default UserProfile;
