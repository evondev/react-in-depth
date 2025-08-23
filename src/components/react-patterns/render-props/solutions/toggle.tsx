import { useState } from "react";

export interface ToggleSolutionProps {
  render: ({
    isOn,
    toggle,
  }: {
    isOn: boolean;
    toggle: () => void;
  }) => React.ReactNode;
}

export default function ToggleSolution({ render }: ToggleSolutionProps) {
  const [isOn, setIsOn] = useState(false);
  const toggle = () => setIsOn(!isOn);
  return render({ isOn, toggle });
}
