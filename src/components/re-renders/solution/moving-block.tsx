export interface MovingBlockProps {
  position: number;
}

export default function MovingBlock({ position }: MovingBlockProps) {
  console.info("re-render - MovingBlock");
  return <div>{position}</div>;
}
