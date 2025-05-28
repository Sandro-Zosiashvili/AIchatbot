


import Questions from '../Questions/Questions'
import Seventhheader from '../Seventhheader/Seventhheader'
import styles from './Seventhpage.module.scss'



const Seventhpage = () => {

    return (
        <div className={styles.container}>
            <Seventhheader />


            <div className={styles.questions}>
                <div  className={styles.contentInside}>
                    <Questions
                        number={'01.'}
                        header={'How d I stay updated on new content and events?'}
                        content={'A realm where advanced technology meets dystopian reality. Our website is your gateway....'}
                    />
                    <Questions
                        number={'03.'}
                        header={'Can I purchase and whats the price?'}
                        content={'A realm where advanced technology meets dystopian reality. Our website is your gateway....'}
                    />

                </div>
                <div className={styles.contentInside}>
                    <Questions
                        number={'02.'}
                        header={'What specific services do you offer to customers?'}
                        content={'A realm where advanced technology meets dystopian reality. Our website is your gateway....'}
                    />
                    <Questions
                        number={'04.'}
                        header={'Whats your working ours?'}
                        content={'A realm where advanced technology meets dystopian reality. Our website is your gateway....'}
                    />

                </div>
            </div>



        </div>
    )
}

export default Seventhpage