
'use client'
import React from 'react'
import Aibot from '../Aibot/Aibot'
import styles from './Childrenwrapper.module.scss'
import Aimain from '../Aimain/Aimain'
import { useState } from 'react'

interface ChildrenWrapperProps {
    children: React.ReactNode
    className?: string
    style?: React.CSSProperties
}

const ChildrenWrapper: React.FC<ChildrenWrapperProps> = ({
    children,
}) => {

    const [hide, setHide] = useState(true)
    return (
        <div>
            {children}

            {hide ?
                <div onClick={() => setHide(!hide)} className={styles.designlogo}>
                    <Aibot />
                </div> :

                <div className={styles.aimain}>
                    <Aimain onClick={() => setHide(!hide)} />
                </div>

            }
        </div>
    )
}

export default ChildrenWrapper