export interface HocLoadingProblemProps {
  isLoading?: boolean;
}

export default function HocLoadingProblem({
  isLoading,
}: HocLoadingProblemProps) {
  if (isLoading) return <div>Loading...</div>;
  return <div>HocLoadingProblem</div>;
}
