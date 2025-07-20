import { useState } from "react";
import MovingBlock from "./moving-block";
import VeryLongText from "./very-long-text";
import VerySlowComponent from "./very-slow-component";

export interface ChildrenPropsProblemProps {}

export default function ChildrenPropsProblem(
  _props: ChildrenPropsProblemProps
) {
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
        <VerySlowComponent />
        <VeryLongText />
        {/* Other code below... */}
      </div>
    </div>
  );
}
