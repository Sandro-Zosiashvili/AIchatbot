
import Qanswers from '../components/Qanswers/Qanswers'
import styles from './page.module.scss'




const aboutus = () => {

    return (
        <div className={styles.container}>

            <div className={styles.aboutusHeader}>
                About <span className={styles.different}>Us</span>
            </div>

            <div className={styles.questionContent}>
                <div>
                    <Qanswers
                        number={'1'}
                        question={'What exactly does Talkify AI offer?'}
                        answer={'We build and integrate smart AI chatbots into your website or social media platforms to automate tasks, manage leads, and provide 24/7 customer support.'}
                        margin='50px'
                    />
                    <Qanswers
                        number={'2'}
                        question={'Can your chatbot handle customer questions automatically?'}
                        answer={'Yes! Our bots are trained to respond instantly with human-like accuracy and can be customized to match your business tone and knowledge base.'}
                        margin='50px'
                    />
                    <Qanswers
                        number={'3'}
                        question={'What platforms does Talkify AI support?'}
                        answer={'We integrate with websites, Instagram, Facebook, WhatsApp, and more — helping you serve customers wherever they are.'}
                        margin='50px'
                    />
                    <Qanswers
                        number={'4'}
                        question={'How can AI bots help my business grow?'}
                        answer={'They automate repetitive tasks, improve response time, capture qualified leads, and keep your audience engaged 24/7 — all without extra staff.'}
                        margin='50px'
                    />
                    <Qanswers
                        number={'5'}
                        question={'Is Talkify AI customizable to my brand?'}
                        answer={'Absolutely. From voice tone to visual design, our AI can be tailored to match your brand identity perfectly.'}
                        margin='50px'
                    />

                </div>
                <div>
                    <Qanswers
                        number={'6'}
                        question={'Can your bots book or collect data?'}
                        answer={'Yes! Our AI can schedule bookings, collect customer data, and sync with your CRM or calendar tools seamlessly.'}
                        margin='50px'
                    />
                    <Qanswers
                        number={'7'}
                        question={'Do I need technical skills to use Talkify AI?'}
                        answer={'Not at all. We handle setup, training, and integration — you just focus on your business.'}
                        margin='50px'
                    />
                    <Qanswers
                        number={'8'}
                        question={'How long does it take to launch a bot?'}
                        answer={'Depending on the complexity, most bots go live in 2–5 days with full support from our team.'}
                        margin='50px'
                    />
                    <Qanswers
                        number={'9'}
                        question={'What industries do you work with?'}
                        answer={'We serve e-commerce, real estate, health, education, and more — any brand needing smarter customer interactions.'}
                        margin='50px'
                    />
                    <Qanswers
                        number={'10'}
                        question={'How secure is Talkify AI?'}
                        answer={'We follow industry-standard security protocols to ensure all user data and interactions are safe and private.'}
                        margin='50px'
                    />
                </div>
            </div>



        </div>

    )

}


export default aboutus