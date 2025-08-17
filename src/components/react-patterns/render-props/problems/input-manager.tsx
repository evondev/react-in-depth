export interface InputManagerProblemProps {
  value: string;
  handleChange: () => void;
}

export default function InputManagerProblem({
  value,
  handleChange,
}: InputManagerProblemProps) {
  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Giá trị bạn nhập: {value}</p>
    </div>
  );
}
