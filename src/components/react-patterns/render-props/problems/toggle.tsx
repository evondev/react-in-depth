export interface ToggleProblemProps {
  isOn: boolean;
  toggle: () => void;
}

export default function ToggleProblem({ isOn, toggle }: ToggleProblemProps) {
  return (
    <div>
      <p>Status: {isOn ? "ON" : "OFF"}</p>
      <button onClick={toggle}>{isOn ? "OFF" : "ON"}</button>
    </div>
  );
}
