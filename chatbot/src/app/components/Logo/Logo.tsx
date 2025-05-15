'use client'
import styles from './Logo.module.scss'
import { useRouter } from 'next/navigation';

import Image from 'next/image';





const Logo = () => {
    const router = useRouter()


    return (

        <div className={styles.container}>
            <div onClick={() => router.push('/')} className={styles.logoHead}>
                <div className={styles.logoWrapper}>
                    <Image className={styles.logoo} src={'../Images/talkilogo.svg'} width={70} height={70} alt="designlogo" />
                </div>
                <div className={styles.logo}>
                    Talkify.AI
                </div>
            </div>
        </div>
    )
}

export default Logo