import styles from './Summary.module.scss'






const Summary = () => {


    return (
        <div className={styles.container}>
            <div className={styles.insideBox}>
                <div className={styles.summaryText}>
                    <div className={styles.SummaryDot}>

                    </div>
                    <div className={styles.summaryInsideText}>
                        Stories & Lore
                    </div>
                </div>
                <div className={styles.text}>
                    Dive into compelling narratives set in a dystopian future.
                </div>
            </div>
            <div className={styles.secondBox}>
                <div className={styles.thirdBall}>
                    <div className={styles.secondBall}>
                        <div className={styles.ball}>

                        </div>
                    </div>
                </div>


            </div>

        </div>

    )
}

export default Summary