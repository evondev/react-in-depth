import Loading from "@/components/loading";

export interface withLoadingProps {
  isLoading?: boolean;
}

export default function withLoading<Props extends object>(
  Component: React.ComponentType<Props>,
  componentProps?: {
    loading?: React.ReactNode;
  }
) {
  return (props: Props & withLoadingProps) => {
    // Many codes here...
    if (props.isLoading) return componentProps?.loading || <Loading />;
    return <Component {...props} />;
  };
}
