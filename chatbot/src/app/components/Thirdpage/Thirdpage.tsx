
import Spcontent from '../Spcontent/Spcontent'
import Thcover from '../Thcover/Thcover'
import Theader from '../Theader/Theader'
import Thjoin from '../Thjoin/Thjoin'
import styles from './Thirdpage.module.scss'




const Thirdpage = () => {



    return (
        <div className={styles.container}>
            <Thcover />
            <div className={styles.contentLayout}>
                <Theader />
                <Spcontent
                    content={'Use AI as your employee. Let it participate in your daily activities and perform various tasks.'}
                    fontSize={'24px'} />
                <div className={styles.joinComponent}>
                    <Thjoin />

                </div>



            </div>

            {/* <Theader /> */}

        </div>

    )
}

export default Thirdpage