'use client'
import styles from './Logo.module.scss'
import { useRouter } from 'next/navigation';





const Logo = () => {
    const router = useRouter()


    return (

        <div className={styles.container}>
            <div onClick={() => router.push('/')} className={styles.logo}>
                Talkify.AI
            </div>
        </div>
    )
}

export default Logo