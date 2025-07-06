export interface ComponentKeyProps {}
const data = [1, 2, 3, 4, 5];
const Input = () => <input />;
export default function ComponentKey(_props: ComponentKeyProps) {
  return (
    <>
      <Input />
    </>
  );
}
/**
 * {
 *  type: Input
 * }
 * {
 *  type: Input
 * }
 */
const funcA = () => {};
const funcB = () => {};
// console.log(funcA === funcB) -> false
const virtualDOM = [
  [
    {
      type: "div",
    },
    {
      type: "div",
    },
    {
      type: "div",
    },
    {
      type: "div",
    },
    {
      type: "div",
    },
  ],
  {
    type: "div", // 100
  },
];
