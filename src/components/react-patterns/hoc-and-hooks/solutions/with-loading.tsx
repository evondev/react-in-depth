import Loading from "@/components/loading";

export interface withLoadingProps {
  isLoading?: boolean;
  url?: string;
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
    const url =
      "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    return <Component {...props} url={url} />;
  };
}
