export interface LoadingProps {}

export default function Loading(_props: LoadingProps) {
  return (
    <div className="size-10 rounded-full border border-2 border-t-transparent animate-spin border-black"></div>
  );
}
