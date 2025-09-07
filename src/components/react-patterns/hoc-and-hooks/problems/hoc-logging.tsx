export interface HocLoggingProblemProps {
  isLoggedIn?: boolean;
}

export default function HocLoggingProblem({
  isLoggedIn,
}: HocLoggingProblemProps) {
  if (!isLoggedIn) return <div>Please logged in first!</div>;
  return <div>HocLoggingProblem</div>;
}
