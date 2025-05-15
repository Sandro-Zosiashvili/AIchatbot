'use client'
import styles from './Logo.module.scss'
import { useRouter } from 'next/navigation';

import Image from 'next/image';





const Logo = () => {
    const router = useRouter()


    return (

        <div className={styles.container}>
            <div onClick={() => router.push('/')} className={styles.logoHead}>
                {/* <Image className={styles.logoo} src={'../Images/talkilogo.svg'} width={60} height={60} alt="designlogo" /> */}
                <div className={styles.logo}>
                    Talkify.AI
                </div>
            </div>
        </div>
    )
}

export default Logo