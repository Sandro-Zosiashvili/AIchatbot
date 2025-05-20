import styles from './Thcover.module.scss'
import Image from 'next/image'




const Thcover = () => {


    return (
        <div className={styles.container}>
            <Image src={'/Images/Thcontent.svg'} width={540} height={700} alt='third-page-cover' />
        </div>

    )
}

export default Thcover