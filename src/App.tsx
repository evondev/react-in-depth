import { useState } from "react";
import ButtonWithIconProblemSolution from "./components/re-renders/solution/button-with-icon";
import IconPlus from "./components/re-renders/solution/icon-plus";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="flex gap-5 items-center">
      <ButtonWithIconProblemSolution
        iconLeft={<IconPlus />}
        size="lg"
        variant="primary"
        className="gap-5"
      >
        <span>Get Started</span>
      </ButtonWithIconProblemSolution>
      <ButtonWithIconProblemSolution
        iconLeft={<IconPlus />}
        size="sm"
        variant="primary"
        isLoading
      >
        <span>Get Started</span>
      </ButtonWithIconProblemSolution>
      <ButtonWithIconProblemSolution
        iconLeft={<IconPlus />}
        size="md"
        variant="secondary"
        isLoading
      >
        <span>Get Started</span>
      </ButtonWithIconProblemSolution>
      <ButtonWithIconProblemSolution
        iconLeft={<IconPlus />}
        size="lg"
        variant="ghost"
        isLoading={isLoading}
        onClick={() => setIsLoading(!isLoading)}
      >
        <span>Get Started</span>
      </ButtonWithIconProblemSolution>
    </div>
  );
}

export default App;
