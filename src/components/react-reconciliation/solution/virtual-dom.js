// <input type="text" placeholder={placeholder} id={id}></input>
const inputVirtualDOM = {
  type: "input",
  props: {
    type: "text",
    placeholder: "",
    id: "",
  },
};
{
  /* <>
  <label htmlFor={id}>{label}</label>
  <input type="text" placeholder={placeholder} id={id}></input>
</> */
}
const inputVirtualDOMArray = [
  {
    type: "label",
    props: {
      htmlFor: "",
      children: "",
    },
  },
  {
    type: "input",
    props: {
      type: "text",
      placeholder: "",
      id: "",
    },
  },
];
{
  /* <Input placeholder="Enter your name" id="your-name" />
  {
    type: Input,
    props: {
      placeholder: "",
      id: ""
    }
  }

  */
}
