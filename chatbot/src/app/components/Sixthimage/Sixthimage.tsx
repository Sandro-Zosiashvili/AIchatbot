


import styles from './Sixthimage.module.scss'
import Image from 'next/image'



const Sixthimage = () => {



    return (
        <div className={styles.container}>

            <Image src={'/Images/sixth-image.svg'} width={614} height={598} alt='Sixth-image' />

        </div>

    )
}


export default Sixthimage