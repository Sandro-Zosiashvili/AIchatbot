


import styles from './Qanswers.module.scss'
import Image from 'next/image'

interface Props {
    number: string;
    question: string;
    answer: string;
    margin?: string;
}

const Qanswers = (props: Props) => {
    const style = {
        marginTop: props.margin
    }

    return (

        <div className={styles.container} style={style}>
            <div className={styles.questionDetals}>
                <div className={styles.number}>
                    {props.number}.
                </div>
                <div className={styles.headerText}>
                    {props.question}
                </div>
                <span className={styles.corner}>
                    <Image src={'/Images/Polygon.svg'} width={33} height={29} alt='polygon-logo' />
                </span>

            </div>
            <div>
                {props.answer}
            </div>

        </div>
    )

}

export default Qanswers