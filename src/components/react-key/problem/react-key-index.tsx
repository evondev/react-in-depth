import orderBy from "lodash/orderBy";
import { useState } from "react";
import { users } from "../../../utils";
import ReactKeyItem from "./react-key-item";

export interface ReactKeyProps {}

export default function ReactKey(_props: ReactKeyProps) {
  const [sort, setSort] = useState<"asc" | "desc">("asc");
  const sortedUsers = orderBy(users, "username", [sort]);

  return (
    <div className="flex items-start flex-col gap-2 p-2">
      <button
        className="p-2 rounded bg-blue-500 text-white cursor-pointer"
        type="button"
        onClick={() => setSort(sort === "asc" ? "desc" : "asc")}
      >
        Toggle sort
      </button>
      <div className="grid grid-cols-4 gap-5">
        {sortedUsers.map((user, index) => (
          <ReactKeyItem user={user} position={index} key={index} />
        ))}
      </div>
    </div>
  );
}
