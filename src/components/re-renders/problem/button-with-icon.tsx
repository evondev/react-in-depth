export interface ButtonWithIconProblemProps {
  isLoading?: boolean;
}

export default function ButtonWithIconProblem({
  isLoading,
}: ButtonWithIconProblemProps) {
  return <button>Button {isLoading ? "Loading" : ""}</button>;
}
