import React from "react";
import styles from "./styles/styles.module.css";
import Image from "next/image";

interface IClientCardDetails{
    imageSrc:string,
    clientName:string,
    clientEmail:string,
    clientContactNo:string,
}
const ClientCard = (client:IClientCardDetails) => {
  return (
    <div className={styles.cardContainer}>
      <div className={styles.clientAvater}>
        <Image
          width={125}
          height={125}
          src="/images/user.png"
          alt="profileimage"
          className={styles.avatar}
        ></Image>
      </div>

      <div className={styles.clientDetails}>
        <h3 className={styles.carditems}>{client.clientName}</h3>
        <p className={styles.carditems}>{client.clientEmail}</p>
        <p className={styles.carditems}>{client.clientContactNo}</p>
      </div>
    </div>
  );
};

export default ClientCard;
