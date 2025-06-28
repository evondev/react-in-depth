import { useState } from "react";
import { users } from "../../../utils";
import ReactKeyItem from "./react-key-item";

export interface ReactKeyProps {}

export default function ReactKey(_props: ReactKeyProps) {
  const [count, setCount] = useState(0);

  return (
    <div className="flex items-start flex-col gap-2 p-2">
      <button
        className="p-2 rounded bg-blue-500 text-white cursor-pointer"
        type="button"
        onClick={() => setCount(count + 1)}
      >
        Re-render
      </button>
      <div className="grid grid-cols-4 gap-5">
        {users.map((user, index) => (
          <ReactKeyItem user={user} position={index} key={Math.random()} />
        ))}
      </div>
    </div>
  );
}
