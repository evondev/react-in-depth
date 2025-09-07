import UserAvatar from "./components/user-avatar";
import UserProfile from "./components/user-profile";

function App() {
  return (
    <div className="flex gap-5 flex-col">
      <UserProfile />
      <UserAvatar url="https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
    </div>
  );
}

export default App;
