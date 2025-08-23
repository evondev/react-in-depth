export interface ListSolutionProps<T> {
  items: T[];
  render: (item: T, index: number) => React.ReactNode;
}

export default function ListSolution<T>({
  items = [],
  render,
}: ListSolutionProps<T>) {
  return <>{items.map((item, index) => render(item, index))}</>;
}
