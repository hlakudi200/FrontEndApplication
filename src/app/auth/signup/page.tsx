"use client";
import { Button, Flex, Form, Input, Select, Switch } from "antd";
import {
  MailFilled,
  UserOutlined,
  ArrowRightOutlined,
  PhoneFilled,
} from "@ant-design/icons";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./styles.module.css";
import Image from "next/image";

const { Option } = Select;
const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [planType, setPlanType] = useState("");
 
  
  const handleNextClick = () => {
    const secondformSection = document.getElementById("secondSection");
    console.log(secondformSection);
    const firstFormSection = document.getElementById("firstSection");
    secondformSection.style.display = "block";
    firstFormSection.style.display = "none";
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
            height={200}
            style={{ objectFit: "contain" }}
            className={styles.logo}
          />
        </div>
        <h1 style={{ fontSize: 40, marginBottom: 20 }}>
          Sign <span style={{ color: "Red" }}>Up.</span>
        </h1>
        <Form className={styles.loginForm}>
          <div id="firstSection">
            <Form.Item name="Name" rules={[{ required: true }]}>
              <Input
                placeholder="Name"
                suffix={<UserOutlined />}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Item>
            <Form.Item>
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
                suffix={<MailFilled />}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="selectInput"
              rules={[{ required: true, message: "Please select a role!" }]}
            >
              <Select
                placeholder="Please select a role"
                onChange={(value: string) => setRole(value)}
              >
                <Option value="Admin">Trainer</Option>
                <Option value="Client">Client</Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Flex justify="end">
                <Button
                  type="primary"
                  value="small"
                  icon={<ArrowRightOutlined />}
                  onClick={handleNextClick}
                >
                  Next Step
                </Button>
              </Flex>
            </Form.Item>
            <Form.Item>
              <Flex justify="center">
                <p style={{ fontSize: 12 }}>
                  have an account ?{""}
                  <Link href={"/auth/signin"}> Sign in.</Link>
                </p>
              </Flex>
            </Form.Item>
          </div>
          <div className={styles.secondSection} id="secondSection">
            <Form.Item
              name="contactNumber"
              rules={[
                {
                  required: true,
                  message: "Please input your contact number!",
                },
                {
                  pattern: /^[/b]+$/,
                  message: "Contact number must be numeric!",
                },
              ]}
            >
              <Input
                placeholder="Contact Number(+27 943 895 945)"
                suffix={<PhoneFilled />}
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="select Plan"
              rules={[{ required: true, message: "Please select a plan" }]}
            >
              <Select
                placeholder="Select a plan"
                onChange={(value: string) => setPlanType(value)}
                
              >
                <Option value="Premier">Premier</Option>
                <Option value="PremierSelect">Premier Select</Option>
                <Option value="Base">Base</Option>
              </Select>
            </Form.Item>
            <Flex justify="center">
              <Button type="primary" value="small" onClick={handleNextClick}>
                Sing Up
              </Button>
            </Flex>
            <Form.Item name="policyAccepted"  rules={[{ required: true, message: "Please accept Privacy Policy." }]}>
              <Flex vertical >
                <div>
                  <p style={{ fontSize: 13, marginTop: 20 }}>
                    Click to our Read our Privacy Policy {""}
                    <Link href={"/auth/signin"}> Privacy Policy.</Link>
                  </p>
                </div>
                <div>
                  <p style={{ fontSize: 13 }}>Accept Privacy Policy : </p>
                  <Switch
                    onChange={(checked: boolean) => {
                      setPrivacyPolicy(checked);
                    }}
                  />
                </div>
              </Flex>
            </Form.Item>
          </div>
        </Form>
      </div>
    </Flex>
  );
};

export default SignUp;
