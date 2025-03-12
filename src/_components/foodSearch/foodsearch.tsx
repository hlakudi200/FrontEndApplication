"use client";
import { useFoodActions, useFoodState } from "@/providers/foodprovider";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Select, Spin } from "antd";
import React, { useEffect, useState } from "react";
import Food from "../foodcard/food";
import { toast } from "@/providers/ToastProvider/toast";
import { FilterFilled } from "@ant-design/icons";

const { Option } = Select;
const FoodSearch = () => {
  const [foodTerm, setFoodTerm] = useState("");
  const [catergory, setCatergory] = useState("");
  const { getFoods, getFoodbysearchterm, getFoodbyCatergory } =
    useFoodActions();
  const { foods, isPending, isError, isSuccess } = useFoodState();

  useEffect(() => {
    getFoods();
  }, []);

  const handleSearchClick = () => {
    getFoodbysearchterm(foodTerm);
    if (isError) {
      toast("There was no food item found", "error");
    }
    if (isSuccess) {
      if(foods.length > 1){
        toast("Food item found", "success")
      }else{
        toast("Food items found", "success");
      }
    }
   
  };
  const handleSearchByCatg = () => {
    getFoodbyCatergory(catergory);
    if (isError) {
      toast("There was no food item found", "error");
    }
    if (isSuccess) {
      if(foods.length > 1){
        toast("Food item found", "success")
      }else{
        toast("Food items found", "success");
      }
    }
  };
  return (
    <div
      style={{
        width: "35%",
        backgroundColor: "#2c2a2a",
        marginLeft: 20,
        marginRight: 20,
        paddingTop: 20,
        borderRadius: 20,
        paddingLeft: 7,
        paddingRight: 7,
        paddingBottom: 7,
      }}
    >
      <Form>
        <Form.Item label="" name="name" rules={[{ required: true }]}>
          <Input
            placeholder="Search food items"
            value={foodTerm}
            onChange={(e) => setFoodTerm(e.target.value)}
            suffix={<SearchOutlined onClick={handleSearchClick} />}
          />
        </Form.Item>
        <Flex >
        <Form.Item
          name="role"
          rules={[{ required: true, message: "Please select a role!" }]}
          style={{ width: "50%" }}
        >
          <Select
            placeholder="Filter by catergory"
            onChange={(value) => setCatergory(value)}
          >
            <Option value="veg">Vegies</Option>
            <Option value="fruit">Fruits</Option>
            <Option value="meat">Meat</Option>
            <Option value="grains">Grains</Option>
            <Option value="bnl">Bnl</Option>
            <Option value="dary">Dary</Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button onClick={handleSearchByCatg} icon={<FilterFilled />}></Button>
        </Form.Item>
        </Flex>
      
      </Form>
      {isPending && (
        <Flex justify="center">
          <Spin size="large" />
        </Flex>
      )}

      <div
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          display: "block",
          overflowY: "scroll",
          height: "80vh",
        }}
      >
        {foods?.map((food) => (
          <Food
            key={food._id}
            name={food.name}
            category={food.catergory}
            protein={food.protein}
            carbs={food.carbs}
            fat={food.fat}
            sugar={food.sugar}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodSearch;
