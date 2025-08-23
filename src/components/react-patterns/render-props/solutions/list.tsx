export interface ListProblemProps {
  items: string[];
}

export default function ListProblem({ items = [] }: ListProblemProps) {
  return (
    <div>
      {items.map((item, index) => (
        <div key={index} style={{ color: index % 2 === 0 ? "blue" : "red" }}>
          {index + 1}. {item}
        </div>
      ))}
    </div>
  );
}
