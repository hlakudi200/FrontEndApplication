"use client";

import React, { useEffect, useState } from "react";
import styles from "./styles/styles.module.css";
import ClientCard from "@/_components/client-card/client-card";
import Menu from "@/_components/Menu/menu";
import Card from "antd/es/card/Card";
import { Flex, Spin } from "antd";

import { useUserActions, useUserSate } from "@/providers/usersprovider";
import MealPlanForm from '../../../_components/meal-plan-form/mealplanform'

const TrainerDashBoard = () => {
  const { users = [], isPending, isSuccess, user } = useUserSate();
  const { getClients } = useUserActions();
  const [UserId, setUserId] = useState("");

  useEffect(() => {
    getClients(user.id);
  }, []);


  const handleCardClick=(clientId:string)=>{
      setUserId(clientId)
      console.log(UserId) //this Id is used to receive the ID of the user clicked
  }

  return (
    <>
      <div id="IouterContainer" className={styles.outerContainer}>
        <div id="IleftContainer" className={styles.leftContainerr}>
          {users.length > 0 && isSuccess
            ? users.map((client) => (
                <ClientCard
                  key={client._id}
                  clientName={client.fullName}
                  clientEmail={client.email}
                  clientContactNo={client.contactNumber}
                  imageSrc="/images/user.png"
                  _id={client._id}
                  onClick={handleCardClick}
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
          <MealPlanForm />
        </div>
      </div>
      <Menu />
    </>
  );
};

export default TrainerDashBoard;
