import Input from "./input";

export interface WrapperProps {}

export default function Wrapper(_props: WrapperProps) {
  return (
    <div>
      <Input placeholder="text1" id="1" />
      <Input placeholder="text2" id="2" />
    </div>
  );
}

/*
const item = {
  type: "div",
  props: {
    children: [
      {
        type: Input,
        props: {
          placeholder: "text1",
          id: "1"
        }
      },
      {
        type: Input,
        props: {
          placeholder: "text2",
          id: "2"
        }
      }
    ]
  }
}
*/
