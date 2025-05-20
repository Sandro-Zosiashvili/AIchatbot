import styles from './Thjoin.module.scss'

import Image from 'next/image'





const Thjoin = () => {


    return (
        <div className={styles.container}>
            <div>
                <Image src="./Images/ThjoinLogo.svg" alt="customerLogo" width={200} height={200} />

            </div>
            <div className={styles.customerInformation}>
                <div className={styles.customerFont}>
                    Join the Revolution
                </div>
                <div className={styles.customerInsideDetals}>
                    Explore the high-tech, low-life world where the lines between humanity and machinery blur.
                </div>

            </div>

        </div>

    )
}

export default Thjoin