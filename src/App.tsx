import UserAvatar from "./components/user-avatar";
import UserProfile from "./components/user-profile";

function App() {
  return (
    <div className="flex gap-5 flex-col">
      <UserProfile isLoading />
      <UserAvatar isLoading />
    </div>
  );
}

export default App;
