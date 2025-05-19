import styles from './Spcount.module.scss'
import Image from 'next/image'


type Props = {
    count: String;
    title: String;
}


const Spcount = (props: Props) => {

    return (
        <div className={styles.container}>

            <div className={styles.count}>
                <div>
                    {props.count}
                </div>
                {
                    props.count && <Image className={styles.plus} src={'/Images/+.svg'} width={25} height={25} alt={'plus'} />

                }
            </div>
            <div className={styles.content}>
                {props.title}
            </div>
        </div>

    )
}

export default Spcount