import React from 'react'
import styles from './styles.module.css'
import ClientCard from '@/_components/client-card/client-card';

function TrainerDashBoard() {
  return (
    <div id='IouterContainer' className={styles.outerContainer}>
        <div id='IleftContainer' className={styles.leftContainerr}>
          <ClientCard clientName='Rapudi Hlakudi' clientEmail='rapudi@virgin.com' clientContactNo='+27 60 670 4536' imageSrc='/images/user.png'/>
          <ClientCard clientName='Rapudi Hlakudi' clientEmail='rapudi@virgin.com' clientContactNo='+27 60 670 4536' imageSrc='/images/user.png'/>
          <ClientCard clientName='Rapudi Hlakudi' clientEmail='rapudi@virgin.com' clientContactNo='+27 60 670 4536' imageSrc='/images/user.png'/>
          <ClientCard clientName='Rapudi Hlakudi' clientEmail='rapudi@virgin.com' clientContactNo='+27 60 670 4536' imageSrc='/images/user.png'/>
          <ClientCard clientName='Rapudi Hlakudi' clientEmail='rapudi@virgin.com' clientContactNo='+27 60 670 4536' imageSrc='/images/user.png'/>
          <ClientCard clientName='Rapudi Hlakudi' clientEmail='rapudi@virgin.com' clientContactNo='+27 60 670 4536' imageSrc='/images/user.png'/>
          <ClientCard clientName='Rapudi Hlakudi' clientEmail='rapudi@virgin.com' clientContactNo='+27 60 670 4536' imageSrc='/images/user.png'/>
        </div>
        <div id='ImiddleContainer' className={styles.middleContainer}></div>
        <div id='IrightContainer' className={styles.rightContainer}></div>
    </div>
      
  )
}

export default TrainerDashBoard;