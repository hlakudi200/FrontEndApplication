"use client";

import Foodsearch from "@/_components/foodSearch/foodsearch";
import Menu from "@/_components/Menu/menu";
import {
  Form,
  Input,
  InputNumber,
  Button,
  Select,
  Row,
  Col,
  Flex,
} from "antd";
import { useState } from "react";

interface IFood {
  name: string;
  protein: number;
  carbs: number;
  sugar: number;
  fat: number;
  fiber: number;
  sodium: number;
  potassium: number;
  category: string;
  servingSize: number;
  cholesterol: number;
  energy: number;
}

const FoodForm = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values: IFood) => {
    setLoading(true);
    try {
      console.log("Submitting: ", values);
      // Replace with your API call
      // await axios.post('/api/food', values);
    } catch (error) {
      console.error("Error submitting food data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          marginTop: 20,
          marginBottom:20
        }}
      >
        <div
          style={{
            width: "60%",
            backgroundColor: "#2c2a2a",
            marginLeft: 20,
            paddingTop: 20,
            borderRadius: 20,
            paddingLeft: 7,
            paddingRight: 7,
            paddingBottom: 7,
          }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={onFinish}
            style={{ maxWidth: 800, margin: "auto" }}
          >
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  label="Food Name"
                  name="name"
                  rules={[{ required: true }]}
                >
                  <Input placeholder="Enter food name" />
                </Form.Item>
                <Form.Item
                  label="Protein (g)"
                  name="protein"
                  rules={[{ required: true }]}
                >
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  label="Carbs (g)"
                  name="carbs"
                  rules={[{ required: true }]}
                >
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  label="Sugar (g)"
                  name="sugar"
                  rules={[{ required: true }]}
                >
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  label="Fat (g)"
                  name="fat"
                  rules={[{ required: true }]}
                >
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item label="Fiber (g)" name="fiber">
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
              </Col>

              <Col span={12}>
                <Form.Item label="Sodium (mg)" name="sodium">
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item label="Potassium (mg)" name="potassium">
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item
                  label="Category"
                  name="category"
                  rules={[{ required: true }]}
                >
                  <Select placeholder="Select category">
                    <Select.Option value="fruit">Fruit</Select.Option>
                    <Select.Option value="vegetable">Vegetable</Select.Option>
                    <Select.Option value="protein">Protein</Select.Option>
                  </Select>
                </Form.Item>
                <Form.Item label="Serving Size (g)" name="servingSize">
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item label="Cholesterol (mg)" name="cholesterol">
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
                <Form.Item label="Energy (kcal)" name="energy">
                  <InputNumber style={{ width: "100%" }} />
                </Form.Item>
              </Col>
            </Row>
            <Form.Item>
              <Flex justify="center">
                <Button type="primary" htmlType="submit" loading={loading}>
                  Submit
                </Button>
              </Flex>
            </Form.Item>
          </Form>
        </div>
        <Foodsearch />
      </div>
      <Menu />
    </>
  );
};

export default FoodForm;
