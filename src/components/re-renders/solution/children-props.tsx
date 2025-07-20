import MovingBlockSolution from "./moving-block-solution";
import Parent from "./parent";
import VeryLongText from "./very-long-text";
import VerySlowComponent from "./very-slow-component";

export interface ChildrenPropsSolutionProps {}

export default function ChildrenPropsSolution(
  _props: ChildrenPropsSolutionProps
) {
  return (
    <>
      <div className="parent">children</div>
      <MovingBlockSolution>
        <VerySlowComponent />
        <VeryLongText />
      </MovingBlockSolution>
      <Parent content={<VeryLongText />} />
    </>
  );
}
