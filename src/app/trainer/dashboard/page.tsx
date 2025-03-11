import React from 'react'
import styles from './styles.module.css'
import ClientCard from '@/_components/client-card/client-card';
import Menu from '@/_components/Menu/menu';
import withAuth from '@/hoc/withAuth';
function TrainerDashBoard() {
  return (
    <>

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
    <Menu/>
    </>
   
      
  )
}

export default withAuth(TrainerDashBoard,{allowedRoles:['admin','client']});