
import Spcontent from '../Spcontent/Spcontent'
import Spcount from '../Spcount/Spcount'
import Spcover from '../Spcover/Spcover'
import Spheader from '../Spheader/Spheader'
import styles from './Secondpage.module.scss'




const Secontpage = () => {

    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <Spheader />
                <Spcontent content={'Let us save you time, money and energy in both the real and digital worlds. Contact us now.'}
                    fontSize={'32px'}/>
                <div className={styles.countContent}>
                    <Spcount count={"89,2K"} title={"Discover the Future"} />
                    <Spcount count={"7001"} title={"Stories and Lore"} />
                    <Spcount count={"3,124"} title={"Art and Design"} />
                </div>
            </div>
            <Spcover />
        </div>
    )


}


export default Secontpage