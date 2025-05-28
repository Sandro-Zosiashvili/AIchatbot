

import Spcontent from '../Spcontent/Spcontent'
import styles from './Questions.module.scss'


interface Props {
    number: string;
    header: string;
    content: string;
}


const Questions = (props: Props) => {

    return (
        <div className={styles.container}>
            <div className={styles.headerNumber}>
                {props.number}
            </div>
            <div className={styles.containerContent}>
                <div className={styles.header}>
                    {props.header}
                </div>
                <Spcontent content={props.content} fontSize={'18px'} />
                <div className={styles.containerborder}>

                </div>

            </div>

        </div>


    )
}

export default Questions