import { useState } from "react";
import { users } from "../../../utils";
import ReactKeyItem from "./react-key-item";

export interface ReactKeyProps {}
const itemsPerPage = 50;

export default function ReactKeyIndexV2(_props: ReactKeyProps) {
  const [page, setPage] = useState(0);

  const pagedUsers = users.slice(
    page * itemsPerPage,
    itemsPerPage * (page + 1)
  );
  const pages = Array.from(
    Array(Math.ceil(users.length / itemsPerPage)).keys()
  );

  return (
    <div className="flex items-start flex-col gap-2 p-2">
      <h3>Paginated list with index as key</h3>
      <h4>Page: {page + 1}</h4>
      <div className="flex items-center gap-2">
        {pages.map((p) => (
          <button
            className="size-10 flex items-center justify-center bg-pink-400 cursor-pointer"
            onClick={() => setPage(p)}
          >
            {p + 1}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-4 gap-5">
        {pagedUsers.map((user, index) => (
          <ReactKeyItem
            name={user.username}
            avatar={user.avatar}
            position={index}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
