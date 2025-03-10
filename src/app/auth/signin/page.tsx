"use client";
import { Button, Flex, Form, Input } from "antd";
import { MailFilled } from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.css";
import { toast } from "@/providers/ToastProvider/toast";
import Image from "next/image";
import { IUser } from "@/providers/usersprovider/models";
import { useUserActions, useUserSate } from "@/providers/usersprovider";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useUserActions();

  const handleSingIn = async () => {
    await signIn(email, password)
      .then(() => {
        toast("successful", "success");
      
      })
      .catch((error) => toast("error", error));
  };

  return (
    <Flex justify="space-between" className={styles.outerContainer}>
      <div
        style={{ width: "50%", height: "100vh" }}
        className={styles.leftContainer}
      >
        <Image
          src="/images/auth-image.jpg"
          alt="loginImage"
          sizes="100vw"
          width={100}
          height={100}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>

      <div className={styles.rightContainer} id="rightContainer">
        <div>
          <Image
            src="/images/logoBG.png"
            alt=""
            width={677}
            height={300}
            style={{ objectFit: "contain" }}
            className={styles.logo}
          />
        </div>
        <h1 style={{ fontSize: 50, marginBottom: 20 }}>
          Sign <span style={{ color: "Red" }}>In.</span>
        </h1>
        <Form className={styles.loginForm}>
          <Form.Item name="email" rules={[{ required: true }]}>
            <Input
              placeholder="Email"
              suffix={<MailFilled />}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Input.Password
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <Form.Item>
            <Flex justify="center">
              <Button type="primary" onClick={handleSingIn}>
                Sign In
              </Button>
            </Flex>
          </Form.Item>
          <Form.Item>
            <Flex justify="center">
              <p style={{ fontSize: 12 }}>
                Don&apos;t have an account?{""}
                <Link href={"/auth/signup"}> Register an account.</Link>
              </p>
            </Flex>
          </Form.Item>
        </Form>
      </div>
    </Flex>
  );
};

export default SignIn;
