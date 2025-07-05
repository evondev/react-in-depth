import { useState } from "react";
import Input from "./input";
import Wrapper from "./wrapper";

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
      <Wrapper />
      <Input placeholder="Enter your name" id="your-name" />
      {isCompany ? (
        <input
          className="p-3 border border-gray-300 rounded-md outline-none"
          id="company-number"
          placeholder="Enter your company number"
        />
      ) : (
        <input
          className="p-3 border border-gray-300 rounded-md outline-none"
          id="person-number"
          placeholder="Enter your person number"
        />
      )}
    </div>
  );
}
// const input = document.getElementById("your-name")
// input.setAttribute("placeholder", "Enter your name");
// virtual DOM -> DOM ảo
