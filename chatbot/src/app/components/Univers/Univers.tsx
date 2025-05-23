
import Spcontent from '../Spcontent/Spcontent'
import styles from './Univers.module.scss'
import Image from 'next/image'

interface Props {
    image: string;
    title: string;
    content: string;

}


const Univers = (props: Props) => {


    return (
        <div className={styles.container}>
            <div className={styles.logoWraper}>
                <Image src={props.image} width={46} height={46} alt='universe-logo' />
            </div>
            <div className={styles.containerContent}>
                <div className={styles.fontSize}>
                    {
                        props.title
                    }
                </div>
                <Spcontent content={props.content} fontSize={'18px'} />
            </div>

        </div>

    )
}


export default Univers