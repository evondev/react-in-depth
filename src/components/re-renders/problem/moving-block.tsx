export interface MovingBlockProps {
  position: number;
}

export default function MovingBlock({ position }: MovingBlockProps) {
  return <div>{position}</div>;
}
