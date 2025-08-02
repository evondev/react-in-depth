import ButtonWithIconProblemSolution from "./components/re-renders/solution/button-with-icon";
import IconPlus from "./components/re-renders/solution/icon-plus";

function App() {
  return (
    <>
      <ButtonWithIconProblemSolution
        iconLeft={<IconPlus />}
        size="lg"
        variant="secondary"
      >
        Get Started
      </ButtonWithIconProblemSolution>
    </>
  );
}

export default App;
