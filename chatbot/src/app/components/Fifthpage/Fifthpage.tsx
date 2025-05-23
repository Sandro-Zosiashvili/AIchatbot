
import Corner from '../Corner/Corner'
import Fifthheader from '../Fifthheader/Fifthheader'
import Spcontent from '../Spcontent/Spcontent'
import Univers from '../Univers/Univers'
import styles from './Fifthpage.module.scss'



const Fifthpage = () => {


    return (
        <div className={styles.container}>
            <div className={styles.corner}>
                <Corner rotate={'45deg'}  />
            </div>
            <div className={styles.cornerTwo}>
                <Corner rotate={'270deg'} color={'yellow'}  />
            </div>
            <div>
                <Fifthheader />

            </div>
            <div>
                <Spcontent content={'A realm where advanced technology meets dystopian reality. Our website is your gateway to the modern world.'} width='600px' textAlign={'center'} fontSize={'18px'} />

            </div>
            <div className={styles.universeWraper}>
                <Univers image={'/Images/mitre.svg'}
                    title={'Discover the Future'}
                    content={'Explore the high-tech, low-life world where the lines between humanity '}
                />
                <Univers image={'/Images/search.svg'}
                    title={'Explore Features'}
                    content={'Explore the high-tech, low-life world where the lines between humanity '}
                />
                <Univers image={'/Images/cable.svg'}
                    title={'Stay Connected'}
                    content={'Explore the high-tech, low-life world where the lines between humanity '}
                />

            </div>



            {/* <Fifthheader /> */}

        </div>

    )
}


export default Fifthpage