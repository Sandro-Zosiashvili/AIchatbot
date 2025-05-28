


import Button from '../Button/Button'
import Sixthheader from '../Sixthheader/Sixthheader'
import Sixthimage from '../Sixthimage/Sixthimage'
import Spcontent from '../Spcontent/Spcontent'
import styles from './Sixthpage.module.scss'

const Sixthpage = () => {


    return (
        <div className={styles.container}>
            <div >
                <Sixthimage />
            </div>
            <div className={styles.containercontent}>

                <Sixthheader />
                <Spcontent
                    content={'where chatbots handle the hard work, so you don’t have to. From customer service to sales, our AI learns, adapts, and delivers 24/7'}
                    fontSize={'18px'}
                />
                <div className={styles.button}>
                    <Button title={'Read More'} />
                    <Button title={'Learn More'} outline />
                </div>

            </div>



        </div>

    )
}


export default Sixthpage