import ButtonWithIconProblemSolution from "./components/re-renders/solution/button-with-icon";
import IconPlus from "./components/re-renders/solution/icon-plus";

function App() {
  return (
    <>
      <ButtonWithIconProblemSolution
        iconLeft={<IconPlus className="stroke-pink-500 size-7" />}
        size="md"
        variant="ghost"
        className="gap-5"
      >
        <span>Get Started</span>
      </ButtonWithIconProblemSolution>
    </>
  );
}

export default App;
