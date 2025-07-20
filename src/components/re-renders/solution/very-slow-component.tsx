export interface VerySlowComponentProps {}
const wait = (ms: number) => {
  const start = Date.now();
  let now = start;

  while (now - start < ms) now = Date.now();
};
export default function VerySlowComponent(_props: VerySlowComponentProps) {
  console.log("re-render - VerySlowComponent");

  wait(5000);
  return <div>VerySlowComponent</div>;
}
