import { useState } from "react";
import MovingBlock from "./moving-block";

export interface MovingBlockSolutionProps {
  children: React.ReactNode;
}

export default function MovingBlockSolution({
  children,
}: MovingBlockSolutionProps) {
  const [position, setPosition] = useState(300);
  const onScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const calculated = (event.target as HTMLDivElement).scrollTop;
    setPosition(calculated);
  };
  return (
    <div className="h-[200vh]">
      <div
        className="scrollable-block overflow-auto h-full max-h-[500px]"
        onScroll={onScroll}
      >
        <MovingBlock position={position} />

        {children}
      </div>
    </div>
  );
}
