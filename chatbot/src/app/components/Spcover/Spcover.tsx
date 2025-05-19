import styles from './Spcover.module.scss'
import Image from 'next/image'





const Spcover = () => {

    return (

        <div  className={styles.container}>
            <div className={styles.image}>
                <Image src={'/Images/Spcover.svg'} width={689} height={671} alt='secont-page-cover' />

            </div>


        </div>

    )
}


export default Spcover