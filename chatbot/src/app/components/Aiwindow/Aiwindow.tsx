
'use client'
import Aimain from '../Aimain/Aimain'
import styles from './Aiwindow.module.scss'
import Image from 'next/image'
import { useState } from 'react'



const Aiwindow = () => {

    const [hide, setHide] = useState(true)


    return (
        <>
            {
                hide &&
                <Aiwindow />

            }
            <div className={styles.designlogo}>
                <Image src={'./Images/designlogo.svg'} width={200} height={200} alt="designlogo" />
            </div>
        </>




    )
}


export default Aiwindow