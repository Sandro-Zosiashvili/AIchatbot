
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
            <div className={styles.header}>
                <Header />
            </div>
            <div className={styles.mainCenter}>
                <div className={styles.summary}>
                    <Summary />
                </div>
                <Image className={styles.headimage} src={'./Images/headlogo.svg'} width={552} height={415} alt='headlogo' />
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





        </div>
    )
}

export default Firstpage