import { useState } from "react";

export interface ReactReconciliationSolutionProps {}

export default function ReactReconciliationSolution(
  _props: ReactReconciliationSolutionProps
) {
  const [isCompany, setIsCompany] = useState(true);
  return (
    <div className="flex gap-5 p-5">
      <input
        type="checkbox"
        checked={isCompany}
        onChange={(e) => setIsCompany(e.target.checked)}
      />
      {isCompany ? (
        <input
          type="text"
          className="p-3 border border-gray-300 rounded-md outline-none"
          id="company-number"
          placeholder="Enter your company number"
          key="company-number"
        />
      ) : (
        <input
          type="text"
          className="p-3 border border-gray-300 rounded-md outline-none"
          id="person-number"
          placeholder="Enter your person number"
          key="person-number"
        />
      )}
    </div>
  );
}
/*
const virtualDOM = {
  props: {
    children: [
      {
        type: "input",
      },
      {
        type: "input",
      },
    ],
  },
};

const virtualDOMArrayNew = {
  props: {
    children: [
      {
        type: "input", //checkbox
      },
      {
        type: "input",
        key:"company-number"
      },
    ],
  },
};
const virtualDOMArrayNew2 = {
  props: {
    children: [
      {
        type: "input", //checkbox
      },
      {
        type: "input",
        key:"person-number"
      },
    ],
  },
};
const virtualDOMArray = {
  props: {
    children: [
      {
        type: "input",
      },
      {
        type: "input",
      },
      null,
    ],
  },
};
const virtualDOMArray2 = {
  props: {
    children: [
      {
        type: "input",
      },
      null,
      {
        type: "input",
      },
    ],
  },
};
*/
