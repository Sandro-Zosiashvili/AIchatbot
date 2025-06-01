
import { Yellowtail } from 'next/font/google'
import Corner from '../Corner/Corner'
import Customers from '../Customers/Customers'
import Events from '../Events/Events'
import Experiences from '../Experiences/Experiences'
import Header from '../Header/Header'
import Summary from '../Summary/Summary'
import styles from './Firstpage.module.scss'
import Image from 'next/image'


const Firstpage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.corner}>
                <Corner rotate={'45deg'} />
            </div>
            <div className={styles.cornerTwo}>
                <Corner rotate={'270deg'} color={'yellow'} />
            </div>
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.mainCenter}>
                <div className={styles.summary}>
                    <Summary />
                </div>
                <div>

                </div >
                <div className={styles.headimage}>
                    <Image src={'./Images/headlogo.svg'} width={552} height={415} alt='headlogo' />
                </div>
                <div className={styles.headImageTablet}>
                    <Image src={'./Images/headlogo.svg'} width={450} height={400} alt='headlogo' />
                </div>
                <div className={styles.imageTabletSecond}>
                    <Image src={'./Images/headlogo.svg'} width={400} height={350} alt='headlogo' />
                </div>
                <div className={styles.event}>
                    <Events />

                </div>
            </div>
            <div className={styles.customers}>
                <Customers />
                <div className={styles.experience}>
                    <Experiences />

                </div>

            </div>

            <div className={styles.cornerThree}>
                <Corner rotate={'180deg'} />
            </div>
            <div className={styles.cornerFour}>
                <Corner rotate={'90deg'} color={'yellow'} />
            </div>

        </div>
    )
}

export default Firstpage