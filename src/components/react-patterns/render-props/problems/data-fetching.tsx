export interface DataFetchingProblemProps {
  isLoading?: boolean;
  data: string[];
}

export default function DataFetchingProblem({
  isLoading,
  data = [],
}: DataFetchingProblemProps) {
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {data.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
