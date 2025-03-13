"use client";
import styles from "./styles.module.css";
import React from "react";
import {RightCircleFilled } from "@ant-design/icons";
import Link from "next/link";
import { Flex } from "antd";

interface ICardDetails {
  title: string;
  src: string;
  route: string;
}
const LandingCard = (cardDetails: ICardDetails) => {
  return (
    <Link href={cardDetails.route} className={styles.cardLink}>
      <div
        className={styles.cardContainer}
        style={{ backgroundImage: `url('${cardDetails.src}')` }}
      >
        <Flex justify="center" align="center">
          <h1>{cardDetails.title}</h1>
        </Flex>

        <div className={styles.arrowLink}>
          <RightCircleFilled style={{fontSize:30}} />
        </div>
      </div>
    </Link>
  );
};

export default LandingCard;
