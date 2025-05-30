
import styles from './Aimain.module.scss'
import Image from 'next/image'

interface Props {

    onClick: () => void
}



const Aimain = (props: Props) => {



    return (
        <div className={styles.containerWrapper}>
            <div className={styles.container} >
                <div className={styles.header}>
                    <div className={styles.headerContent}>
                        <div>
                            New conversation
                        </div>
                        <div>
                            <Image src={'./Images/Vector.svg'} height={19} width={15} alt='x-logo-close' />
                        </div>
                    </div>
                    <div onClick={props.onClick} className={styles.pointer}>
                        <Image src={'./Images/x.svg'} height={25} width={25} alt='x-logo-close' />
                    </div>
                </div>
                <div className={styles.chat}>

                </div>
                <div className={styles.inputWrapper}>

                    <textarea className={styles.input} placeholder='ask anything...' />
                    <button className={styles.button} type='submit'>
                        <Image src={'/Images/sendmessage.svg'} width={15} height={15} alt='send-message' />
                    </button>

                </div>


            </div>

        </div>

    )

}

export default Aimain