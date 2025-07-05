export interface InputProps {
  placeholder?: string;
  id?: string;
  label?: string;
}

export default function Input({ placeholder, id, label }: InputProps) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="text" placeholder={placeholder} id={id}></input>
    </>
  );
}
