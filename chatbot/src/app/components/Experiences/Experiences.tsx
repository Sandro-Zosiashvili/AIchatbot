
import styles from './Experiences.module.scss'
import Image from 'next/image'

const Experiences = () => {


    return (
        <div className={styles.container}>
            <div className={styles.font}>
                <div>
                    2
                </div>
                <Image src={'./Images/+.svg'} width={25} height={25} alt='+logo' />

            </div>
            <div className={styles.fontYears}>Years of Experiences</div>

        </div>


    )
}


export default Experiences