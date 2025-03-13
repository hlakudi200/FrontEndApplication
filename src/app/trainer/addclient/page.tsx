"use client";
import {
  Form,
  Input,
  Button,
  Select,
  DatePicker,
  Switch,
  message,
  Flex,
  Spin,
} from "antd";
import { useUserActions, useUserSate } from "@/providers/usersprovider";
import { toast } from "@/providers/ToastProvider/toast";
import { IClient } from "@/providers/usersprovider/models";
import Menu from "@/_components/Menu/menu";

const { Option } = Select;

export default function ClientForm() {
  const { createClient } = useUserActions();
  const { isPending, user } = useUserSate();

  const onFinish = async (values: IClient) => {
    try {
      if (!user || !user.id) {
        console.error("Error: Trainer ID (user.id) is missing!");
        toast("Trainer not found", "error");
        return;
      }

      const client = {
        fullName: values.fullName,
        email: values.email,
        contactNumber: values.contactNumber,
        sex: values.sex,
        dateOfBirth: values.dateOfBirth,
        activeState: values.activeState,
        trainerId: user.id,
      };

      await createClient(client);
      toast("User has been Created", "success");
    } catch (error) {
      console.error("Error Creating Client:", error);
      message.error("Failed to add client. Please try again.");
    }
  };

  return (
    <>
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ activeState: true }}
        style={{
          maxWidth: 700,
          margin: "0 auto",
          padding: 20,
          backgroundColor: "#2c2a2a",
          borderRadius: 20,
          marginBottom: 20,
        }}
      >
        <h2 style={{ textAlign: "center" }}>Add New Client</h2>

        <Form.Item
          label="Full Name"
          name="fullName"
          rules={[{ required: true, message: "Please enter full name" }]}
        >
          <Input placeholder="Enter full name" />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              type: "email",
              message: "Please enter a valid email",
            },
          ]}
        >
          <Input placeholder="Enter email" />
        </Form.Item>

        <Form.Item
          label="Contact Number"
          name="contactNumber"
          rules={[{ required: true, message: "Please enter contact number" }]}
        >
          <Input placeholder="Enter contact number" />
        </Form.Item>

        {isPending && (
          <Flex justify="center" style={{ marginBottom: 20 }}>
            <Spin size="large" />
          </Flex>
        )}

        <Form.Item
          label="Sex"
          name="sex"
          rules={[{ required: true, message: "Please select sex" }]}
        >
          <Select placeholder="Select gender">
            <Option value="male">Male</Option>
            <Option value="female">Female</Option>
            <Option value="other">Other</Option>
          </Select>
        </Form.Item>

        <Form.Item
          label="Date of Birth"
          name="dateOfBirth"
          rules={[{ required: true, message: "Please select date of birth" }]}
        >
          <DatePicker format="YYYY-MM-DD" />
        </Form.Item>

        <Form.Item
          label="Active State"
          name="activeState"
          valuePropName="checked"
        >
          <Switch />
        </Form.Item>

        <Flex justify="center">
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Add Client
            </Button>
          </Form.Item>
        </Flex>
      </Form>
      <Menu />
    </>
  );
}
