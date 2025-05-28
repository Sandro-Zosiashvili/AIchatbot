
import styles from './Footer.module.scss'
import Image from 'next/image'




const Footer = () => {

    return (

        <div className={styles.container}>
            <div className={styles.footerContent}>
                <div className={styles.footerTolkify}>
                    <div className={styles.footerHeaderTolkifiy}>
                        Talkify Website
                    </div>
                    <div >
                        Explore the high-tech, low-life world where the lines
                    </div>
                    <div>
                        between humanity
                    </div>

                </div>
                <div className={styles.footerInformation}>
                    <div className={styles.footerHeader}>
                        Information
                    </div>
                    <div className={styles.smallFont}>
                        Press Centre
                    </div>
                    <div className={styles.smallFont}>
                        Our Blog
                    </div>
                    <div className={styles.smallFont}>
                        Term and Condition
                    </div>

                </div>
                <div className={styles.footerMenu}>
                    <div className={styles.footerHeader}>
                        Menu
                    </div>
                    <div className={styles.smallFont}>
                        About
                    </div>
                    <div className={styles.smallFont}>
                        Services
                    </div>
                    <div className={styles.smallFont}>
                        Blog
                    </div>
                </div>
                <div className={styles.footerContact}>
                    <div className={styles.footerHeader}>
                        Contact
                    </div>
                    <div className={styles.smallFont}>
                        Phone: +123 456 789
                    </div>
                    <div className={styles.smallFont}>
                        Email: info@talkify.com
                    </div>

                </div>

            </div>
            <div className={styles.footearUnderContent}>
                <div className={styles.footerBottom}>
                    <div className={styles.copyright}>
                        <Image src={'./Images/copyright.svg'} height={16} width={16} alt='copyright.svg' />
                        Cyber.AI - Cyber Punk 2024. All rights reserved.
                    </div>
                    <div className={styles.terms}>
                        <div className={styles.pointer}>
                            Terms
                        </div>
                        <div className={styles.pointer}>
                            Privacy
                        </div>
                        <div className={styles.pointer}>
                            Cookies
                        </div>
                    </div>

                </div>

                <div className={styles.logos}>
                    <Image className={styles.pointer} src={'./Images/instagram-logo.svg'} height={40} width={32} alt='copyright.svg' />
                    <Image className={styles.pointer} src={'./Images/facebook-logo.svg'} height={40} width={32} alt='copyright.svg' />
                    <Image className={styles.pointer} src={'./Images/facebook-logo.svg'} height={40} width={32} alt='copyright.svg' />
                </div>
            </div>

        </div>
    )
}

export default Footer