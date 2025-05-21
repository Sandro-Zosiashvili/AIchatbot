import styles from './Aivariations.module.scss'
import Image from 'next/image'

type Props = {

    backGroundColor: string;
    title: string;

}

const Aivariations = (props: Props) => {

    const style: React.CSSProperties = {
        backgroundColor: props.backGroundColor,
    }



    return (
        <div className={styles.container}>
            <div className={styles.colorBox} style={style}>
            </div>
            <div className={styles.font}>
                {props.title}
            </div>
            <div className={styles.link}>
                <Image src={'./Images/arrow.svg'} width={35} height={35} alt='arrow-for-link' />
            </div>
        </div>

    )
}

export default Aivariations