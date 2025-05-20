import styles from './Theader.module.scss'




const Theader = () => {

    return (


        <div className={styles.container}>
            What <span className={styles.headerText}>problems</span> do we <span className={styles.headerText}>solve</span> for <span className={styles.headerText}>customers</span> ?

        </div>
    )

}

export default Theader