'use client'

import styles from './Menuitem.module.scss'
import { useRouter } from 'next/navigation';


type Menuitem = {
    title: String;
    path: String;
    // key: String
}


const Menuitem = () => {

    const router = useRouter()




    const data = [
        {
            title: 'Home',
            path: '/',

        },
        {
            title: 'about us',
            path: '/aboutus',
        },
        {
            title: 'support',
            path: '/support',
        },
        {
            title: 'contact',
            path: '/contact',
        },
    ]


    return (
        <div className={styles.container}>

            {
                data.map((item: Menuitem, index) => (
                    <div onClick={ () => router.push(`${item.path}`)}  className={styles.menuItem}   key={index}>
                        {item.title}
                    </div>
                ))
            }
        </div>

    )


}

export default Menuitem