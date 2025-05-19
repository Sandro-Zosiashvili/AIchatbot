import styles from './Spcontent.module.scss'

type Props = {

    content: String
}

const Spcontent = (props: Props) => {


    return (
        <div className={styles.container}>
            {props.content}
        </div>
    )
}

export default Spcontent