export interface ToggleProblemProps {
  isOn: boolean;
  toggle: () => void;
  isHideText?: boolean;
}

export default function ToggleProblem({
  isOn,
  toggle,
  isHideText,
}: ToggleProblemProps) {
  return (
    <div>
      {!isHideText && <p>Status: {isOn ? "ON" : "OFF"}</p>}
      <button
        className="p-2 rounded-full bg-blue-500 text-white cursor-pointer w-20"
        onClick={toggle}
      >
        {isOn ? "OFF" : "ON"}
      </button>
    </div>
  );
}
