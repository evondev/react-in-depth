import { useState } from "react";

export interface ReactReconciliationProblemProps {}

export default function ReactReconciliationProblem(
  _props: ReactReconciliationProblemProps
) {
  const [isCompany, setIsCompany] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        checked={isCompany}
        onChange={(e) => setIsCompany(e.target.checked)}
      />
      {isCompany ? (
        <input id="company-number" placeholder="Enter your company number" />
      ) : (
        <div>hello</div>
      )}
    </div>
  );
}
