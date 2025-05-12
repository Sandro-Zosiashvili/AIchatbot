
import styles from './Customers.module.scss'
import Image from 'next/image'


const Customers = () => {


    return (

        <div className={styles.container}>
            <div>
                <Image src="./Images/customers.svg" alt="customerLogo" width={200} height={260} />

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
                    <div>Be next who will develop thereself </div>
                    <div>with us</div>
                </div>

            </div>

        </div>

    )
}

export default Customers