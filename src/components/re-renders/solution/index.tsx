import ButtonWithDialog from "./button-with-dialog";
import VerySlowComponent from "./very-slow-component";

export interface ReactReRenderSolutionProps {}

export default function ReactReRenderSolution(
  _props: ReactReRenderSolutionProps
) {
  return (
    <div>
      <ButtonWithDialog />
      <VerySlowComponent />
    </div>
  );
}
