import React from "react";
import styles from "./styles/styles.module.css";
import Image from "next/image";
import { Button } from "antd";

interface IClientCardDetails {
    imageSrc: string,
    clientName: string,
    clientEmail: string,
    clientContactNo: string,
    _id: string,
    onClick: (_id: string) => void 
}

const ClientCard = (client: IClientCardDetails) => {

  return (
    <Button
      className={styles.cardContainer}
      onClick={() => {
        client.onClick(client._id);
      }}
    >
      <div className={styles.clientAvater}>
        <Image
          width={125}
          height={125}
          src="/images/user.png"
          alt="profileimage"
          className={styles.avatar}
        />
      </div>

      <div className={styles.clientDetails}>
        <h3 className={styles.carditems} style={{color:"red"}}>{client.clientName}</h3>
        <p className={styles.carditems}>{client.clientEmail}</p>
        <p className={styles.carditems}>{client.clientContactNo}</p>
      </div>
    </Button>
  );
};

export default ClientCard;