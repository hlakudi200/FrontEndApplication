
'use client'
import React from "react";
import LandingCard from "@/_components/landingCard/landingCard";
import styles from "./styles.module.css";
import CustomHeader from "@/_components/header/header";
import { LogoutOutlined } from "@ant-design/icons";
import withAuth from "@/hoc/withAuth";

const Landing= () => {
  const cardData = [
    {
      title: "Manage Clients.",
      route: "/trainer/dashboard",
      src: "/images/Tab1.jpg",
    },
    {
      title: "Add Food Items.",
      route: "/trainer/addfood",
      src: "/images/Tab2.jpg",
    },
    {
      title: "Add New Client.",
      route: "trainer/addclient",
      src: "/images/Tab3.jpg",
    },
    {
      title: "Meals Advisor.",
      route: "trainer/mealagent",
      src: "/images/Tab4.jpg",
    },
  ];

  return (
    <div>
      <CustomHeader>
        <LogoutOutlined style={{ fontSize: 26, color: "red" } } />
      </CustomHeader>
      <div className={styles.container}>
        {cardData.map((card, index) => (
          <LandingCard
            key={index}
            title={card.title}
            route={card.route}
            src={card.src}
          />
        ))}
      </div>
    </div>
  );
};

export default withAuth(Landing,{allowedRoles:['admin']});
