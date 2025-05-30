
'use client'
import Aimain from '../Aimain/Aimain'
import styles from './Aibot.module.scss'
import Image from 'next/image'
import { useState } from 'react'



const Aibot = () => {

    const [hide, setHide] = useState(false)


    return (
        <div onClick={() => setHide(!hide)} className={styles.designlogo}>
            <Image src={'./Images/designlogo.svg'} width={200} height={200} alt="designlogo" />
        </div>
    )
}


export default Aibot