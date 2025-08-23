import ListSolution from "./components/react-patterns/render-props/solutions/list";
import { cn } from "./lib/utils";

function App() {
  const items: {
    title: string;
    level: "easy" | "medium" | "expert";
  }[] = [
    {
      title: "React in depth course",
      level: "medium",
    },
    {
      title: "HTML CSS for beginners",
      level: "easy",
    },
    {
      title: "NextJS in depth",
      level: "expert",
    },
  ];
  return (
    <div className="flex gap-5 flex-col">
      <ListSolution
        items={["evondev", "react advanced", "react in depth"]}
        render={(item, index) => {
          return (
            <div key={index} className="flex items-center gap-3 text-white">
              <div className="rounded-full bg-indigo-500 size-5 text-white font-bold flex items-center justify-center text-xs">
                {index + 1}
              </div>
              <div>{item}</div>
            </div>
          );
        }}
      />
      <ListSolution
        items={items}
        render={(item, index) => {
          return (
            <div key={index} className="flex items-center gap-3 text-white">
              <div>{item.title}</div>
              <div
                className={cn(
                  "rounded-full bg-pink-500 p-2 text-white font-bold flex items-center justify-center text-xs",
                  {
                    "bg-green-500": item.level === "easy",
                    "bg-orange-500": item.level === "medium",
                    "bg-red-500": item.level === "expert",
                  }
                )}
              >
                {item.level}
              </div>
            </div>
          );
        }}
      />
    </div>
  );
}

export default App;
