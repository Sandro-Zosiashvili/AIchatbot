import Button from '../Button/Button'
import styles from './Events.module.scss'



const Events = () => {


    return (
        <div className={styles.container}>
            <div className={styles.eventHeader}>
                Events and <span>Updates</span>
            </div>
            <div className={styles.eventInformation}>
                Explore the high-tech, low-life world where the lines between humanity and machinery blur.
            </div>
            <div className={styles.button}>
                <Button title={'Read More'} />
            </div>
        </div>

    )
}


export default Events