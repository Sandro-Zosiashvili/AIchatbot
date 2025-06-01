
import styles from './Customers.module.scss'
import Image from 'next/image'


const Customers = () => {


    return (

        <div className={styles.container}>
            <div className={styles.image}>
                <Image src="./Images/comp.svg" alt="customerLogo" width={136} height={138} />

            </div>
            <div className={styles.imageTablet}>
                <Image src="./Images/comp.svg" alt="customerLogo" width={120} height={120} />

            </div>
            <div className={styles.customerInformation}>
                <div className={styles.customerFont}>
                    <div>
                        200
                    </div>
                    <div>+</div>
                </div>
                <div className={styles.customerCustomers}>
                    Customers
                </div>
                <div className={styles.customerInsideDetals}>
                    <div>Be next who will develop thereself  with us</div>
                </div>

            </div>

        </div>

    )
}

export default Customers