"use client";
import { Button, Flex, Form, Input, Select, Checkbox, DatePicker } from "antd";
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
import { toast } from "@/providers/ToastProvider/toast";
import dayjs from "dayjs";
import { useUserActions } from "../../../providers/usersprovider";
import { IUser } from "../../../providers/usersprovider/models";

const { Option } = Select;

const SignUp = () => {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const { signUp } = useUserActions();

  const handleSignUp = async (values: any) => {
    setLoading(true);
    try {
      const userPayload: IUser = {
        name: values.name,
        email: values.email,
        password: values.password,
        confirmPassword: values.confirmPassword,
        role: values.role || "client",
        contactNumber: values.contactNumber,
        planType: values.planType || "",
        activeState: values.role === "admin" ? true : undefined,
        trial: values.role === "admin" ? false : undefined,
        dateOfBirth: values.dateOfBirth
          ? dayjs(values.dateOfBirth).format("YYYY-MM-DD")
          : "",
        policiesAccepted: values.policiesAccepted || false,
      };

      await signUp(userPayload);
      toast("Signup successful!", "success");
    } catch (error) {
      toast("Signup failed. Please try again.", "error");
    }
    setLoading(false);
  };

  const handleNextClick = async () => {
    try {
      await form.validateFields([
        "name",
        "email",
        "password",
        "confirmPassword",
      ]);
      const values = form.getFieldsValue();
      if (values.password !== values.confirmPassword) {
        return toast("Password and confirm password do not match", "error");
      }
      if (values.password.length < 8) {
        return toast("Password needs 8 or more characters", "error");
      }
      setCurrentStep(2);
    } catch (error) {
      toast("Please fill all required fields correctly", "error");
    }
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

      <div className={styles.rightContainer}>
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

        <Form form={form} className={styles.loginForm} onFinish={handleSignUp}>
          {currentStep === 1 && (
            <div>
              <Form.Item
                name="name"
                rules={[{ required: true, message: "Name is required!" }]}
              >
                <Input placeholder="Name" suffix={<UserOutlined />} />
              </Form.Item>
              <Form.Item
                name="email"
                rules={[
                  {
                    required: true,
                    type: "email",
                    message: "Valid email required!",
                  },
                ]}
              >
                <Input placeholder="Email" suffix={<MailFilled />} />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: "Password is required!" }]}
              >
                <Input.Password placeholder="Password" />
              </Form.Item>
              <Form.Item
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  { required: true, message: "Confirm password is required!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error("Passwords do not match!")
                      );
                    },
                  }),
                ]}
              >
                <Input.Password placeholder="Confirm password" />
              </Form.Item>

              <Form.Item>
                <Flex justify="end">
                  <Button
                    type="primary"
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
                     have an account?{""}
                    <Link href={"/auth/signin"}> Sing In.</Link>
                                
                  </p>
                </Flex>
              </Form.Item>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <Form.Item
                name="role"
                rules={[{ required: true, message: "Please select a role!" }]}
              >
                <Select placeholder="Please select a role">
                  <Option value="admin">Trainer</Option>
                  <Option value="client">Client</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="contactNumber"
                rules={[
                  {
                    required: true,
                    message: "Please input your contact number!",
                  },
                  {
                    pattern: /^\+?[0-9\s]+$/,
                    message: "Invalid contact number!",
                  },
                ]}
              >
                <Input
                  placeholder="Contact Number (+27 943 895 945)"
                  suffix={<PhoneFilled />}
                />
              </Form.Item>

              <Form.Item
                name="dateOfBirth"
                rules={[
                  {
                    required: true,
                    message: "Please select your Date of Birth!",
                  },
                ]}
              >
                <DatePicker
                  style={{ width: "100%" }}
                  placeholder="Select Date of Birth"
                  format="YYYY-MM-DD"
                />
              </Form.Item>

              <Form.Item name="planType" rules={[{ required: false }]}>
                <Select placeholder="Select a plan">
                  <Option value="Premier">Premier</Option>
                  <Option value="PremierSelect">Premier Select</Option>
                  <Option value="Base">Base</Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="policiesAccepted"
                valuePropName="checked"
                rules={[
                  {
                    required: true,
                    message: "You must accept the Privacy Policy.",
                  },
                ]}
              >
                <Checkbox>
                  I accept the{" "}
                  <Link href="/privacy-policy" target="_blank">
                    Privacy Policy
                  </Link>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Flex justify="center">
                  <Button type="primary" htmlType="submit" loading={loading}>
                    Sign Up
                  </Button>
                </Flex>
              </Form.Item>
            </div>
          )}
        </Form>
      </div>
    </Flex>
  );
};

export default SignUp;
