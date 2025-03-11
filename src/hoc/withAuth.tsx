"use client";
import { useUserActions, useUserSate } from "@/providers/usersprovider";
import { Flex, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface IWithAuthProps {
  allowedRoles?: string[];
}

const withAuth = (
  WrappedComponent: React.ComponentType,
  { allowedRoles = [] }: IWithAuthProps = {}
) => {
  const Wrapper = (props: any) => {
    const { getCurrentUser } = useUserActions();
    const { isSuccess, isPending, user } = useUserSate();
    const router = useRouter();

    useEffect(() => {
      getCurrentUser();
    }, []);

    useEffect(() => {
      if (!isPending && !isSuccess) {
        router.push("/");
      } else if (isSuccess && user?.role) {
        if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
          if (user.role === "admin") {
            router.push("/trainer");
          } else {
            router.push("/client");
          }
        }
      }
    }, [isPending, isSuccess, user, allowedRoles, router]);

    if (isPending) {
      return (
        <Flex justify="center" style={{ marginBottom: 20 }}>
          <Spin size="large" />
        </Flex>
      );
    }

    if (
      isSuccess &&
      user?.role &&
      (allowedRoles.length === 0 || allowedRoles.includes(user.role))
    ) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };

  return Wrapper;
};

export default withAuth;
