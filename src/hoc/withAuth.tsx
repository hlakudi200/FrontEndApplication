"use client";
import { useUserActions, useUserSate } from "@/providers/usersprovider";
import { Flex, Spin } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface IWithAuthProps {
  allowedRoles?: string[];
}

const withAuth = (
  WrappedComponent: React.ComponentType,
  { allowedRoles = [] }: IWithAuthProps = {}
) => {
  const Wrapper = (props: any) => {
    const { getCurrentUser } = useUserActions();
    const { isSuccess, isPending, user, isError } = useUserSate();
    const router = useRouter();
    const [isChecking, setIsChecking] = useState(true); 

    useEffect(() => {
      const fetchUser = async () => {
        if (isChecking) {
          await getCurrentUser();
          setIsChecking(false);
        }
      };
      fetchUser();
    }, [isChecking]);

    useEffect(() => {
      if (!isChecking && !isPending) {
        if (isError || !isSuccess) {
          router.replace("/");
        } else if (isSuccess && user?.role) {
          if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
            console.log("log in for loop");
            console.log(user.role)
            router.replace(user.role === "admin" ? "/trainer" : "/client");
          }
        }
      }
    }, [isPending, isSuccess, isError, user, allowedRoles, router, isChecking]);

    if (isPending || isChecking) {
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