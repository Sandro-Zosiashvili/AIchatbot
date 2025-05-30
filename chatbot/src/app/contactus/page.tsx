

import Button from '../components/Button/Button'
import styles from './page.module.scss'




export default function Contactus() {

    return (
        <div className={styles.container}>

            <div className={styles.aboutusHeader}>
                Contact <span className={styles.different}>Us</span>
            </div>
            <div className={styles.mainInputWrapper}>
                <div className={styles.inputWrapper}>
                    <input className={styles.inputMail} type='email' placeholder='Enter your E-mail' />
                </div>

                <div className={styles.inputWrapper}>
                    <input className={styles.inputMail} type='text' placeholder='Mobile Number' />
                </div>

                <div className={styles.inputWrapper}>
                    <input className={styles.inputMail} type='text' placeholder='Company’s name or your name' />
                </div>

                <div className={styles.inputWrapper}>
                    <input className={styles.inputMail} type='text' placeholder='Web site or social media link' />
                </div>

                <div className={styles.inputWrapperTwo}>
                    <textarea className={styles.inputAbout} placeholder='Web site or social media link' />
                </div>

                <div className={styles.checkBoxAccept}>
                    <div className={styles.checkboxWrapper}>
                        <input type="checkbox" className={styles.checkbox} />
                    </div>
                    <div className={styles.fontAccept}>
                        I accept terms and conditions.
                    </div>
                </div>
                <div className={styles.button}>
                    <Button title={'Send'} />
                </div>
            </div>


        </div>

    )
}

