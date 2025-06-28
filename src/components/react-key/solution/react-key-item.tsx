import type { UserData } from "../../..";

export interface ReactKeyItemProps {
  user: UserData;
  position: number;
}

export default function ReactKeyItem({ user, position }: ReactKeyItemProps) {
  return (
    <div className="flex items-center gap-2 break-all">
      <img src={user.avatar} alt="" className="size-40" />
      <div>{user.username}</div>
      <div className="font-bold text-lg">{position}</div>
    </div>
  );
}
