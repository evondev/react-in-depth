import { useEffect, useState } from "react";

export interface withAuthProps {}

export default function withAuth<Props extends object>(
  Component: React.ComponentType<Props>
) {
  return (props: Props) => {
    const [userRole, setUserRole] = useState<"admin" | "user">("user");
    useEffect(() => {
      const timer = setTimeout(async () => {
        // const response = await fetchUserDetails();
        // response.user.role
        setUserRole("admin");
      }, 5000);
      return () => clearTimeout(timer);
    }, []);

    if (userRole === "admin") return <Component {...props} />;
    else {
      return null;
    }
  };
}
