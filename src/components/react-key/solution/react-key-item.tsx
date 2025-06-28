import { useState } from "react";

export interface ReactKeyItemProps {
  name: string;
  avatar: string;
  position: number | string;
}

export default function ReactKeyItem({
  name,
  avatar,
  position,
}: ReactKeyItemProps) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={`"flex items-center gap-2 break-all", ${
        isActive ? "bg-blue-200" : "bg-white"
      }`}
      onClick={() => setIsActive(!isActive)}
    >
      <img src={avatar} alt="" className="size-40" />
      <div>{name}</div>
      <div className="font-bold text-lg">{position}</div>
    </div>
  );
}
