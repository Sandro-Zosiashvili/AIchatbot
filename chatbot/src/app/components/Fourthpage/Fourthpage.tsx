import Aivariations from '../Aivariations/Aivariations'
import Fpaboutai from '../Fpaboutai/Fpaboutai'
import Fpheader from '../Fpheader/Fpheader'
import Spcontent from '../Spcontent/Spcontent'
import styles from './Fourthpage.module.scss'





const Fourthpage = () => {


    return (
        <div className={styles.container}>
            <div className={styles.containerWrapper}>
                <div className={styles.leftSideContent}>
                    <Fpheader />
                    <Spcontent content={'Choose your desired service, contact us and learn more about us and AI chatbots and get started in modern life.'}
                        fontSize={'36px'}
                        width='645px' />
                </div>
                <Fpaboutai />
            </div>

        </div>

    )
}

export default Fourthpage