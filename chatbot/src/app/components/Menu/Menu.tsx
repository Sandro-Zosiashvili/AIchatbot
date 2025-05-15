"use client"
import Button from '../Button/Button'
import Corner from '../Corner/Corner'
import Logo from '../Logo/Logo'
import Menuitem from '../Menuitem/Menuitem'
import styles from './Menu.module.scss'
import { useRouter } from 'next/navigation'




const Menu = () => {
    const router = useRouter()



    return (

        <div className={styles.container}>
            <Logo />
            <Menuitem />
            <Button router={() => router.push('/aboutus')} title={'Join us now'} />
            <div className={styles.corner}>
                <Corner rotate={"180deg"}  />
            </div>
            <div className={styles.cornerTwo}>
                <Corner rotate={"90deg"}  color={'yellow'}/>
            </div>

        </div>


    )
}


export default Menu