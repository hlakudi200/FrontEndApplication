"use client";
import React from "react";
import { Button, Flex } from "antd";
import { useRouter } from "next/navigation";
export default function Home() {
  const router = useRouter();
  return (
    <Flex justify="center">
      <div style={{marginRight:20}}>
        <Button
          type="primary"
          onClick={() => router.push("/auth/signup")}
        >
          Sing Up
        </Button>
      </div>
      <div style={{marginRight:20}}>
        <Button type="primary" onClick={() => router.push("/auth/signin")}>
          Sign In
        </Button>
      </div>
    </Flex>
  );
}
