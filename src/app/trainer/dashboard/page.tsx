"use client";

import React, { useEffect } from "react";
import styles from "./styles/styles.module.css";
import ClientCard from "@/_components/client-card/client-card";
import Menu from "@/_components/Menu/menu";
import Card from "antd/es/card/Card";
import { Flex, Form, Input, Spin } from "antd";
import { MailFilled } from "@ant-design/icons";
import { useUserActions, useUserSate } from "@/providers/usersprovider";

const TrainerDashBoard = () => {
  const { users = [], isPending, isSuccess,} = useUserSate();
  const { getClients } = useUserActions();

  useEffect(() => {
    getClients("67caa1c7f4836400195da168");
  }, []);

  return (
    <>
      <div id="IouterContainer" className={styles.outerContainer}>
        <div id="IleftContainer" className={styles.leftContainerr}>
          {users.length > 0 && isSuccess
            ? users.map((client) => (
                <ClientCard
                  key={client.user}
                  clientName={client.fullName}
                  clientEmail={client.email}
                  clientContactNo={client.contactNumber}
                  imageSrc="/images/user.png"
                />
              ))
            : isPending && (
                <Flex justify="center" style={{ marginBottom: 20 }}>
                  <Spin size="large" />
                </Flex>
              )}
        </div>
        <div id="ImiddleContainer" className={styles.middleContainer}>
          <Card
            size="small"
            title="Meal Name"
            style={{ width: 400, marginLeft: 20, marginBottom: 14 }}
          >
            <Flex>
              <Flex
                justify="start"
                style={{ justifyContent: "space-around", width: "50%" }}
              >
                <Flex vertical>
                  <p>Meal Name</p>
                  <p>Card content</p>
                  <p>Card content</p>
                </Flex>
                <Flex vertical>
                  <p>23</p>
                  <p>28</p>
                  <p>89</p>
                </Flex>
              </Flex>
              <Flex justify="center" vertical style={{ width: "50%" }}>
                <p>note 1</p>
                <p>note 2</p>
                <p>note 3</p>
                <p>note 4</p>
              </Flex>
            </Flex>
          </Card>
        </div>
        <div className={styles.middleContainer}>
          <Form
            style={{
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Form.Item name="email" rules={[{ required: true }]}>
              <Input placeholder="Email" suffix={<MailFilled />} />
            </Form.Item>
          </Form>
        </div>
      </div>
      <Menu />
    </>
  );
};

export default TrainerDashBoard;
